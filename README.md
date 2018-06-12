![ES Next Logo](assets/es-next.png)

# ES Next Fundamentals

> Reference notes for a short series of lectures on the latest ~JavaScript language features.

-   **Strings:**
    Templates, Methods
-   **Functions:**
    Arrow Functions, Default Parameter Values, Spread & Rest Operators
-   **Object-Oriented:**
    Prototypes, Classes, The Module Pattern, Lexical Context
-   **Flow Control:**
    Promises, Async & Await, Generators & Iterators
-   **Immutability:**
    Why Immutability?, Primitives, Non Primitives, Object Assignment
-   **Objects:**
    assign, values, keys, entries, freeze, seal
-   **Arrays:** filter, every, includes, some, from, of, forEach, copyWithin, fill, find, findIndex
-   **Meta Programming:** Reflect, Proxy
-   **React**: How ES Next syntax makes your React code cleaner and easier to manage.

## Table of Contents

[[TOC]]

# Part 1 - The "Basics"

## Identifiers

- **Const** - A constant never changes it's primitive value.
- **Let** - Let can be updated
- **Block scoped** - invisible outside of the scope in which they were assigned.
- **Can't be re-assigned** (referenced to another name-space)

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
// Uncaught ReferenceError: a is not defined
```

You can assign to a name-space that is also used in the parent block.

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
for (let i = 0; i < 10; i++) {
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

### React 

- Never use `var` in a react application.
- Always use `const` and `let`.

## Strings

### String Templates

#### Template Literals

> Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them. They were called "template strings" in prior editions of the ES2015 specification.

```js
const name = 'Al'
const output = `My name is: ${name}`
console.log(output)
// My name is: Al
```

#### Tagged Templates

```js
const cool = function(strings, foo, bar, baz) {
	console.log(strings, foo, bar, baz)
	return 'Psych!'
}

const foo = 111
const bar = 222
const baz = 333

const output = cool`One ${foo} two ${bar} three ${baz}.`

console.log(output)
// Psych!
```

```js
const cool = function(str, foo, bar, baz) {
	console.log(strings, foo, bar, baz)
	return str[0] + foo + str[1] + bar + str[2] + baz + str[3]
}

const foo = 111
const bar = 222
const baz = 333

const output = cool`One ${foo} two ${bar} three ${baz}!`

console.log(output)
// One 111 two 222 three 333!
```

#### Multi-line Strings

```js
console.log(`
This
is
valid!
`)
//
// This
// is
// valid!

// ... aka ...

// \nThis\nis\nvalid!
```

#### ⚛ In React - String Templates Literals

```js
import React from "react";
import ReactDOM from "react-dom";

const MyComp = (props) => (
  <div>
    <h1>Hello, {props.name}!</h1>
    <h2>{`Hello, ${props.name}!`}</h2>
  </div>
)

