## 1 - Domain
* https://api.example.com 

OR

* https://example.com/api

## 2 - Version

* https://example.com/api/v1
* https://example.com/api/v2

## 4 - Endpoint

* https://example.com/api/v1/book
* https://example.com/api/v1/authen

## 5 - HTTP Method

* GET (SELECT): Get resource from server
* POST (CREATE): Create resource from server
* PUT (UPDATE): Update items
* PATCH (UPDATE): Update a item
* DELETE (Remove): Remove a item or items
* OPTION (Remove): Get header
* HEAD : Just get header don't receive data (items)
* TRACE: 
* CONNECT

## Filtering

* ?limit=10
* ?offset=10
* ?page=2&per_page=10
* ?sort=name&order=asc

## Return status

### Success
200: return value
201: [POST / PUT / PATCH] success
202: Request to background queue to resolve async
204: [Unsafe] No content

400: Request invalid Bad Request
401: Unauthorized
403: Forbidden: Have authorized but permission be ban
404: Not found
406: Incorrect format (XML, JSON, HTML,...)
409: Conflict
410: Resource have been remove
422: Unprocessable Entity

500: Error server

## Return value

GET / collection: array
GET / collection / resource: item
POST / collection : item
PUT / collection : array
PATCH / collection / resource : item

DELETE / collection / resource : empty or item

## HATEOAS
*** A restful api best when including hypermedia ***
ex: https://jsonapi.org/
```
{
    "data": [
        {
            id: 1,
            username: 'ABC'
        },
        {
            id: 2,
            username: 'ABCCC'
        },
    ],
    "pagination": {
        page: 1,
        total: 20,
        perPage: 10
    },
    "links": {
        nextPage: 'api/v1/accounts?page=2'
    }
}
```
