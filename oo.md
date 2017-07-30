# Object Oriented Programming notes

Notes from this [video](https://www.youtube.com/watch?v=lbXsrHGhBAU)

__Intro__

In this porgramming paradigm, we privilege data over action, rather than Procedural paradigm of a series of actions or functions. Here we have a bunch of data types.

In OO, we think first on data types and after that on methods attached to it.

We have a _Class_: data type definition. A compound data type of:
	* _Field_: data member.
	* _Method_: function mebmer.
	* _Object/Instance_: actual piece of data.

Concepts:
* __Encapsulation__: methods acts an _interface_ to object's fields, only class methods should read/write the instances; externally, we only interact with class fields by invonking its methods. Strictly encapsulation leads to _modularization_, with nice maintenance and debugging features.
* __Visibility__: public (visible anywhere) / private (visibl only to methods of its own class).
	* Strict encapsulation calls for all fields to be private, methods to interact public and the rest private.
* Dynamic languages ussualy allow read/write outside the class, while static prevent this.
* __Inheritance__: one type or class may include the properties of another type or class. Some language have this automatic, others require explicit inheritance.
	* When to inherit? _is-a_: instances of the child class are more specific versions of parent. or _has-a_: a composition relationship.
	* Multiple inheritance is complicated, because of relationships. Circular inheritance is forbidden.
* __Object class__: when a class inherits from all other classes.
* __Overriding__: redefining an inherited method.
	* Dot notation helps us identify the namespace of the called method and associate it with its type or class.
*	 __Constructor__: sets up an instance at its creation.
* __Interface__: a set of methods with some association.
* __Abstract class__: not intended or allowed to be instantiated, but to be an ancestor to other classes.
