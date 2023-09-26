# Microservice appointments

## Base

`http://localhost:3010/api/v1`

## Appointments

|method|uri|
|-|-|
|OPTIONS|`/appointments`|
|GET|`/appointments`|
|GET|`/appointments/{year}`|
|GET|`/appointments/{year}/{month}`|
|GET|`/appointments/{year}/{month}/{day}`|
|POST|`/appointments/{year}/{month}/{day}`|
|PUT|`/appointments/{year}/{month}/{day}/{id}`|
|DELETE|`/appointments/{year}/{month}/{day}/{id}`|

### Reponse

A basic reponse from a get request. The most important thing is: we want to link to resources, so a consumer of the API can start with one link and then walk through all the data back and forth.

``` json
{
    "meta":{
        "date": "13 January 2023",
        "request_uri":"/appointments/2023/01/13"
    },
    "data": [
        "/appointments/1",
        "/appointments/2",
        "/appointments/3",
        "/appointments/4",
        "/appointments/5",
        "/appointments/9",
        "/appointments/10",
        "/appointments/11",
        "/appointments/13",
        "/appointments/15",
        "/appointments/16"
    ]
}

```

A basic POST request from a urlencoded post request to: `localhost:3010/appointments/2023/10/13/`

``` json
{
    "name": "Rimmert"
    "id": 1,
    "starttme": "09.15"
}
```
