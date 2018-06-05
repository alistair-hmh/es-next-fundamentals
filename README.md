# ES Next Fundamentals

> References notes for a short series of lectures on the latest ~JavaScript language features.

- **Strings:**
	Templates, Methods
- **Functions:**
	Arrow Functions, Default Parameter Values, Spread & Rest Operators
- **Object Oriented:**
	Prototypes, Classes, The Module Pattern, Lexical Context
- **Flow Control:**
	Promises, Async & Await, Generators & Iterators
- **Immutability:**
	Why Immutability?, Primitives, Non Primitives, Object Assignment
- **Objects:**
	assign, values, keys, entries, freeze, seal
- **Arrays:** filter, every, includes, some, from, of, forEach, copyWithin, fill, find, findIndex
- **Meta Programming:** Reflect, Proxy
- **React**: How ES Next syntax makes your React code cleaner and easier to manage.

## Table of Contents

[[TOC]]

## Identifiers

- Const - A constant never changes it's primitive value.
- Let - Let can be updated
- Block scoped - invisible outside of the scope in which they were assigned.
- Can't be re-assigned (referenced to another namespace)

### const

A constant never changes it's primitive value.

```js
// Const can re-reference Var 
const a = 2
a = 2
// Uncaught TypeError: Assignment to constant variable.
```

```js
// Const can re-reference Var 
var a = 1
const a = 2
console.log(a)
```

```js
// Var cannot re-reference Const
const a = 1
var a = 2
// ...or...
a = 2
// SyntaxError: "Identifier 'a' has already been declared"
// (Execution of your script will halt!)
```

#### Block Scoping

Const and Var are both blocked scoped.

```js
{
	const a = 2
}
console.log(a)
Uncaught ReferenceError: a is not defined
```

You can assign to a namespace that is also used in the parent block.

```js
const a = 1
{
	const a = 2
	console.log(a)
}
```


### let

Let can be updated.

```js
let a = 1
a = 2
console.log(a)
// 2
```

Let cannot be re-assigned.

```js
let a = 1
let a = 2
// SyntaxError: Identifier 'a' has already been declared
```

#### For Loops

```js
for (let i = 0; i< 10; i++) {
	console.log(i)
}

console.log(i)
// ReferenceError: i is not defined
```

#### If Statements

```js
if (true) {
	const a = 1
}
const a = 2
console.log(a)
// 2
```

## Strings

### String Templates

```javascript
const name = 'Al'
const output = `My name is: ${name}`
console.log(output)
// My name is: Al
```

### Template Literals
### Multi-line Strings
### .repeat()
### .padLeft()
### .padRight()

## Object Oriented Programming

### Prototype
#### Constructor
#### Properties
#### Lexical Context (this)
#### Prototype Chaining

### Class
#### .constructor()
#### Lexical Context (this)
#### methods
#### properties
#### extends()
#### super()

### The Module Pattern
#### An Alternative to Classes

## Functions

### Arrow Functions
#### Auto Return
##### Currying Example 
#### Optional Parens
#### Lexical Context (this)
##### React without Bind

### Default Parameter Values

- Old: (x) => x || null
- New: (x = null)

### Spread & Rest
	 ...spread
	 ...rest

## Flow Control

### Promises

#### resolve(result)
#### reject(err)
#### .all(promises)
#### .race()
#### .catch(err)
#### .finally()

### Async Await
#### async fn
#### await fn

### Generators

#### Generator Functions
#### Iterators
#### next
#### yeild

## Is

### Number.isNaN()
### Array.isArray()
### Object.is()

> This is not the same as being equal according to the == operator. The == operator applies various coercions to both sides (if they are not the same Type) before testing for equality (resulting in such behavior as "" == false being true), but Object.is doesn't coerce either value.
> 
> This is also not the same as being equal according to the === operator. The === operator (and the == operator as well) treats the number values -0 and +0 as equal and treats Number.NaN as not equal to NaN.
> 
> Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is


## Array

### .filter()
### .every()
### .includes()
### .some()
### .from() also w/ map
### .of()
### .forEach()
### .copyWithin()
### .fill()
### .find()
### .findIndex()

## Object

### .assign()
### .values()
### .keys()
### .entries()

### .freeze()

> The Object.freeze() method freezes an object: that is, prevents new properties from being added to it; prevents existing properties from being removed; and prevents existing properties, or their enumerability, configurability, or writability, from being changed, it also prevents the prototype from being changed.  The method returns the passed object.

### .seal()

> The Object.seal() method seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable. Values of present properties can still be changed as long as they are writable.

## Immutability

### JavaScript Primartives (Immutable)
#### Number
#### Boolean
#### Etc
### JavaScript Objects (Reference)
#### Objects
#### Arrays
### Object.assign()

## Meta-Programming

> Metaprogramming is a programming technique in which computer programs have the ability to treat programs as their data. It means that a program can be designed to read, generate, analyse or transform other programs, and even modify itself while running. In some cases, this allows programmers to minimize the number of lines of code to express a solution, thus reducing the development time. It also allows programs greater flexibility to efficiently handle new situations without recompilation.
> 
> https://en.wikipedia.org/wiki/Metaprogramming

> Starting with ECMAScript 2015, JavaScript gains support for the Proxy and Reflect objects allowing you to intercept and define custom behavior for fundamental language operations (e.g. property lookup, assignment, enumeration, function invocation, etc). With the help of these two objects you are able to program at the meta level of JavaScript.
> 
> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Meta_programming

### Reflect()
#### .has(obj, 'propertyName')
#### .ownKeys()
#### .getPrototypeOf()

### Proxy()
#### Traps
#### new Proxy(target, handler)
#### handler
##### .constsruct()
##### .ownKeys()