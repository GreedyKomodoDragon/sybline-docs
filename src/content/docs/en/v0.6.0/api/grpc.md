---
title: "gRPC API"
description: "The gRPC API that is used to connect to a sybline instance"
---

You can find the gRPC API for the Sybline Clients at the [Sybline Repo on Github](https://github.com/GreedyKomodoDragon/Sybline/blob/main/pkg/rpc/mq.proto).

Below is an extract of that proto file:

```proto
service MQEndpoints {
    rpc GetMessages(RequestMessageData) returns (MessageCollection) {}
    rpc SubmitMessage(MessageInfo) returns (Status) {}
    rpc CreateQueue(QueueInfo) returns (Status) {}
    rpc Ack(AckUpdate) returns (Status) {}
    rpc Login(Credentials) returns (Status) {}
    rpc ChangePassword(ChangeCredentials) returns (Status) {}
    rpc Nack(AckUpdate) returns (Status) {}
    rpc DeleteQueue(DeleteQueueInfo) returns (Status) {}
    rpc AddRoutingKey(AddRoute) returns (Status) {}
    rpc DeleteRoutingKey(DeleteRoute) returns (Status) {}
    rpc CreateUser(UserCreds) returns (Status) {}
    rpc SubmitBatchedMessages(BatchMessages) returns (Status) {}
    rpc IsLeaderNode(LeaderNodeRequest) returns (Status) {}
    rpc DeleteUser(UserInformation) returns (Status) {} 
    rpc BatchAck(BatchAckUpdate) returns (Status) {} 
    rpc BatchNack(BatchNackUpdate) returns (Status) {} 
    rpc LogOut(LogOutRequest) returns (LogOutResponse) {}
    rpc CreateRole(CreateRoleRequest) returns (CreateRoleResponse) {}
    rpc AssignRole(AssignRoleRequest) returns (AssignRoleResponse) {}
    rpc UnassignRole(UnassignRoleRequest) returns (UnassignRoleResponse) {}
}
```

If you want to create your own client to interact with the cluster and to minimise issue, recommend using a code generation tool such as [Proto Compiler](https://protobuf.dev/programming-guides/proto3/#generating).