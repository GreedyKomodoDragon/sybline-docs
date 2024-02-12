---
title: "Performance"
description: "Performance recommendations"
---

Raft consensus is the critical bottleneck, necessitates focused attention alongside considerations for network speed and disk performance. Mitigating the impact of Raft's consensus bottleneck involves optimizing network speed to expedite communication, enhancing disk performance to alleviate lag spikes during snapshot processes.

You should also ensure CPU and RAM are not a limiting factor in managing in-memory operations, and refining CPU capabilities while balancing resource constraints imposed by Raft's operations. Implementing isolated routes and multiple instances further aids in minimizing bottlenecks across these components, resulting in an overall improvement in system efficiency and responsiveness.

To address this, alongside mitigating disk-related issues, consider the following strategies.

## Network Speed Enhancement

Elevating network speed remains essential to minimize interruptions, even in an in-memory system. From an operational view, this is strengthening networking hardware e.g. moving from 1G to 10G networking.

## Disk Performance Enhancement

Optimizing disk performance, especially concerning the snapshot process, is vital. Transitioning away from HDD to SSD technology significantly reduces interruptions caused by disk operations. This alleviates the impact of snapshot-related lag spikes, ensuring smoother system performance.

This will also have a major impact on how quickly a node can read logs and then re-play them to get back up to speed.

## RAM Performance Optimization

Focus on maximizing RAM performance to prevent it from becoming a bottleneck in an raft based system, there will be a limit to how much this will improve the system.

## CPU Enhancement

Enhancing CPU capabilities remains valuable, but again, will be capped and spending anymore on CPU may no longer be worth the extra cost. 

## Isolated Routes and Multiple Instances

Segregating non-interacting components and leveraging multiple instances strategically remain beneficial to minimize bottlenecks caused by various system components. 

Within sybline this mainly means separating out queues into their own clusters if they do not need to be together, this will increase operational complexity but will reduce the bottleneck of handling raft logs.