function App() {
  return (
    <div>
      <MyComp name="World"/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

[CodeSandbox](https://codesandbox.io/s/7w7j33lr3j)

### String Methods

#### .repeat()

```js
const val = 'Foo'
console.log(val.repeat(10))
// FooFooFooFooFooFooFooFooFooFoo
```

#### .padStart()

```js
const val = 'Foo'
const pattern = '123456789'
console.log(val.padStart(4, pattern))
// 1Foo
console.log(val.padStart(8, pattern))
// 1234Foo
console.log(pattern)
```

#### .padEnd()

```js
const val = 'Foo'
const pattern = '123456789'
console.log(val.padEnd(4, pattern))
// 1Foo
console.log(val.padEnd(8, pattern))
// 1234Foo
console.log(pattern)
```

## Object Literal Shorthand

The old way

```js
const a = 'foo'
const b = 'bar'
const c = 'baz'

const obj = {a: a, b: b, c: c}
console.log(obj)
// {a: "foo", b: "bar", c: "baz"}
```

```js
const a = 'foo'
const b = 'bar'
const c = 'baz'

const obj = {a, b, c}
console.log(obj)
// {a: "foo", b: "bar", c: "baz"}
```

### ⚛ In React - Object Literal Shorthand

```jsx
  getData = () => {
    const method = "GET";
    const url = "https://jsonplaceholder.typicode.com/posts/1";
    const obj = { url: url, method: method };

    // Object Literal Shorthand
    //     const method = "GET";
    //     const url = "https://jsonplaceholder.typicode.com/posts/1";
    //     const obj = { url, method };

    fetchData(obj).then(data => this.setState({ data }));
  };
```

[CodeSandBox](https://codesandbox.io/s/y0p0jp2o4v)

## Destructuring

### Destructuring Objects

The old way

```js
function rotate(props) {
	var x = props.x
	var y = props.x
	var z = props.x
	var originX = props.origin.x
	var originY = props.origin.y
	var originZ = props.origin.z

	// ... apply transformation matrix
}

rotate({
	x: 0,
	y: 1,
	z: 0,
	origin: {
		x: 0,
		y: 0
	}
})
```

The new way

```js
const rotate = props => {
	let {
		x,
		y,
		z,
		origin: {x: originX, y: originY}
	} = props
	// ... apply transformation matrix
}

rotate({
	x: 0,
	y: 1,
	z: 0,
	origin: {
		x: 0,
		y: 0
	}
})
```

### Destructuring Arrays

```js
const rotate = coords => {
	let [x, y, z] = coords
	console.log(x, y, z)
}

const coords = [0, 1, 2]
rotate(coords)
```

### Destructuring Function Parameters

```js
const rotate = ({x, y, z}) => {
	console.log(x, y, z)
}

const coords = {x: 0, y: 1, z: 0}
rotate(coords)
```

Arrays

```js
const rotate = ([x, y, z]) => {
	console.log(x, y, z)
}

const coords = [0, 1, 0]
rotate(coords)
```


### ⚛ In React - Object Destructuring

```jsx
const MyOldComponent = props => (
  <div>
    <p>
      {props.a}, {props.b}, {props.c}
    </p>
  </div>
);
```

```jsx
const MyDestructuredComponent = ({ a, b, c }) => (
  <div>
    <p>
      {a}, {b}, {c}
    </p>
  </div>
);
```

[CodeSandbox](https://codesandbox.io/s/jlvpr20px9)


## Arrow Functions

```js
const log = msg => {
	console.log(msg)
}
log('Hi!')
```

#### Automatic Return

```js
const log = msg => console.log(msg)
log('Hi!')
```

#### Optional Parens

```js
const log = msg => console.log(msg)
log('Hi!')
```

#### Currying Without Arrow Functions

```js
function curry(a) {
	return function(b) {
		return function(c) {
			return function(d) {
				return a + b + c + d
			}
		}
	}
}

console.log(curry(1)(2)(3)(4))
// Logs 10
```

#### Currying With Arrow Functions

```js
// Currying with Arrow Functions
const curry = a => b => c => d => {
	return a + b + c + d
}

console.log(curry(1)(2)(3)(4))
// Logs 10
```

#### Promises w/wo Arrow Functions

Promises **without** arrow functions:

```js
function getData(url) {
	return new Promise(function(resolve) {
		return fetch(url).then(function(response) {
			resolve(response.json())
		})
	})
}

getData('https://jsonplaceholder.typicode.com/posts/1').then(data =>
	console.log(data)
)
```

Promises **with** arrow functions:

```js
const getData = url =>
	new Promise(resolve =>
		fetch(url).then(response => resolve(response.json()))
	)

getData('https://jsonplaceholder.typicode.com/posts/1').then(data =>
	console.log(data)
)
```

```js
(async () {
	const getData = async url => JSON.parse((await fetch(url)).data)
	const data = await getData('https://jsonplaceholder.typicode.com/posts/1')
	console.log(data)
})()
```

#### ⚛ In React - Arrow Functions

```jsx
const MyComponent = () => <div/>;
```

```jsx
  doSomething = () => {
    alert("Something!");
  };
```

[CodeSandbox](https://codesandbox.io/s/qx9mxmm9qw)


## Default Parameter Values

```js
const adder = (a, b) => {
	return a + b
}

const result = adder(2, 2)
console.log(result)
// 4
```

```js
const adder = (a, b) => {
	return a + b
}

const result = adder()
console.log(result)
// NaN
```

```js
const adder = (a, b) => {
	a = a || 2
	b = b || 2
	return a + b
}

const result = adder()
console.log(result)
// 4
```

```js
const adder = (a = 2, b = 2) => {
	return a + b
}

const result = adder()
console.log(result)
// 4
```

## Rest & Spread

### Rest

```js
// You need parentheses with arrow functions and the rest operator
const adder = (start, ...vals) => {
	let result = start

	vals.forEach(val => {
		result += val
	})
	return result
}

const start = 1
const result = adder(start, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512)
console.log(result)
// 1024
```

### Spread

```js
// You need parentheses with arrow functions and the rest operator
const adder = (start, ...vals) => {
	let result = start

	vals.forEach(val => {
		result += val
	})
	return result
}

const start = 1
const values = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512]
const result = adder(start, ...values)
console.log(result)
// 1024
```

```js
const vals = [2, 3, 4]
var a = [1, ...vals, 5]
console.log(a)
// [1, 2, 3, 4, 5]
```

```js
const myTag = (strs, ...vals) =>
	vals
		.map((val, i) => {
			return strs[i] + val
		})
		.concat(strs[strs.length - 1])
		.join('')

const foo = 111
const bar = 222
const baz = 333

const output = myTag`One ${foo} two ${bar} three ${baz}!`
console.log(output)
// One 111 two 222 three 333!
```

Demo: [Spread Template Tags](https://codepen.io/F1LT3R/pen/JZKdob?editors=0012)

```jsx
class Greeting extends React.Component {
	render() {
		console.log(this.props)
		return <h1 {...props}>Hello</h1>
	}
}
```

# Part 2 - Object-Oriented Programming

## Prototypes

```js
function Dog() {}
console.log(Dog.prototype)
```

### Prototype Constructor

```js
function Dog(name) {
	this.name = name
}
const buddy = new Dog('Buddy')
console.log(buddy)
```

### Properties & Mehotds

```js
function Dog(name) {
	this.name = name
}

Dog.prototype.bark = function() {
	console.log(`Woof, my name is ${this.name}!`)
}

const buddy = new Dog('Buddy')
buddy.bark()
// Woof, my name is Buddy!
```

### Prototype Chaining

```js
function Dog(name) {
	this.name = name
}
Dog.prototype.bark = function() {
	console.log(`Woof, my name is ${this.name}!`)
}

function FlyingDog(name) {
	Dog.call(this, name)
}
FlyingDog.prototype.fly = function() {
	console.log("I'm flying!")
}
FlyingDog.prototype.constructor = Dog
FlyingDog.prototype = new Dog()


const buddy = new Dog('Buddy')
const bella = new FlyingDog('Bella')
buddy.bark()
// Woof, my name is Buddy!
bella.bark()
// Woof, my name is Bella!
bella.fly()
// I'm flying!
```

## Classes

### Instantiation (new)

```js
class Dog {}
const buddy = new Dog()
console.log(buddy)
```

### Class Methods

```js
class Dog {
	bark() {
		console.log('woof')
	}
}
const buddy = new Dog()
buddy.bark()
```

### constructor()

```js
class Dog {
	constructor(name) {
		this.name = name
	}

	bark() {
		console.log(`Woof, my name is ${this.name}!`)
	}
}
const buddy = new Dog('Buddy')
const bella = new Dog('Bella')
buddy.bark()
bella.bark()
```

### Inheritance & Polymorphism

-   Extends()
-   Super()

```js
class Dog {
	constructor(name) {
		this.name = name
	}

	bark() {
		console.log(`Woof, my name is ${this.name}!`)
	}
}

class FlyingDog extends Dog {
	constructor(name) {
		// Inheritance
		super(name)
	}

	// Polymorphism
	fly() {
		console.log("I'm flying!")
	}
}

const buddy = new Dog('Buddy')
const bella = new FlyingDog('Bella')
buddy.bark()
bella.bark()
bella.fly()
// buddy.fly()
// TypeError: buddy.fly is not a function
```

#### ⚛ In React - Inheritance & Polymorphism

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

## Lexical Scope (this)

The context of `this` inside `foo.log` is `foo`.

```js
const foo = {
	bar: 123,
	log: function() {
		console.log(this.bar)
	}
}

foo.log()
// 123
```

The context of `this` inside `inner` is `Window`.

```js
const foo = {
	bar: 123,
	log: function() {
		const inner = function() {
			console.log(`bar = ${this.bar}`)
			console.log(this)
		}

		inner()
	}
}

foo.log()
// bar = undefined
```

The context of `this` inside `inner` is `foo`.

```js
const foo = {
	bar: 123,
	log: function() {
		const inner = function() {
			console.log(this.bar)
		}

		inner.call(this)
	}
}

foo.log()
// 123
```

### ⚛ In React - Lexical Scope (this)

Lexical scope is referenced in react components. React components are classes.

```jsx
class Welcome extends React.Component {
	state = {
		name: 'Alistair'
	}
	render() {
		return <h1>Hello, {this.state.name}</h1>;
	}
}
```

## Closures

> “A closure is a special kind of object that combines two things: a function, and the environment in which that function was created. The environment consists of any local variables that were in-scope at the time that the closure was created.”
>
> https://developer.mozilla.org/en-US/docs/Web/JavaScript

```js
;(function iAmEnclosed() {
	const a = 1
})()

// ReferenceError: a is not defined
console.log(a)
```

## The Module pattern

```js
const createDog = function dogClosure(name) {
	const secret = 'I hate squirrels!'

	const dog = {
		name,

		bark: function() {
			console.log(`Woof, my name is ${this.name}!`)
		},

		tellSecret: function() {
			console.log(secret)
		}
	}

	return dog
}

const buddy = createDog('Buddy')
buddy.bark()
// Woof, my name is Buddy!

console.log(buddy.secret)
// undefined

buddy.tellSecret()
// I hate squirrels!
```

# Part 3 - The Meta Bits

## Immutability

What is "Immutability"?

- Immutability is about being "Non-Destructive"
- "Immutable" software means the original referenced value 1) does not change and 2 can not change.
- Every time you update an object, you should receive a new copy of the original.
	+ (The different between "Save" and "Save As")

See Youtube Video: [ReactCasts #9 - Immutability in JavaScript](https://youtu.be/4LzcQyZ9JOU)

- Why is immutability important?
	+ Providing Stable State
	+ Reduce/eliminate of unintended side-effects (functional programming)
	+ Better data control
	+ Replaying State at specific points (Time Travel)
		* Tracking bugs, etc.
	+ Undo/Redo implementations
	+ Performance boosts with DOM Tree Diff'ing 
	+ Parallelization (Multi Core)


### Idempotentcy

> An idempotent operation produces the result in the same state even if you call it more than once, provided you pass in the same parameters.
>
> [Source: Stack Overflow - What is an Idempotent Operation](https://stackoverflow.com/questions/1077412/what-is-an-idempotent-operation)

### Unintended Side Effects

```js
function createPerson () {
	let name
	let age

	const person = {
		getName: () => {
			return name
		},
		getAge: () => {
			name = 'Bob'
			return age
		},
		setName: function (newName) {
			name = newName
		},
		setAge: function (newAge) {
			age = newAge
		}
	}

	return person
}

const person = createPerson()
person.setName('Alistair')
person.setAge(37)
console.log(person)
// {getAge: ƒ, updateName: ƒ, updateAge: ƒ, name: "Alistair", age: 37}

console.log(`Name: ${person.getName()}, Age: ${person.getAge()}`)
// Name: Alistair, Age: 37

console.log(`Name: ${person.getName()}, Age: ${person.getAge()}`)
// Name: Bob, Age: 37
```

### Languages with Immutability

- JavaScript is not immutable by nature.
- React is born in the immutable paradigm.

- Immutable
	+ Haskell (Purely functional)
	+ Erlang
	+ Scala
	+ R	
	+ Lisp
		* Logo
		* Scheme
	+ ML
		* Ocaml


### Reference vs. Primitive Variables

#### Primitives

- Some types of JavaScript value are "Primitive".
- When you assign primitive variables, the value gets copied in memory.

```js
const a = 'foo'
console.log(a)  // foo

const b = a
console.log(b)  // foo

b = 'bar'
console.log(a)  // foo
console.log(b)  // bar
```

**Primitive types include:**

- Number
- String
- Boolean

#### References

 Some types of JavaScript value are "Referencial".
- When you assign referencial variables, the reference to the memory location is passed into the variable.

```js
const a = {foo: 'bar'}
console.log(a)  // {foo: "bar"}

const b = a
console.log(b)  // {foo: "bar"}

b = {oh: 'what?!'}
// Both values are now the same!
// They have been pointed to the same reference in memory.
console.log(a)  // {oh: 'what?!'}
console.log(b)  // {oh: 'what?!'}
```

The object {foo: "bar"} is now orphaned, will be picked up my garbage collection and _should_ get deleted from memory on the next garbage cycle.

**Referencial types include:**

- Object
- Array
- Function

### Object.assign()

Object `a` remains unchanged.

```js
const a = {foo: 'bar'}
const b = Object.assign({}, a)
console.log(b)  // {foo: "bar"}

b.ping = 'pong'
console.log(a)  // {foo: "bar"}
console.log(b)  // {foo: "bar", ping: "pong"}
```

### Adding to an Array Immutably

#### .concat()

- Object `a` remains unchanged.

```js
const a = ['foo', 'bar', 'baz']
console.log(a)  // ['foo', 'bar', 'baz']

const b = a.concat('qux')
console.log(b)  // ['foo', 'bar', 'baz', 'qux']
```

#### Spread

- We can also use Spread
- Object `a` remains unchanged.

```js
const a = ['foo', 'bar', 'baz']
console.log(a)  // ['foo', 'bar', 'baz']

const b = [...a, 'qux']
console.log(b)  // ['foo', 'bar', 'baz', 'qux']
```

### Updating an Array Immutably

### Array.filter()

- Object `a` remains unchanged.

```js
const a = ['foo', 'bar', 'baz']
console.log(a)  // ['foo', 'bar', 'baz']

const b = a.filter(n => n !== 'bar' ? n : null)
console.log(b)  // ['foo', 'baz']
```

[Immutability Challenge](https://codesandbox.io/s/mzy628nnjx)
[Immutability Solution](https://codesandbox.io/s/6w6vm9my7r)

## Meta-Programming

> Meta-Programming is a programming technique in which computer programs have the ability to treat programs as their data. It means that a program can be designed to read, generate, analyse or transform other programs, and even modify itself while running. In some cases, this allows programmers to minimize the number of lines of code to express a solution, thus reducing the development time. It also allows programs greater flexibility to efficiently handle new situations without recompilation.
>
> https://en.wikipedia.org/wiki/Metaprogramming

> Starting with ECMAScript 2015, JavaScript gains support for the Proxy and Reflect objects allowing you to intercept and define custom behavior for fundamental language operations (e.g. property lookup, assignment, enumeration, function invocation, etc). With the help of these two objects you are able to program at the meta level of JavaScript.
>
> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Meta_programming

### Reflect()

#### .has(obj, 'propertyName')

```js
const foo = {a: 1, b: 2}

const result = Reflect.has(foo, 'a')
console.log(result)  // true
```

#### .ownKeys()

```js
const bar = {a: 1, b: 2}

const keys = Reflect.ownKeys(bar)
console.log(keys)  // ['a', 'b']
```

```js
const baz = {a: 1, b: 2}

Reflect.ownKeys(baz).map(key => {
	baz[key] = "👊"
})
console.log(baz)  // {a: "👊", b: "👊"}
```

#### .getPrototypeOf()

```js
const qux = {a: 1, b: 2}

```

### Proxy()

#### Traps

#### new Proxy(target, handler)

#### handler

##### .constsruct()

##### .ownKeys()

## Asynchronous Control Flow

### Promises

```js
const myPromise = () => new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('Hi!')
	}, 1000)
})

myPromise().then(result => {
	console.log(result)
})
// Promise {<pending>}
// Hi!
```

#### .catch(err)

```js
const myPromise = () => new Promise((resolve, reject) => {
	setTimeout(() => {
		//resolve('Hi!')
		reject('Oops!')
	}, 1000)
})

myPromise().then(result => {
	console.log(result)
}).catch(err => {
	console.error(err)
})
// Promise {<pending>}
// Error: Oops!
```

#### .finally()

```js
const tryToFlipHeads = () => new Promise((resolve, reject) => {
	const rnd = Math.round(Math.random(1))
	const result = rnd ? 'heads' : 'tails';
	setTimeout(() => {
		if (result === 'heads') {
			resolve('HEADS! :)')	
		} else {
			reject('TAILS :(')
		}
	}, 1000)
})

tryToFlipHeads().then(result => {
	console.log(result)
}).catch(err => {
	console.error(err)
}).finally(status => {
	console.log('DONE!')
})
// Promise {<pending>}
// Heads! :)
// ... or ...
// Tails :(
// DONE!
```

#### .all(promises)

```js
const fetch = require('node-fetch')

const fetchAll = endpoints => new Promise((resolve, reject) => {
	const promises = []

	endpoints.forEach(endpoint => {
		promises.push(fetch(endpoint))
	})	

	return Promise.all(promises).then(resolve).catch(reject)
})

const responseToJson = fetched => new Promise((resolve, reject) => {
	const promises = []

	fetched.forEach(data => {
		promises.push(data.json())
	})	

	return Promise.all(promises).then(resolve).catch(reject)
})

const endpoints = [
	'https://jsonplaceholder.typicode.com/posts/1',
	'https://jsonplaceholder.typicode.com/posts/2',
	'https://jsonplaceholder.typicode.com/posts/3',
	'https://jsonplaceholder.typicode.com/posts/4',
	'https://jsonplaceholder.typicode.com/posts/5'
]

fetchAll(endpoints)
.then(responseToJson)
.then(items => {
	items.forEach((item, i) => {
		console.log(`${i}: ${item.title}`)
	})
})
// 0: sunt aut facere repellat provident occaecati excepturi optio reprehenderit
// 1: qui est esse
// 2: ea molestias quasi exercitationem repellat qui ipsa sit aut
// 3: eum et est occaecati
// 4: nesciunt quas odio
```

#### .race()

```js
const fetch = require('node-fetch')

const fetchOne = endpoints => new Promise((resolve, reject) => {
	const promises = []

	endpoints.forEach(endpoint => {
		promises.push(fetch(endpoint))
	})	

	return Promise.race(promises).then(resolve).catch(reject)
})

const endpoints = [
	'https://jsonplaceholder.typicode.com/posts/1',
	'https://jsonplaceholder.typicode.com/posts/2',
	'https://jsonplaceholder.typicode.com/posts/3',
	'https://jsonplaceholder.typicode.com/posts/4',
	'https://jsonplaceholder.typicode.com/posts/5'
]

fetchOne(endpoints)
.then(result => result.json())
.then(json => console.log(json.title))
// A different title is output each time
```

### Async & Await

```js
const myPromise = () => new Promise(resolve => {
	setTimeout(() => {
		resolve('Hi!')
	}, 1000)
})

const msg = await myPromise()
console.log(msg)
```

```js

const fetchAll = endpoints => new Promise((resolve, reject) => {
	const promises = []

	endpoints.forEach(endpoint => {
		promises.push(fetch(endpoint))
	})	

	return Promise.all(promises).then(resolve).catch(reject)
})

const responseToJson = fetched => new Promise((resolve, reject) => {
	const promises = []

	fetched.forEach(data => {
		promises.push(data.json())
	})	

	return Promise.all(promises).then(resolve).catch(reject)
})

const get = async endpoints => {
	const fetched = await fetchAll(endpoints)
	// console.log(fetched)

	const jsonItems = await responseToJson(fetched)
	// console.log(jsonItems)

	jsonItems.forEach((item, i) => {
		console.log(`${i}: ${item.title}`)
	})
}

const endpoints = [
	'https://jsonplaceholder.typicode.com/posts/1',
	'https://jsonplaceholder.typicode.com/posts/2',
	'https://jsonplaceholder.typicode.com/posts/3',
	'https://jsonplaceholder.typicode.com/poss/4',
	'https://jsonplaceholder.typicode.com/posts/5'
]

get(endpoints)
```

### Generators

#### Generator Functions

#### Iterators

#### next

#### yeild

# Part 4 - Array Methods

## .filter()
## .every()
## .includes()
## .some()
## .from() also w/ map
## .of()
## .forEach()
## .copyWithin()
## .fill()
## .find()
## .findIndex()

# Part 5 - Object Methods

## Is

### Number.isNaN()

### Array.isArray()

### Object.is()

> This is not the same as being equal according to the == operator. The == operator applies various coercions to both sides (if they are not the same Type) before testing for equality (resulting in such behavior as "" == false being true), but Object.is doesn't coerce either value.
>
> This is also not the same as being equal according to the === operator. The === operator (and the == operator as well) treats the number values -0 and +0 as equal and treats Number.NaN as not equal to NaN.
>
> Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is

## .assign()

## .values()

## .keys()

## .entries()

## .freeze()

> The Object.freeze() method freezes an object: that is, prevents new properties from being added to it; prevents existing properties from being removed; and prevents existing properties, or their enumerability, configurability, or writability, from being changed, it also prevents the prototype from being changed. The method returns the passed object.

## .seal()

> The Object.seal() method seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable. Values of present properties can still be changed as long as they are writable.
