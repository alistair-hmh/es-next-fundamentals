function Dog(name) {
	this.name = name
}

Dog.prototype.bark = function() {
	console.log(`Woof, my name is ${this.name}!`)
}

function SuperDog(name) {
	Dog.call(this, name)
}
SuperDog.prototype.constructor = Dog
SuperDog.prototype = new Dog()

SuperDog.prototype.fly = function() {
	console.log("I'm flying!")
}

const buddy = new Dog('Buddy')
const bella = new SuperDog('Bella')
buddy.bark()
bella.bark()
bella.fly()
