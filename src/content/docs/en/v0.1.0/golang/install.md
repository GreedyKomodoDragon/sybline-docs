---
title: "Getting Started"
description: "How to install Go Client"
---

### Install

To be able to use the Go client you will need to install it, you can use the following command to do so:
```bash
go get github.com/GreedyKomodoDragon/sybline-go/handler
```

Once you have installed the package, we recommend you follow the documentation in the following order:

1. [Authentication](/en/golang/auth)
2. [Queues](/en/golang/queue)
3. [Routing](/en/golang/routing)
4. [Publisher](/en/golang/publisher)
5. [Consumer](/en/golang/consuming)

### Module Set up

The Sybline Go client module expose all of the structs and interfaces that are need to make your own Go client. 

Currently we use submodules to make the development of the client easier to manage, this may change if user feedback indicates that it is too annoying to split them up.