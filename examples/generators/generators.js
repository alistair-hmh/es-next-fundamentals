const run = generator => {
	const iterator = generator()
	const iteration = iterator.next()

	const iterate = iteration => {
		if (iteration.done) {
			return iteration.value
		}

		const promise = iteration.value
		return promise.then(result => iterate(iterator.next(result)))
	}

	return iterate(iteration)
}

const delay = name => new Promise(resolve => {
	const delay = Math.random() * 1000
	setTimeout(() => resolve({name, delay}), delay)
})

run(function *() {
	const foo = yield delay('foo')
	console.log(foo)
	const bar = yield delay('bar')
	console.log(bar)
	const baz = yield delay('baz')
	console.log(baz)
})