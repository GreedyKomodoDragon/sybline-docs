---
title: "Deploying Docker Cluster"
description: "Showing how to deploy a docker cluster"
---

## Demo using Docker Containers

We will show you how to deploy with docker using docker-compose. We recommend this as a good way to develop with Sybline but not for a production environment.

### Prerequisites

You will need the following tools:

* Docker: 
    * Mac: 
        * Please follow the steps as defined in [Install Docker Desktop](https://docs.docker.com/desktop/install/mac-install/)
    * Linux:
        * Please follow the steps as defined in [Install Docker](https://docs.docker.com/engine/install/)

### Setting up the Docker Cluster

Either copy the below file, or clone the [Sybline Repo](https://github.com/GreedyKomodoDragon/Sybline) and then within the repo's directory, look within the `docker-compose.yml` file, should look like the following:

```yml
version: '3.1'

services:
  node_1:
    image: sybline
    hostname: node_1
    environment:
      - SERVER_PORT=2221
      - RAFT_NODE_ID=1
      - TLS=false
      - NODES=2,3
      - ADDRESSES=node_2:1111,node_3:1111
      - BATCH_LIMIT=10000
      - SNAPSHOT_THRESHOLD=20000
    volumes:
      - './node_1_data:/node_data'
    ports:
      - 2221:2221
    networks:
      webnet:
        ipv4_address: 10.5.0.4

  node_2:
    image: sybline
    hostname: node_2
    environment:
      - SERVER_PORT=2221
      - RAFT_NODE_ID=2
      - TLS=false
      - NODES=1,3
      - ADDRESSES=node_1:1111,node_3:1111
      - BATCH_LIMIT=10000
      - SNAPSHOT_THRESHOLD=20000
    volumes:
      - './node_2_data:/node_data'
    ports:
      - 2222:2221
    networks:
      webnet:
        ipv4_address: 10.5.0.5

  node_3:
    image: sybline
    hostname: node_3
    environment:
      - SERVER_PORT=2221
      - RAFT_NODE_ID=3
      - TLS=false
      - NODES=1,2
      - ADDRESSES=node_1:1111,node_2:1111
      - BATCH_LIMIT=10000 
      - SNAPSHOT_THRESHOLD=20000
    volumes:
      - './node_3_data:/node_data'
    ports:
      - 2223:2221
    networks:
      webnet:
        ipv4_address: 10.5.0.6
networks:
  webnet:
    driver: bridge
    ipam:
      config:
        - subnet: 10.5.0.0/16
          gateway: 10.5.0.1
```

Then it is as simple as running the following:

```sh
docker-compose up -f docker-compose.yml
```