---
title: "Deploying on Kubernetes"
description: "Using the official Helm Chart to deploy to Kubernetes"
---

This section provides the instructions on how to deploy the Sybline Broker Helm chart.

## Prerequisites

Before you begin, make sure you have the following prerequisites installed:

- [Helm](https://helm.sh/docs/intro/install/) installed on your local machine.
- Access to a Kubernetes cluster + Logged into Kubernetes Cluster

## Steps

### 1. Clone the GitHub Repository

Clone the GitHub repository containing the Helm chart to your local machine using the following command:

```bash
git clone https://github.com/GreedyKomodoDragon/sybline-charts
```

### 2. Navigate to the Sybline broker

Within the repo run the following command:

```bash
cd sybline-broker
```

### 3. Deploy Helm Chart

Using the following command you can deploy the helm chart with the default options:

```bash
helm upgrade -i sybline-broker .
```

### 4. Verify the Helm Chart is Install

You can confirm the pods are active by using the following:

```bash 
kubectl get pods
```

With the default configuration you should see three pods with the name format of: `sybline-X`