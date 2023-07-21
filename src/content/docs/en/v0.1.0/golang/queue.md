---
title: "Queue Creation"
description: "Creating a Queue using the Go Client"
---

Within this section it will show and explain how to create a queue within Sybline via the client.

Sybline works by on creation of a queue you have to prvide the routing key with the configuration, no queue can be interacted without a routing key, nor can a queue exist that is not connected to a routing key (a routing key can exist without a queue though).

### Client Code Example

Queue creation using the client uses the following code:
```go
// Queue creation starts here
amount := uint32(20)
queueName := "queue"
routingKey := "route"
if err := client.CreateQueue(ctx, routingKey, queueName, amount); err != nil {
    log.Fatal("error queue:", err)
}
```

### Size Parameter

Sybline's queue size works by limiting the messages that go to the queue. If the size limit is reached, currently messages are silently dropped. This is a limitation of the v0.1.0 launch of sybline and will be handled, currently recommend that if messages are being dropped, give the queue more space.


### Full Code Example

```go
// NewUnsecurePasswordManager - Do not use in production
passwordManager := handler.NewUnsecurePasswordManager()
passwordManager.SetPassword("sybline", "sybline")

client, err := handler.NewBasicSyblineClient([]string{"localhost:2221", "localhost:2222", "localhost:2223"}, passwordManager, handler.Config{
    TimeoutSec:      5,
    TimeoutAttempts: 3,
})
if err != nil {
    log.Fatal("error cannot connect:", err)
}

ctx := context.Background()
if err := client.Login(ctx, "sybline") ; err != nil {
    log.Fatal("error login:", err)
}


// Queue creation starts here
amount := uint32(20)
queueName := "queue"
routingKey := "route"
if err := client.CreateQueue(ctx, routingKey, queueName, amount); err != nil {
    log.Fatal("error queue:", err)
}
```