---
title: "Configurations"
description: "List of All possible configurations"
---

Changes to configurations over time:

* v0.6.0 - Added in Options for using auto configuration used in the sybline official helm chart
* v0.4.0 - greatly simplifes the session management environment variable since Redis is no longer needed.

Here is all the possible configurations for a Sybline Cluster. Any configurations that do not have a default value will require you to set a value, or the cluster will fail to launch.

### Networking

Name | Default Value | Description
---|---|---
SERVER_PORT | 2221 | This is the port that will be exposed on the Sybline instance for the GRPC endpoints.
TLS_ENABLED  | False | Boolean that determines whether the instance enables mTLS. The certification file and the private key file will have to be located within `/cert` directory under `./cert/ca-cert.pem`, `./cert/cert.pem` and `./cert/key.pem`.
PROM_PORT | 7878 | This is used to determine the rest api's port, it still retain the prom name due to prom being implemented by the rest API, in later versions this will be updated.


### Raft Configurations

Name | Default Value | Description
---|---|---
ELECTION_TIMEOUT | 2 | Number of seconds before an election's state is determined.
HEARTBEAT_TIMEOUT | 2 | Number of seconds that each instance of the cluster is checked by the leader. Recommend increasing from the base as will improve performance, but test stability for blindly updating.
RAFT_NODE_ID | | Required to be set. This is the id of the node for the raft algorithm
NODES |  | This is list of all the node id in a comma separated list of all the node ids of the other nodes from the configuration `RAFT_NODE_ID` e.g. 2,3 if current node is named 1 with two other nodes named 2 & 3
ADDRESSES | | A list of the other nodes within the cluster e.g. node_2:1111,node_3:1111
STREAM_BUILD_TIMEOUT | 2 | How long to wait to build a stream between nodes before timing out
STREAM_BUILD_ATTEMPTS | 3 | How many attempts to try build a stream betwen nodes before stopping
APPEND_TIMEOUT | 3 | How long to wait for the nodes to return a result on the append stream before timing out
### Snapshots

Name | Default Value | Description
---|---|---
SNAPSHOT_THRESHOLD | 10000 | The number of logs before a snapshot can occur, the instance will not instantly start a snapshot once this threshold has been hit. Once a snapshot occurs the count is reset and another SNAPSHOT_THRESHOLD amount of logs must be applied before it can send an additional snapshot.
BATCH_LIMIT | 1000 | Threshold for the number of logs kept in memory before they are flushed to disk; logs will be read into memory as required.

### Session

Name | Default Value | Description
---|---|---
TOKEN_DURATION | 1800 | The number of seconds that a session is active for
SALT |  | Used when creating password hashes, keep this secret. This helps migrate against attacks aimed at breaking password and gaining access to Sybline via the clients.

### Node Management

Name | Default Value | Description
---|---|---
NODE_TTL | 300 | Number of seconds before a node can be re-assigned to a new consumer. 


### Kubernetes

Name | Default Value | Description
---|---|---
K8S_AUTO | false | Used to get the sybline container to search for the other pods within a sybline statefulset. The following will be ignored when enabled: ADDRESSES, NODES and RAFT_NODE_ID.
STATEFULSET_NAME |  | This is used to tell the sybline container which statefulset it is part of
REPLICA_COUNT |  | This is number of pods that are in the statefulset, the container uses it to determine how many pods it needs to wait for before trying to connect to the other pods. If one pods fails to launch, this will currently block the server starting; in later versions this will be changed when just enough nodes can be found to establish a raft connection
HOSTNAME |  | This should be the Pods name in the statefulset e.g. sybline-0
