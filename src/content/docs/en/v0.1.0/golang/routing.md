---
title: "Routing Messages"
description: "Routing with the Go Client"
---

Routing currently works in simple A to B routing, you directly connect routing keys to queue and then publish messages to the routing key. The broker will handle which queues get the messages.

### Creating Routing Keys with Queues

Below is an example of how to send a message to two queues:

```go
// Create Queue
amount := uint32(20)
queueOneName := "queue_one"
routingKey := "route"

// Create first queue with "route" routing key
if err := client.CreateQueue(ctx, routingKey, queueOneName, amount); err != nil {
    log.Fatal("error:", err)
}

// Create second queue with "route" routing key
queueTwoName := "queue_two"
if err := client.CreateQueue(ctx, routingKey, queueName, amount); err != nil {
    log.Fatal("error:", err)
}
```

### Adding Routing Keys

With the Go client you can also add routing keys to exising queues, e.g. multiple routing keys point to the same queue. Below is the code example:

```go
// Create Queue
amount := uint32(20)
queueName := "queue_one"
firstRoutingKey := "route"

// Create first queue with "route" routing key
if err := client.CreateQueue(ctx, firstRoutingKey, queueName, amount); err != nil {
    log.Fatal("error:", err)
}

// Add second routing key
secondRoutingKey := "route_two"
if err := client.AddRoutingKey(ctx, queueName, secondRoutingKey); err != nil {
    log.Fatal("error AddRoutingKey:", err)
}
```

### Deleting Routing Keys

If a queue has multiple routing keys, you are able to delete all but one of the keys; Sybline Queue cannot have orphan queues. If you attempt to delete the final queue you will get an error returned by the cluster.

Below is an example of how to delete a routing key from a queue and an example of the error if you attempt to remove all keys:

```go
// Create Queue
amount := uint32(20)
queueName := "queue_one"
firstRoutingKey := "route"

// Create first queue with "route" routing key
if err := client.CreateQueue(ctx, firstRoutingKey, queueName, amount); err != nil {
    log.Fatal("error:", err)
}

// Add second routing key
secondRoutingKey := "route_two"
if err := client.AddRoutingKey(ctx, queueName, secondRoutingKey); err != nil {
    log.Fatal("error AddRoutingKey:", err)
}

// Delete Original routing key
if err := client.DeleteRoutingKey(ctx, queueName, firstRoutingKey); err != nil {
    log.Fatal("error DeleteRoutingKey:", err)
}

// Will fail deleting second routing key
if err := client.DeleteRoutingKey(ctx, queueName, secondRoutingKey); err != nil {
    log.Fatal("error DeleteRoutingKey:", err)
}
```

