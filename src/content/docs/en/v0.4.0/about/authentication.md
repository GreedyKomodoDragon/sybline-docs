---
title: "Authentication"
description: "Explains how authentication works"
---

As of v0.4.0, sybline now handles the session management and no longer requires an instance/cluster of redis to maintain state/sessions.

Sybline will now pass the session to the other nodes in the cluster when it is created, this will be in a best-effort manner. This means there may be some cases where the session was not exported successfully and will require the client to log back in; in offical clients this should be handled automatically.

Without Redis it still has the following features:

* Timed Sessions
* High Availability

## Types of Authentication

### Username-Password

Username-Password is the only way that a client is able to authenticate itself to the cluster.

The client is returned a token on a successful login. The client must send its username and that token everytime it wants to perform an action that requires authentication.

