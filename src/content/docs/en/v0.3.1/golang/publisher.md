---
title: "Publishing Messages"
description: "Documentation on publishing messages"
---

### Individually Publishing

Messages can be sent individually to the Sybline Cluster.

Full Code Example:

```go
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

// this is the critical step that includes your headers
if err := client.Login(ctx, "sybline"); err != nil {
    log.Fatal("error login:", err)
}

amount := uint32(10)
queueName := "randomOne"
retryThreshold := uint32(3)
queueName := "randomOne"
hasDLQ := true
if err := client.CreateQueue(ctx, "random", queueName, amount, retryThreshold, hasDLQ); err != nil {
    log.Fatal("error queue:", err)
}

if err := client.SubmitMessage(ctx, "random", []byte("data")); err != nil {
    fmt.Println("error submit:", err, i)
}
```

### Batch Publishing

Messages can also be sent in batches, must more efficient than send messages one at a time. The benefits are

* It reduces the number of logs that have to be stored
* Entries can be inserted as one block as if it was a single message
* Allows you to mix routes into a single batch e.g. you can send two different routes in the same batch process

Full Code example:

```go
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

// this is the critical step that includes your headers
if err := client.Login(ctx, "sybline"); err != nil {
    log.Fatal("error login:", err)
}

amount := uint32(10)
queueName := "randomOne"
route := "random"
retryThreshold := uint32(3)
hasDLQ := true
if err := client.CreateQueue(ctx, route, queueName, amount, retryThreshold, hasDLQ); err != nil {
    log.Fatal("error queue:", err)
}

messages := []handler.Message{
    {
        Rk:   route,
        Data: []byte("data0"),
    },
    {
        Rk:   route,
        Data: []byte("data1"),
    },
    {
        Rk:   route,
        Data: []byte("data2"),
    },
    {
        Rk:   route,
        Data: []byte("data3"),
    },
}

if err := client.SubmitBatchMessage(ctx, messages); err != nil {
    fmt.Println("error submit:", err)
}
```

