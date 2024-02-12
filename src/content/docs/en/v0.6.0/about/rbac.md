---
title: "Role Based Access Control"
description: "Shows how to use RBAC in Sybline"
---

As of v0.4.0 sybline now implements a Role Based Access Control system to allow users to be allowed or denied certain permissions. If you have used anything like [AWS IAM](https://aws.amazon.com/iam/) or [MongoDB's RBAC](https://www.mongodb.com/docs/manual/core/authorization/) you should be familiar with how Sybline implements RBAC in the cluster.

Sybline uses JSON as its format for reading in roles, an example RBAC looks like the following:
```js
{
    "role": "role_name",
    "actions": {
        "GetMessages": "deny:queueOne,allow:*",
        "Ack": "deny:queueOne,allow:*",
        "BatchAck": "deny:queueOne",
        "DeleteQueue": "allow",
        "CreateUser": "deny",
    }
}
```
Role above shows how to format a role and the use of allow/deny with and without wildcards.

It applies to both the gRPC and REST api.

### Multiple Roles Per User

A user can be assigned multiple roles, this should be used to create fine-grained roles and then if a user needs multiple permissions they can be assigned multiple roles instead of one super role.

### Deny over Allow

As with many RBAC systems, regardless of whether an allow has been provided if there is a deny then the user cannot perform the action.

### Implicit Deny

If there is no allow but also no deny, the user is still not allowed to perform the action, by default a user has no role and therefore cannot do anything.

### Action List

`allow/deny` - Action can either be allowed or denied, any parameters are valid

`allow/deny:*, allow/deny:queue-name` - actions can be wildcarded to allow/deny all, or can be restricted to specific queues or routing keys

Name | Options
---|---
GetMessages | allow/deny:*, allow/deny:queue-name
SubmitMessage  | allow/deny:*, allow/deny:queue-name
SubmitBatchedMessages  | allow/deny:*, allow/deny:queue-name
CreateQueue  | allow/deny
ChangePassword  | allow/deny
Ack  | allow/deny:*, allow/deny:queue-name
BatchAck  | allow/deny:*, allow/deny:queue-name
DeleteQueue  | allow/deny
CreateUser  | allow/deny
DeleteUser  | allow/deny
CreateRole  | allow/deny
DeleteRole  | allow/deny
AssignRole  | allow/deny
UnassignRole  | allow/deny
AddRoutingKey  | allow/deny
DeleteRoutingKey  |allow/deny