## Speck API
| Name | Routes | HTTP | Description |
|------|--------|------|-------------|
| Role      | 
|            | `/role` | GET | Get all role |
|            | `/role` | POST | Post role |
|            | `/role/:id` | GET | Get one role by id |
|            | `/role/:id` | PUT | Update one role by id |
|            | `/role/:id` | DELETE | Delete one role by id |

### Get all role
Method GET
<br />
`http://[host]:[port]/role` 
<br />
<br />
Response body <br />
```
{
    "status": 200,
    "role": [
        {
            "id": 1,
            "roleName": "Super Admin",
            "active": true,
            "createdAt": "2022-12-18T12:01:07.000Z",
            "updatedAt": "2022-12-18T12:01:07.000Z"
        },
        {
            "id": 2,
            "roleName": "Admin",
            "active": true,
            "createdAt": "2022-12-18T12:01:07.000Z",
            "updatedAt": "2022-12-18T12:01:07.000Z"
        },
        {
            "id": 3,
            "roleName": "User",
            "active": true,
            "createdAt": "2022-12-18T12:01:07.000Z",
            "updatedAt": "2022-12-18T12:01:07.000Z"
        }
    ]
}
```
### Get one role by id
Method GET
<br />
`http://[host]:[port]/role/:id` 
<br />
<br />
Response body <br />
```
{
    "status": 200,
    "role": {
        "id": 3,
        "roleName": "User",
        "active": true,
        "createdAt": "2022-12-18T12:01:07.000Z",
        "updatedAt": "2022-12-18T12:01:07.000Z"
    }
}
```
### Create role
Method POST
<br />
`http://[host]:[port]/role` 
<br />
<br />
Request body <br />
```
{
    "roleName": "Super Admin",
    "active": true
}
```
Response body <br />
```
{
    "status": 200,
    "message": "created",
    "role": {
        "id": 1,
        "roleName": "Super Admin",
        "active": true,
        "createdAt": "2022-12-18T12:01:07.000Z",
        "updatedAt": "2022-12-18T12:01:07.000Z"
    }
}
```
### Update role by id
Method PUT
<br />
`http://[host]:[port]/role/:id` 
<br />
<br />
Request body <br />
```
{
    "roleName": "Admin 2",
    "active": true
}
```
Response body <br />
```
{
    "status": 200,
    "message": "Updated",
    "updateStatus": [
        1
    ],
    "role": {
        "id": 8,
        "roleName": "Admin 2",
        "active": true,
        "createdAt": "2022-12-19T04:31:34.000Z",
        "updatedAt": "2022-12-19T04:31:51.000Z"
    }
}
```
### Delete role by id
Method DELETE
<br />
`http://[host]:[port]/role/:id` 
<br />
<br />
Response body <br />
```
{
    "status": 200,
    "message": "Deleted"
}
```
