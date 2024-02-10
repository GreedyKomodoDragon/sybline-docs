---
title: "REST API"
description: "The REST API that is used within sybline"
---

Below is list of API by section, with the following information:

* HTTP Method
* Return Type Schema
* Any Path Parameters
* Any Request Body Schema

## Information API

### api/v1/info/routing

Method: GET

Response Type:

```js
{
  "properties": {
    "keys": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  }
}
```

### api/v1/info/routing/:routingKey

Method: GET

Path Parameters:

* :routingKey - string

Response Type:

```js
{
  "properties": {
    "queues": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  }
}
```

### api/v1/info/queues

Method: GET

Response Type:

```js
[]{
  "properties": {
    "name": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  }
}
```

### api/v1/info/all

Method: GET

Response Type:

```js
[]{
  "properties": {
    "keys": {
      "type": "string"
    }
    "queues": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  }
}
```

### api/v1/info/accounts

Method: GET

Response Type:

```js
{
  "properties": {
    "accounts": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  }
}
```

### api/v1/info/roles

Method: GET

Response Type:

```js
{
  "properties": {
    "Roles": {
      "type": "array",
      "items": {
        "type": {
            "properties": {
                "name": {
                    "type": "string"
                },
                "raw": {
                   "type": "string"
                }
            }
        }
      }
    }
  }
}
```


### api/v1/info/accounts/roles/:username 

Method: GET

Path Parameters:

* :username - string

Response Type:

```js
{
  "properties": {
    "Roles": {
      "type": "array",
      "items": {
        "type": {
            "properties": {
                "name": {
                    "type": "string"
                },
                "raw": {
                   "type": "string"
                }
            }
        }
      }
    }
  }
}
```

### api/v1/info/isLeader

Method: GET

Response Type:

```js
{
  "properties": {
    "isLeader": {
      "type": "boolean"
    }
  }
}
```

## Queue API

### api/v1/queue/isLeader

### api/v1/queue/fetch

### api/v1/queue/ack

### api/v1/queue/nack

## Broker API

### api/v1/broker/submit

## Accounts API

### api/v1/broker

### api/v1/broker/roles/create

### api/v1/broker/roles/:username/:role

### api/v1/broker/roles/:username/:role

## Login API

### api/v1/login

### api/v1/login

### api/v1/logout