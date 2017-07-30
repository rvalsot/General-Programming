# MVC

Model View Controller comprehension.

## What is it?

The MVC is an architectural paradigm: your going to build in a certain way your web app to control information.

There's a bunch of frameworks that use this paradigm: Rails, Django are examples.

Because the most common sequence of Internet requests processing is: db query → query processing → query rendering.
* __Model__: database, anything you do when you interact with data → adding, retrieving data, processing data from/to the database, and speaks only to controller.
* __View__: client, deploys info, speaks only to the controller, is the only part visible to user, does route processing to ask the Controller for some data.
* __Controller__: server, is what interacts with the user: processes HTTP requests or sockets, holds all the server-side logic, speaks to db and receives, parses, and pushes to view.


It helps us to comply with DRY and structure/separate our application.

How does a website works:

* Client: via a browser, it renders and process HTML/ CSS /JavaScript.
  * Sends a request
* Server: runs server-side languages,
  * Asks the database for the request.
* Database: keeps information storage, no matter if is NoSQL or SQL.

## Resources

* DevMarketer 2016: [_What is programming MVC?_](https://www.youtube.com/watch?v=1IsL6g2ixak). 29/07/2017.
