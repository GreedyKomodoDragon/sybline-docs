---
title: "Authentication"
description: "Explains how authentication works"
---

As of v0.4.0, sybline now handles the session management and no longer requires an instance/cluster of redis to maintain state/sessions.

Sybline will now pass the session to the other nodes in the cluster when it is created, this will be in a best-effort manner. This means there may be some cases where the session was not exported successfully and will require the client to log back in; in offical clients this should be handled automatically.