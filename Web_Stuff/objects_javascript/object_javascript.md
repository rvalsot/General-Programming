# Objects Creation in JavaScript

Notes from the video series [_Object Creation in JavaScript_](https://www.youtube.com/watch?v=GhbhD1HR5vk&list=PL0zVEGEvSaeHBZFy6Q8731rcwk0Gtuxub&index=1) by funfunfunction guys at Youtube.

## `bind` and `this`

The state of JavaScript

* `this.something` keyword is related to the contexts where it is called, no where it is defined; for this second part, use `bind`
* `method.bind(object)` creates an object copied, instead of called.

Functions are considered values that can be passed around.

``` javascript
let getWeight = function(){
  console.log(this.property)
}

let niara = {
  weight: 700
}

niara.getWeight = getWeight.bind(niara)
let niaraWeight = niara.getWeight

niaraWeight()
```

Brotip: there is no proper way of object orientation to create classes in JavaScript.

## Prototypes

You do not create a copy of the original element, but get a delegation to it. IF not found in current object, go and look to the other.
