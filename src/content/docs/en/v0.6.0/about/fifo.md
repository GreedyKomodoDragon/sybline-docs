---
title: "FIFO Queues"
description: "Explaining how Sybline's queues work"
---

In the current version of Sybline there is only one type of queue, the "Mirrored FIFO-ish" Queue. This may seem a bit odd at first, but we will explain each of the terms to make this make more sense.

### Mirrored

Sybline's Queues are mirror, or replicated across clusters. This means that if one event happens in the "leader", the same action is applied to the "follower". Sybline uses the [Raft consensus Algorithm](https://raft.github.io/) to achieve this.

Sybline uses a custom library for raft utlising grpc, where both grpc servers are running on the same node. A node in this context is the instance of Sybline, regardless of if it is in a container, vm or bare metal.

### FIFO-ish

_FIFO_ _stands_ _for_ _"First-In-First-Out"_

The queue offered by Sybline works in a FIFO style, but doesn't the follow the exact specification of a traditional FIFO. 

Items added to the queue are added to the end, but items at the beginning are not always removed first. Items at the front of the queue are selected and "locked" by a consumer, but items after the front of the queue can be remove. 
