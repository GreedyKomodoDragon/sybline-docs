---
title: "Authentication"
description: "Authenticating with the Golang Client"
---

## Creating a User

Creating a user using the Go client is as simple as the following piece of code:

```go
// Unsafe Memory Password Manager
passwordManager := NewUnsecurePasswordManager()
passwordManager.SetPassword("sybline", "sybline")

// Pass Password Manager to constructor function
client, err := NewBasicSyblineClient([]string{"localhost:2221", "localhost:2222", "localhost:2223"}, passwordManager)
if err != nil {
    log.Fatal("error cannot connect:", err)
}

ctx := context.Background()

// must explicitly login
if err := client.Login(ctx, "sybline"); err != nil {
    log.Fatal("error login:", err)
}

// Remember not to hard-encode your passwords!
if err := client.CreateUser(ctx, "user_one", "new_password"); err != nil {
    log.Fatal("error login:", err)
}
```

## Changing a Password

Changing a password is pretty simple with the Go client, use the following code when logged in:

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

// must explicitly login
if err := client.Login(ctx, "sybline"); err != nil {
    log.Fatal("error login:", err)
}

// Remember not to hard-encode your passwords!
if err := client.CreateUser(ctx, "user_one", "new_password"); err != nil {
    log.Fatal("error login:", err)
}
```

## Deleting a User

Deleting a user can be performed using the below code snippet. Sybline also does not allow you to delete all users; stop you from locking yourself out!

```go
// Unsafe Memory Password Manager
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

// must explicitly login
if err := client.Login(ctx, "sybline"); err != nil {
    log.Fatal("error login:", err)
}

// This will fail if you try to delete sybline without creating an additional user
if err := client.DeleteUser(ctx, "sybline"); err != nil {
    log.Fatal("error login:", err)
}
```

As of v0.1.0 sybline allows any user to delete any other user.