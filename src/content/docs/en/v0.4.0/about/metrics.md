---
title: "Metrics"
description: "Showing how to collect metrics from Sybline"
---

## Prometheus Integration

Sybline now fully supports Prometheus, a popular open-source monitoring and alerting toolkit. Prometheus is designed for reliability and scalability and is ideal for collecting and querying metrics. You can easily configure Prometheus to scrape metrics from Sybline by following these steps:

### Step 1: Configuration

To start collecting metrics from Sybline, update your Prometheus configuration file (usually `prometheus.yml`) to include a job for Sybline. You can define this job with the following parameters:

```yaml
scrape_configs:
  - job_name: 'sybline'
    static_configs:
      - targets: ['sybline-service-url:port']
    metrics_path: /metrics
```

Replace `sybline-service-url` and `port` with the appropriate address and port number of your Sybline service.

### Step 2: Start Prometheus

Start your Prometheus server, and it will now begin collecting metrics from the Sybline service.

### Step 3: Query and Visualize Metrics

With Prometheus collecting data from Sybline, you can query and visualize your metrics using PromQL and Grafana, or any other tool of your choice. The metrics endpoint for Sybline is `/metrics`.

## HTTP and HTTPS Support

Sybline supports both HTTP and HTTPS, providing you with flexibility in how you access and transmit your metric data.

- **HTTP:** You can access the metric endpoint using the `http://` protocol. For example: `http://sybline-service-url:port/metrics`

- **HTTPS:** For added security, you can access the metric endpoint using the `https://` protocol. This ensures that your metric data is encrypted during transmission. Make sure your Sybline service is configured with a valid SSL/TLS certificate.
