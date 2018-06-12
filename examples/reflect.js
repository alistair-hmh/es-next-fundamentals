// .has()
const foo = {a: 1, b: 2}

const result = Reflect.has(foo, 'a')
console.log(result)  // true

// .ownKeys() #1
const bar = {a: 1, b: 2}

const keys = Reflect.ownKeys(bar)
console.log(keys)  // ['a', 'b']

// .ownKeys() #2
const baz = {a: 1, b: 2}

Reflect.ownKeys(baz).map(key => {
	baz[key] = "👊"
})
console.log(baz)  // {a: "👊", b: "👊"}


Reflect.isExtensible()
Reflect.preventExtensions()
Reflect.deleteProperty()
 Object.seal({}); 