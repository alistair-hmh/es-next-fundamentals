# ES Next Fundamentals

> References notes for a short series of lectures on the latest ~JavaScript language features.

*   **Strings:**
    Templates, Methods
*   **Functions:**
    Arrow Functions, Default Parameter Values, Spread & Rest Operators
*   **Object Oriented:**
    Prototypes, Classes, The Module Pattern, Lexical Context
*   **Flow Control:**
    Promises, Async & Await, Generators & Iterators
*   **Immutability:**
    Why Immutability?, Primitives, Non Primitives, Object Assignment
*   **Objects:**
    assign, values, keys, entries, freeze, seal
*   **Arrays:** filter, every, includes, some, from, of, forEach, copyWithin, fill, find, findIndex
*   **Meta Programming:** Reflect, Proxy
*   **React**: How ES Next syntax makes your React code cleaner and easier to manage.

## Table of Contents

[[TOC]]

## Identifiers

*   Const - A constant never changes it's primitive value.
*   Let - Let can be updated
*   Block scoped - invisible outside of the scope in which they were assigned.
*   Can't be re-assigned (referenced to another namespace)

### const

A constant never changes it's primitive value.

```js
// Const can re-reference Var
const a = 2;
a = 2;
// Uncaught TypeError: Assignment to constant variable.
```

```js
// Const can re-reference Var
var a = 1;
const a = 2;
console.log(a);
```

```js
// Var cannot re-reference Const
const a = 1;
var a = 2;
// ...or...
a = 2;
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
const a = 1;
{
	const a = 2;
	console.log(a);
}
```

### let

Let can be updated.

```js
let a = 1;
a = 2;
console.log(a);
// 2
```

Let cannot be re-assigned.

```js
let a = 1;
let a = 2;
// SyntaxError: Identifier 'a' has already been declared
```

#### For Loops

```js
for (let i = 0; i < 10; i++) {
	console.log(i);
}

console.log(i);
// ReferenceError: i is not defined
```

#### If Statements

```js
if (true) {
	const a = 1;
}
const a = 2;
console.log(a);
// 2
```

## Strings

### String Templates

#### Template Litarals

> Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them. They were called "template strings" in prior editions of the ES2015 specification.

```js
const name = "Al";
const output = `My name is: ${name}`;
console.log(output);
// My name is: Al
```

#### Tagged Templates

```js
const cool = function(strings, foo, bar, baz) {
	console.log(strings, foo, bar, baz);
	return "Psych!";
};

const foo = 111;
const bar = 222;
const baz = 333;

const output = cool`One ${foo} two ${bar} three ${baz}.`;

console.log(output);
// Psych!
```

```js
const cool = function(str, foo, bar, baz) {
	console.log(strings, foo, bar, baz);
	return str[0] + foo + str[1] + bar + str[2] + baz + str[3];
};

const foo = 111;
const bar = 222;
const baz = 333;

const output = cool`One ${foo} two ${bar} three ${baz}!`;

console.log(output);
// One 111 two 222 three 333!
```

#### Multi-line Strings

```js
console.log(`
This
is
valid!
`);
//
// This
// is
// valid!

// ... aka ...

// \nThis\nis\nvalid!
```

### String Methods

#### .repeat()

```js
const val = "Foo";
console.log(val.repeat(10));
// FooFooFooFooFooFooFooFooFooFoo
```

#### .padStart()

```js
const val = "Foo";
const pattern = "123456789";
console.log(val.padStart(4, pattern));
// 1Foo
console.log(val.padStart(8, pattern));
// 1234Foo
console.log(pattern);
```

#### .padEnd()

```js
const val = "Foo";
const pattern = "123456789";
console.log(val.padEnd(4, pattern));
// 1Foo
console.log(val.padEnd(8, pattern));
// 1234Foo
console.log(pattern);
```

## Destructuring

### Objects

### Arrays

## Object Oriented Programming

### Prototype

#### Constructor

#### Properties

#### Lexical Context (this)

#### Prototype Chaining

### Classes

#### Instantiation (new)

```js
class Dog {}
const buddy = new Dog();
console.log(buddy);
```

#### Class Methods

```js
class Dog {
	bark() {
		console.log("woof");
	}
}
const buddy = new Dog();
buddy.bark();
```

#### constructor()

```js
class Dog {
	constructor(name) {
		this.name = name;
	}

	bark() {
		console.log(`Woof, my name is ${this.name}!`);
	}
}
const buddy = new Dog("Buddy");
const bella = new Dog("Bella");
buddy.bark();
bella.bark();
```

#### Inheritance & Polymorphism

*   Extends()
*   Super()

```js
class Dog {
	constructor(name) {
		this.name = name;
	}

	bark() {
		console.log(`Woof, my name is ${this.name}!`);
	}
}

class SuperDog extends Dog {
	constructor(name) {
		// Inheritance
		super(name);
	}

	// Polymorphism
	fly() {
		console.log("I'm flying!");
	}
}

const buddy = new Dog("Buddy");
const bella = new SuperDog("Bella");
buddy.bark();
bella.bark();
bella.fly();
// buddy.fly()
// TypeError: buddy.fly is not a function
```

