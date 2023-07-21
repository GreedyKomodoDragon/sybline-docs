---
title: "Routing"
description: "Explaining the routing offered"
---

Sybline currently only offers a single type of routing, that is direct routing. 

This means that if you send a message it will only go to the queues that have been assigned to the route key. For example, if we have a route key `key` and it has the queues `A` and `B`, only `A` and `B` will receive that message.

There is no support for routing for pattern matching e.g. `%route%` which could mean any queue that has the word `route` within it.