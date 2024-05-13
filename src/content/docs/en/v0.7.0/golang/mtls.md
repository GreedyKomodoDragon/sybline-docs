---
title: "mTLS"
description: "Using mTLS to add an additional layer of authentication to clients"
---

## Creating the mTLS client

You are able to create the mTLS client using the following code.

```go
	passwordManager := handler.NewUnsecurePasswordManager()
	passwordManager.SetPassword("sybline", "sybline")

	client, err := handler.NewTLSSyblineClient(
		[]string{"localhost:2221", "localhost:2222", "localhost:2223"},
		"cert/ca-cert.pem",
		"cert/cert.pem",
		"cert/key.pem",
		true,
		passwordManager,
		handler.Config{
			TimeoutSec:      5,
			TimeoutAttempts: 3,
		})

```

Ensure that when configuring HTTPS access for Sybline, you use a valid and trusted Certificate Authority (CA) to sign your SSL/TLS certificate, and provide a secure private key and certificate. This practice is essential for establishing a secure and trusted connection between your Sybline service and clients accessing the metrics over HTTPS.