### AMP协议说明 版本0

```
      0        1 2 3 4   5 6 7 8     9     10 11     12 13   14151617 <length>-18
+------------+----------+---------+------+-------+---------+---------+------------+
| <ver/argc> | <length> |  <seq>  |<type>|<serId>| <msgId> |  <code> |   <data>   |
+------------+----------+---------+------+-------+---------+---------+------------+
```

+ ver/argc = 版本 固定填0
+ length = 为总包长
+ seq  = 请求序列号
+ type = 消息类型
	* 1 = Request 请求消息
	* 2 = Response 响应消息
	* 3 = Notify 通知消息
+ serId = serviceId  服务号
+ msgId = msgId 消息ID
+ code = 当 type = 0 （请求时）固定传0 ，其他即为响应码，如果响应码不为0 则认为请求失败，具体错误码再定义
+ data = 实际的业务数据


### AMP协议说明 版本1

```
      0        1 2 3 4   5 6 7 8     9     10 11 12 13   1415      16171819    20    <length>-21
+------------+----------+---------+------+-------------+---------+---------+--------+------------+
| <ver/argc> | <length> |  <seq>  |<type>| <serviceId> | <msgId> |  <code> | <codec>|   <data>   |
+------------+----------+---------+------+-------------+---------+---------+--------+------------+
```

+ ver/argc = 版本 固定填1
+ length = 为总包长
+ seq  = 请求序列号
+ type = 消息类型
    * 1 = Request 请求消息
    * 2 = Response 响应消息
    * 3 = Notify 通知消息
    * 4 = InvokeWithoutResponse 调用不关心返回值
+ serId = serviceId  服务号
+ msgId = msgId 消息ID
+ code = 当 type = 0 （请求时）固定传0 ，其他即为响应码，如果响应码不为0 则认为请求失败，具体错误码再定义
+ codecType = 编码方式 0=默认 Protobuf 1=MessagePack 2=JSON
+ data = 实际的业务数据
