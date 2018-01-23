// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: ProtobufObjectfactory
#region Designer generated code

using DotBPE.Protobuf;
using System.Collections.Generic;

namespace Survey.Core {
    public static class HttpApiOptions {
        public static List<HttpApiOption> GetList()
        {
            var list = new List<HttpApiOption>();
            list.Add(new HttpApiOption()
            {
                ServiceId = 10000,
                MessageId = 11,
                Path = "/api/qpaper/save",
                Method = "post",
                Description = "保存问卷信息"
            });
            list.Add(new HttpApiOption()
            {
                ServiceId = 10000,
                MessageId = 12,
                Path = "/api/qpaper/query",
                Method = "all",
                Description = "查询列表"
            });
            list.Add(new HttpApiOption()
            {
                ServiceId = 10000,
                MessageId = 13,
                Path = "/api/qpaper/simple",
                Method = "get",
                Description = "获取问卷信息"
            });
            list.Add(new HttpApiOption()
            {
                ServiceId = 10000,
                MessageId = 14,
                Path = "/api/qpaper/get",
                Method = "get",
                Description = "获取问卷详情信息"
            });
            list.Add(new HttpApiOption()
            {
                ServiceId = 10000,
                MessageId = 21,
                Path = "/api/apaper/save",
                Method = "post",
                Description = "保存答卷信息"
            });
            list.Add(new HttpApiOption()
            {
                ServiceId = 10000,
                MessageId = 22,
                Path = "/api/apaper/query",
                Method = "all",
                Description = "查询答卷信息"
            });
            list.Add(new HttpApiOption()
            {
                ServiceId = 10000,
                MessageId = 23,
                Path = "/api/apaper/get",
                Method = "get",
                Description = "获取答卷信息"
            });
            list.Add(new HttpApiOption()
            {
                ServiceId = 10001,
                MessageId = 31,
                Path = "/api/user/register",
                Method = "post",
                Description = "注册用户"
            });
            list.Add(new HttpApiOption()
            {
                ServiceId = 10001,
                MessageId = 32,
                Path = "/api/gate/login",
                Method = "post",
                Description = "用户登录"
            });
            list.Add(new HttpApiOption()
            {
                ServiceId = 10001,
                MessageId = 33,
                Path = "/api/user/save",
                Method = "post",
                Description = "保存修改的用户信息"
            });
            list.Add(new HttpApiOption()
            {
                ServiceId = 10001,
                MessageId = 34,
                Path = "/api/gate/check",
                Method = "get",
                Description = "获取用户信息"
            });
            return list;
        }
    }
}
#endregion
