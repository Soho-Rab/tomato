using System.Threading;
using System.Threading.Tasks;
using Tomato.Rpc.Client;
using Tomato.Rpc.Protocol;

namespace Tomato.Rpc.Tests
{
    public class MockRpcClient : IRpcClient<AmpMessage>
    {
        private readonly IClientMessageHandler<AmpMessage> _handler;

        public MockRpcClient(IClientMessageHandler<AmpMessage> handler)
        {
            this._handler = handler;
        }

        public AmpMessage ReceiveMessage { get; private set; }

        public Task SendAsync(AmpMessage message)
        {
            this.ReceiveMessage = message;

            this._handler.RaiseReceive(message);
            return Task.CompletedTask;
        }

        public Task CloseAsync(CancellationToken cancellationToken)
        {
            return Task.CompletedTask;
        }
    }

    public class MockRpcClient2 : IRpcClient<AmpMessage>
    {
        private readonly IClientMessageHandler<AmpMessage> _handler;
        private readonly ISerializer _serializer;

        public MockRpcClient2(ISerializer serializer, IClientMessageHandler<AmpMessage> handler)
        {
            this._serializer = serializer;
            this._handler = handler;
        }

        public Task SendAsync(AmpMessage message)
        {
            var req = this._serializer.Deserialize<FooReq>(message.Data);

            var res = new FooRes {RetFooWord = req.FooWord};

            var resMessage = AmpMessage.CreateResponseMessage(message.ServiceId, message.MessageId);
            resMessage.Sequence = message.Sequence;
            resMessage.Data = this._serializer.Serialize(res);
            this._handler.RaiseReceive(resMessage);
            return Task.CompletedTask;
        }

        public Task CloseAsync(CancellationToken cancellationToken)
        {
            return Task.CompletedTask;
        }
    }
}
