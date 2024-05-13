---
title: "Snapshotting"
description: "Explaining the snapshot process in Sybline"
---

Sybline does offer snapshotting as a core featue, that can be used to reload nodes during a restart. The current solution works by performing incremental snapshots on the consensus logs, where you can set the threshold for how many logs wait for before pushing to disk. 

All snapshots are placed within the directory `node_data/logs`. Configurations for the snapshot can be found on the [configuration docs](/en/about/configurations#snapshots) page. 

### Binary LogStore

As of v0.7.0, the logstore now uses a binary encoding for the logs. Whereas previously this had been a Glob/Msgpack encoding to disk, this should decrease the computation required to both read and write logs to disk.

This was contributed into the custom Raft Library rather than within Sybline codebase, you can see the implementation for it here: https://github.com/GreedyKomodoDragon/raft/blob/main/binaryLogStore.go
