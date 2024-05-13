---
title: "Role Based Access Control"
description: "Using roles in the Go Client"
---

This section will show how to use the Go client to create, assign and unassign roles. 

### Create Roles

This example shows a role created from a file containing the role json.

```go
content, err := os.ReadFile("template.json")
if err != nil {
    log.Fatal(err)
}

// Convert []byte content to a string
fileContent := string(content)

if err := client.CreateRole(ctx, fileContent); err != nil {
    log.Fatal("error CreateRole:", err)
}
```

### Assign Roles

```go
if err := client.AssignRole(ctx, "user", "role_name"); err != nil {
    log.Fatal("error CreateUser:", err)
}
```

### Unassign Roles

```go
if err := client.UnassignRole(ctx, "user", "role_name"); err != nil {
    log.Fatal("error CreateUser:", err)
}
```
