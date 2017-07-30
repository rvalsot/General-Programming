# The DOM

The DOM is an _application programming interface_ to be used when interacting with web pages: Add, Delete, Change HTML content on the fly.
* __Document__: is the web page.
* __Object__: every element in an HTML document, they can be modified via method or be called in their properties.
* __Model__: how the objects in the document lay down in a tree-fashion.

Spin-off: __Nodes__ everything that we can change in the document: elements, texts within elements, HTML attributes.

You can interact with each element/node. To reach them, we store the nodes in a variable, there are several options:
* `document.getElementByClassName("class_name")` → may return an array.
* `document.getElementById("id")`
* `document.getElementByTagName("tag")`

And modified them with some functions:
* `element.innerHTML = "new HTML"` to replace current HTML.
* `element.textContent = "new text"` to replace the text, not the HTML.
* `element.getAttribute("attribute")`
* `element.setAttribute("attribute", "value")`

## JavaScript and the DOM

* Functional programming techniques
* Event listeners
* Global objects & functions
* Create projects

* `element.addEventListener("event", function(event){})`

## Resources

* DevTips, 2016: [_JavaScript and the DOM_]( https://www.youtube.com/watch?v=hM9h1wN4rfU). 29/07/2017.
* The Net Ninja, 2015: [_What is the DOM?_](https://www.youtube.com/watch?v=H63dVFDuJDM) 29/07/2017.
