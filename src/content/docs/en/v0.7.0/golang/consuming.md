---
title: "Consuming Messages"
description: "Documentation on consuming messages"
---

Within the Go Client there are two ways to consumer messages, one is via the grpc client and the second is a wrapper around the grpc client built into the client library.

### Direct Client 

Below is a code example of how to use the Go client to consume messages:

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

// should be the same
if err := client.Login(context.Background(), "sybline"); err != nil {
    log.Fatal("error login:", err)
}

queue := "randomOne"
msgs, err := client.GetMessages(context.Background(), queue, 10)
if err != nil {
    log.Fatal("error get:", err)
}

for _, msg := range msgs {
    if err := client.Ack(context.Background(), queue, msg.Id); err != nil {
        fmt.Println("ack err:", err, msg.Id)
        continue
    }

    if err := client.Nack(context.Background(), queue, msg.Id); err != nil {
        fmt.Println("nack err:", err, msg.Id)
    }
}
```


### Custom Consumer


Here is a built in consumer within the Go client library, we recommend this for long-running processes.

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

		
// this is the critical step that includes your headers
if err := client.Login(context.Background(), "sybline"); err != nil {
    log.Fatal("error login:", err)
}

			
consumer, err := client.Consumer(5, 100*time.Millisecond, "randomOne")
if err != nil {
    log.Fatal("error consumer:", err)
}

for {
    data := <-consumer.Messages
    if err := consumer.Ack(context.Background(), data.Id); err != nil {
        fmt.Println("ack err:", err, data.Id)
        continue
    } 
    
     if err := consumer.Nack(context.Background(), data.Id); err != nil {
        fmt.Println("nack err:", err, data.Id)
        continue
    } 
}		
```

