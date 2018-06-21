// // .has()
// const foo = {a: 1, b: 2}

// const result = Reflect.has(foo, 'a')
// console.log(result)  // true

// // .ownKeys() #1
// const bar = {a: 1, b: 2}

// const keys = Reflect.ownKeys(bar)
// console.log(keys)  // ['a', 'b']

// // .ownKeys() #2
// const baz = {a: 1, b: 2}

// Reflect.ownKeys(baz).map(key => {
// 	baz[key] = "👊"
// })
// console.log(baz)  // {a: "👊", b: "👊"}

const qux = {a: 1, b: 2}
console.log(qux)  // {b: 2}
console.log(Reflect.isExtensible(qux)) // false

Reflect.set(qux, 'c', 3)
console.log(qux)  // {b: 2}

Reflect.preventExtensions(qux)
console.log(Reflect.isExtensible(qux))  // false
Reflect.set(qux, 'd', 4)
// Nothing was added!
console.log(qux)  // {a: 1, b: 2, c: 3}

// Delete still works!
console.log(Reflect.deleteProperty(qux, 'a'))  // true
console.log(qux)

// But seal stops delete too!
Object.seal(qux)
console.log(Reflect.deleteProperty(qux, 'b')) // false
console.log(qux)