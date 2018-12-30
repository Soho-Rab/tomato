using DotBPE.Rpc;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using DotBPE.Rpc.Server.Impl;

namespace MathService.Definition
{
    public class MathService: BaseService<IMathService>,IMathService
    {
        public Task<RpcResult<SumRes>> SumAsync(SumReq req)
        {
            RpcResult<SumRes> result = new RpcResult<SumRes>() { Data = new SumRes() };
            result.Data.Total = req.A + req.B;
            return Task.FromResult(result);
        }
    }

    [RpcService(100)]
    public interface IMathService
    {
        [RpcMethod(1)]
        Task<RpcResult<SumRes>> SumAsync(SumReq req);
    }

}
