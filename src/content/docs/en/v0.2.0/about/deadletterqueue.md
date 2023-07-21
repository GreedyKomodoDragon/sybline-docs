---
title: "Dead Letter Queues"
description: "Explaining how Dead Letter Queues work"
---

As of v0.2.0, Sybline allows for Dead Letter Queues (DLQs). 

Dead Letter Queues are a way of moving failing messages/unprocessable messages to another queue to be handled in another manner. If you are interested in learning more about Dead Letter Queues, more information can be found at [Wikipedia](https://en.wikipedia.org/wiki/Dead_letter_queue). 

Sybline's Dead Letter Queues work slightly different to other systems. Dead Letter Queues have the following features:

* DLQs are optional, you don't have to have one!
* DLQ's are given the name of their matching queue plus `-dlq`
  * queue `A` has DLQ `A-dlq`
* Queues have a threshold for retries and then the message is moved to the DLQ
  * If you do not have a DLQ the messages are dropped from the queue
* Queues are not coupled
  * If I delete `A`, queue `A-dlq` is not deleted
  * You can treat it as a distinct non-DLQ queue
    * To mainly put on DLQ you push the data to the DLQ and then  Ack on the non-DLQ queue