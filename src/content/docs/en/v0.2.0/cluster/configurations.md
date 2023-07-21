---
title: "Configurations"
description: "List of All possible configurations"
---

Here is all the possible configurations for a Sybline Cluster. Any configurations that do not have a default value will require you to set a value, or the cluster will fail to launch.

### Networking

Name | Default Value | Description
---|---|---
SERVER_PORT | 2221 | This is the port that will be exposed on the Sybline instance for the GRPC endpoints.
HOST_IP |  | Required to be set. This is the IP address that the ports used by the instance will be binded to.
TLS_ENABLED  | False | Boolean that determines whether the instance enables TLS. The certification file and the private key file will have to be located within `/cert` directory under `./cert/certificate.crt` and `./cert/private.key`.

### Raft Configurations

Name | Default Value | Description
---|---|---
ELECTION_TIMEOUT | 2 | Number of seconds before an election's state is determined.
HEARTBEAT_TIMEOUT | 2 | Number of seconds that each instance of the cluster is checked by the leader. Recommend increasing from the base as will improve performance, but test stability for blindly updating.
LEADER_LEASE_TIMEOUT | 2 | This is the number of seconds that a node will make itself the leader before it steps down for an election. Required to be >= HEARTBEAT_TIMEOUT or will fail to launch.
RAFT_NODE_ID | | Required to be set. This is the id of the node for the raft algorithm
RAFT_PORT | 1111 | The port that the raft server binds to, this is used by the other nodes to perform the cluster consenus.
RAFT_VOL_DIR | node_data | This the top directory for all the raft sub-directories go within. Match this to your mounted volume if using docker-compose or kubernetes.
NODES |  | This is list of all the node id in a comma separated list of all the node ids of the other nodes from the configuration `RAFT_NODE_ID` e.g. node2,node3 if current node is named node1 with two other nodes named node2 & node3
ADDRESSES | | A list of the other nodes within the cluster e.g. node_2:1111,node_3:1111


### Snapshots

Name | Default Value | Description
---|---|---
SNAPSHOT_THRESHOLD | 10000 | The number of logs before a snapshot can occur, the instance will not instantly start a snapshot once this threshold has been hit. Once a snapshot occurs the count is reset and another SNAPSHOT_THRESHOLD amount of logs must be applied before it can send an additional snapshot.
SNAPSHOT_RETENTION_COUNT | 3 | Number of snapshots that are kept before the oldest snapshot is deleted.
BATCH_LIMIT | 1000 | Threshold for the number of logs kept in memory before they are flushed to disk; logs will be read into memory as required.
CACHE_LIMIT | 100 | The number of logs that are guaranteed to be kept in memory, more logs may be in memory; BATCH_LIMIT.

### Session

Name | Default Value | Description
---|---|---
REDIS_IP |  | Must be set before the Sybline instance/cluster can start e.g. localhost:6379
TOKEN_DURATION | 1800 | The number of seconds that a session is active for, after the TOKEN_DURATION value the entry in the redis instance is no longer there
REDIS_DATABASE | 0 | The database within the redis instance/cluster that holds the session data
REDIS_PASSWORD | "" | This is the password that is required by the redis instance/cluster to access it
SALT |  | Used when creating password hashes, keep this secret. This helps migrate against attacks aimed at breaking password and gaining access to Sybline via the clients.

### Node Management

Name | Default Value | Description
---|---|---
NODE_TTL | 300 | Number of seconds before a node can be re-assigned to a new consumer. 
