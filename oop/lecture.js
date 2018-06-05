// // Basic
// class Dog {}
// const buddy = new Dog()
// console.log(buddy)

// // Methods
// class Dog {
// 	bark () {
// 		console.log('woof')
// 	}
// }
// const buddy = new Dog()
// buddy.bark()

// // Constructor
// class Dog {
// 	constructor (name) {
// 		this.name = name
// 	}

// 	bark () {
// 		console.log(`Woof, my name is ${this.name}!`)
// 	}
// }
// const buddy = new Dog('Buddy')
// const bella = new Dog('Bella')
// buddy.bark()
// bella.bark()

// // Extends & Super
// class Dog {
// 	constructor (name) {
// 		this.name = name
// 	}

// 	bark () {
// 		console.log(`Woof, my name is ${this.name}!`)
// 	}
// }

// class SuperDog extends Dog{
// 	constructor(name) {
// 		super(name)
// 	}

// 	fly () {
// 		console.log('I\'m flying!')
// 	}
// }

// const buddy = new Dog('Buddy')
// const bella = new SuperDog('Bella')
// buddy.bark()
// bella.bark()
// bella.fly()
// buddy.fly()
// // TypeError: buddy.fly is not a function
