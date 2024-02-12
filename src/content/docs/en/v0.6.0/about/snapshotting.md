---
title: "Snapshotting"
description: "Explaining the snapshot process in Sybline"
---

Sybline does offer snapshotting as a core featue, that can be used to reload nodes during a restart. The current solution works by performing incremental snapshots on the consensus logs, where you can set the threshold for how many logs wait for before pushing to disk. 

All snapshots are placed within the directory `node_data/logs`. Configurations for the snapshot can be found on the [configuration docs](/en/about/configurations#snapshots) page. 