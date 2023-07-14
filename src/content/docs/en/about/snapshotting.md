---
title: "Snapshotting"
description: "Explaining the snapshot process in Sybline"
---

Sybline does offer some level of snapshotting, that can be used to reload nodes during a restart. The current solution works by performing a full snapshot on the consensus logs after a configured amount of logs have been reached. 

All snapshots are placed within the directory `node_data/snapshots`. Configurations for the snapshot can be found on the [configuration docs](/en/about/configurations#snapshots) page. 