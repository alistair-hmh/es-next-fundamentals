class Foo {
	constructor () {
		this.bar = 123

		const myPrivateMethod = Symbol();

		this[myPrivateMethod] = () => {
			console.log('You can\'t see me!')
		};
	}
}

const inst = new Foo()

for (let prop in inst) {
	console.log(`${prop}=${inst[prop]}`)
}


console.log(Reflect.ownKeys(inst)[0])
// bar

console.log(Reflect.ownKeys(inst)[1]())
// TypeError: Reflect.ownKeys(...)[1] is not a function