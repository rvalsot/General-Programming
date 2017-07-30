# Functional Programming in JavaScript

From the video series of [funfunfun](https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84) guys at youtube.

## 1.- Higher order functions

One of the supported paradigms of JavaScript is the functional.

Functions are values in all functional languages, they can be assigned to variables or other _higher order functions_ to do composition.

* __Composition__: putting one function, called _callbacks_, as argument into another, these, will return `true` or `false` to perform a given operation:

``` javascript
// (1.1) Common for filtering:

for(var i = 0; i < array.length; i++) {
  if (array[i].property === condition){
    filteredArray.push(array[i])
  }
}

// (1.2) Functional composition-filter:
var filteredArray = array.filter(function(member){
  return array.properties === condition
})

// (1.3) Functional variable-filter
var filterFunction = function(member){
  return array.properties === condition
}

var filteredArray = array.filter(filterFunction)
```

The splitting at (1.3) is a sample of a reusable callback and of decomposing a task into subtasks that may be useful for debugging.

## 2.- Map

Is another Higher Order Function that iterates through an array and transform it or create a new object.

``` javascript
var transformedData = array.map(function(element){
  return do_something_here
})
```
## 3.- Reduce

It's the toolbox for list transformation. We pass the same information to perform a function plus the initializers needed:

``` javascript
// (3.1) For sum
var sum = 0
for(var i = 0; i < array.length; i++) {
  sum += array[i].number
}

// (3.2) Reduce sum
var sum = array.reduce(function(sum, member){
  return sum + array.number
}, 0) // <- initializer for sum

```
