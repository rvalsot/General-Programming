# REST API

Some definitions
* __API__: "Application Programming Interface": something that allows a piece of software to communicate with other.
* __JSON__: "JavaScript Object Notation": a group of key-value-pairs (fields) organized data.
* __REST__: "Representational State Transfer"

The _State_ of an application can be transferred between back and front in different formats (either XML or JSON).

_______________________________________________________________________________

## Six REST Constraints

1. Uniform Interface: defines Interface between client and server.
  * Resource-based: individual resources use URI. They're separated from the representations returned to the client.
  * Manipulation of Resources through Representations: representations have enough info to modify if allowed.
  * Self-descriptive Messages: each message has enough info to describe how to process itself.
  * Hypermedia as the Engine of Application State: all the hypermedia: {headers, body, queries, URI, response codes} are included in the message.
2. Stateless: client session is stored in the client, server does not keep it. Every request includes all needed information to be fulfilled.
3. Cache-able: responses must define themselves as cache-able to improve performance.
4. Client-Server: clients and servers may do their own stuff as they want, as long as the interface is not altered.
5. Layered System: layers should improve performance and security.
6. Code On-Demand: servers may transfer logic to an intermediary or to client-side scripts.

_______________________________________________________________________________

## HTTP Methods

* `POST` : used to _create_ new resources, subordinate ones in particular. Successful creation will return `201` status. Nor safe not idempotent.
* `GET` : _read_ some data. Will return an XML or JSON and status of `200` if OK, `404` if Not Found or `400` for Bad Request. Its safe and idempotent.
* `PUT` : _update_ data in a known resource URI. Resource will be created if ID is chosen by the client instead of server (a non-existent URI). `200` for successful update `204` if not returning content of the body. `201` for successful creation. `404` is for ID not found or invalid. Is not safe but is idempotent.
* `PATCH`: _modify_ only needs to contain changes, not the whole resource. Contains the set of modification instructions. Should include JSON Patch. Neither safe or idempotent.
* `DELETE` : clearly, _delete_ a resource identified by URI. `200` for successful deletion plus a response body. `204` for no content without response body.


Glossary:
* Idempotent: making multiple identical requests will have the same result.
* Safe: will not modify or corrupt data.

[__JSON Patch__](jasonpatch.com)

Is a JSON file containing an array of operators: `{add, remove, replace, move, copy, test}`, which are operated in order and any fail will abort.

_______________________________________________________________________________

## HTTP Status

Base 100:
* 1XX Informational
* 2XX Success
* 3XX Redirection
* 4XX Client Error
* 5XX Server Error


| Status | Description | Notes |
| ------ | ----------- | ----- |
| `200`  |
| `201`  |
| `204`  |
| `304`  |
| `400`  |
| `401`  |
| `403`  |
| `404`  |
| `409`  |
| `500`  | Internal Server Error

You can access RESTful services using plain URLs!


Credits:

* [REST API Tutorial](www.restapitutorial.com/lessons/httpmethods.html)
* [Bharath Thippireddy](youtube.com/watch?v=ObaGiqGQFAU)
* [Stack Overflow guys]()
