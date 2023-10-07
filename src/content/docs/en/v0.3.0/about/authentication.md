---
title: "Authentication"
description: "Explains how authentication works"
---

Within Sybline the instance handles the initial authentication of the user but does not directly handle the sessions. 

Sybline currently outsources the session handling to [Redis](https://redis.com/). Using redis as the session manager it allows Sybline to have the following features/benefits:

* Timed Sessions
* Sessions Independent of Leader
    * Helps in achieving High Availability
* Greatly simplifes the communication between the nodes
    * Sybline does not have to communicate with each instance directly