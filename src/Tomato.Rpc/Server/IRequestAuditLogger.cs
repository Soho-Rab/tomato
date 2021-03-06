using Tomato.Rpc.Protocol;
using Peach;
using System;

namespace Tomato.Rpc.Server
{
    public interface IRequestAuditLogger: IDisposable
    {
        string MethodFullName { get; }

        void SetContext(IRpcContext context);
        void SetParameter(object parameter);
        void SetReturnValue(object retVal);
    }
}
