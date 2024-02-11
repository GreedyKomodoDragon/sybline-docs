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

#### api/v1/info/routing

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

#### api/v1/info/routing/:routingKey

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

#### api/v1/info/queues

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

#### api/v1/info/all

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

#### api/v1/info/accounts

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

#### api/v1/info/roles

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


#### api/v1/info/accounts/roles/:username 

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

#### api/v1/info/isLeader

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

#### api/v1/queue/create

Method: POST

Request Body Type:
```js
{
  "properties": {
    "routingKey": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "size": {
      "type": "number/uint32"
    },
    "retryLimit": {
      "type": "number/uint32"
    },
    "hasDLQueue": {
      "type": "boolean"
    },
  }
}
```

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

#### api/v1/queue/fetch?amount=[number]&queue=[string]

Method: GET

Response Type:

```js
{
  "properties": {
    "id": {
      "type": "string"
    },
    "data": {
      "type": "[]byte"
    }
  }
}
```

#### api/v1/queue/ack

Method: PUT

Request Body Type:

```js
{
  "properties": {
    "id": {
      "type": "string"
    },
    "queue": {
      "type": "string"
    }
  }
}
```

Response Code: 202

#### api/v1/queue/nack

Method: PUT

Request Body Type:

```js
{
  "properties": {
    "id": {
      "type": "string"
    },
    "queue": {
      "type": "string"
    }
  }
}
```

Response Code: 202

## Broker API

#### api/v1/broker/submit

Method: POST

Request Body Type:
```js
{
  "properties": {
    "routingKey": {
      "type": "string"
    },
    "data": {
      "type": "string"
    }
  }
}
```

Response Code: 202

## Accounts API

#### api/v1/accounts

Method: POST

Request Body Type:
```js
{
  "properties": {
    "username": {
      "type": "string"
    },
    "password": {
      "type": "string"
    }
  }
}
```

Response Code: 201

#### api/v1/accounts/roles/create

Method: POST

Request Body Type:
```js
{
  "properties": {
    "role": {
      "type": "string"
    }
  }
}
```

Response Code: 201

#### api/v1/accounts/roles/:username/:role

Method: PUT

Path Parameters:

* :username - string
* :role - string

Request Body Type:
```js
{
  "properties": {
    "role": {
      "type": "string"
    }
  }
}
```

Response Code: 201

#### api/v1/accounts/roles/:username/:role

Method: DELETE

Path Parameters:

* :username - string
* :role - string

Request Body Type:
```js
{
  "properties": {
    "role": {
      "type": "string"
    }
  }
}
```

Response Code: 202

## Login API

#### api/v1/login

Method: GET

Basic Auth: TBD

Response Code: 200

#### api/v1/login

Method: GET

Request Body Type:
```js
{
  "properties": {
    "username": {
      "type": "string"
    },
    "password": {
      "type": "string"
    }
  }
}
```

Response Code: 200

#### api/v1/logout

Method: GET

Basic Auth: TBD

Response Code: 202