### Lexical Scope (this)

The context of `this` inside `foo.log` is `foo`.

```js
const foo = {
	bar: 123,
	log: function() {
		console.log(this.bar);
	}
};

foo.log();
// 123
```

The context of `this` inside `inner` is `Window`.

```js
const foo = {
	bar: 123,
	log: function() {
		const inner = function() {
			console.log(`bar = ${this.bar}`);
			console.log(this);
		};

		inner();
	}
};

foo.log();
// bar = undefined
```

The context of `this` inside `inner` is `foo`.

```js
const foo = {
	bar: 123,
	log: function() {
		const inner = function() {
			console.log(this.bar);
		};

		inner.call(this);
	}
};

foo.log();
// 123
```

### Closures

> “A closure is a special kind of object that combines two things: a function, and the environment in which that function was created. The environment consists of any local variables that were in-scope at the time that the closure was created.”
>
> https://developer.mozilla.org/en-US/docs/Web/JavaScript

```js
(function iAmEnclosed() {
	const a = 1;
})();

// ReferenceError: a is not defined
console.log(a);
```

### The Module pattern

```js
const createDog = function dogClosure(name) {
	const secret = "I hate squirrels!";

	const dog = {
		name,

		bark: function() {
			console.log(`Woof, my name is ${this.name}!`);
		},

		tellSecret: function() {
			console.log(secret);
		}
	};

	return dog;
};

const buddy = createDog("Buddy");
buddy.bark();
// Woof, my name is Buddy!

console.log(buddy.secret);
// undefined

buddy.tellSecret();
// I hate squirrels!
```

## Functions

### Ye Olde Functions

#### Function Declaration

```js
function log(msg) {
	console.log(msg);
}
log("Hi!");
```

#### Function Expression

```js
var log = function log(msg) {
	console.log(msg);
};
log("Hi!");
```

### Arrow Functions

```js
const log = msg => {
	console.log(msg);
};
log("Hi!");
```

#### Auto Return

```js
const log = msg => console.log(msg);
log("Hi!");
```

#### Optional Parens

```js
const log = msg => console.log(msg);
log("Hi!");
```

#### Currying Without Arrow Functions

```js
function curry(a) {
	return function(b) {
		return function(c) {
			return function(d) {
				return a + b + c + d;
			};
		};
	};
}

console.log(curry(1)(2)(3)(4));
// Logs 10
```

#### Currying With Arrow Functions

```js
// Currying with Arrow Functions
const curry = a => b => c => d => {
	return a + b + c + d;
};

console.log(curry(1)(2)(3)(4));
// Logs 10
```

#### Promises w/wo Arrow Functions

Promises **without** arrow functions:

```js
function getData(url) {
	return new Promise(function(resolve) {
		return fetch(url).then(function(response) {
			const data = response.json();
			resolve(data);
		});
	});
}

getData("https://jsonplaceholder.typicode.com/posts/1").then(data =>
	console.log(data)
);
```

Promises **with** arrow functions:

```js
const getData = url =>
	new Promise(resolve =>
		fetch(url).then(response => resolve(response.json()))
	);

getData("https://jsonplaceholder.typicode.com/posts/1").then(data =>
	console.log(data)
);
```

```js
(async () {
	const getData = async url => JSON.parse((await fetch(url)).data)
	const data = await getData('https://jsonplaceholder.typicode.com/posts/1')
	console.log(data)
})()
```

#### Lexical Context (this)

```js
const createDog = function dogClosure(name) {
	const secret = "I hate squirrels!";

	const dog = {
		name,

		bark: () => {
			// OOPS!
			console.log(`Woof, my name is ${this.name}!`);
		},

		tellSecret: function() {
			console.log(secret);
		}
	};

	return dog;
};

const buddy = createDog("Buddy");
buddy.bark();
// undefined
```

### Default Parameter Values

```js
const adder = (a, b) => {
	return a + b;
};

const result = adder(2, 2);
console.log(result);
// 4
```

```js
const adder = (a, b) => {
	return a + b;
};

const result = adder();
console.log(result);
// NaN
```

```js
const adder = (a, b) => {
	a = a || 2;
	b = b || 2;
	return a + b;
};

const result = adder();
console.log(result);
// 4
```

```js
const adder = (a = 2, b = 2) => {
	return a + b;
};

const result = adder();
console.log(result);
// 4
```

### Spread & Rest

     ...spread
     ...rest

```js
const myTag = (strs, ...vals) =>
	vals
		.map((val, i) => {
			return strs[i] + val;
		})
		.concat(strs[strs.length - 1])
		.join("");

const foo = 111;
const bar = 222;
const baz = 333;

const output = myTag`One ${foo} two ${bar} three ${baz}!`;
console.log(output);
// One 111 two 222 three 333!
```

Demo: [Spread Teamplte Tags](https://codepen.io/F1LT3R/pen/JZKdob?editors=0012)

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

> The Object.freeze() method freezes an object: that is, prevents new properties from being added to it; prevents existing properties from being removed; and prevents existing properties, or their enumerability, configurability, or writability, from being changed, it also prevents the prototype from being changed. The method returns the passed object.

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
