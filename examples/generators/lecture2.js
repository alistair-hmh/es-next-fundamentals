const fetch = require('node-fetch')

// function run (generator) {
// 	// console.log(generator())
// 	const iterator = generator()
// 	// console.log(iterator)
// 	const iteration = iterator.next()
// 	// console.log(iteration)
// 	const promise = iteration.value
// 	// console.log(promise)
// 	promise.then(response => {
// 		const anotherIterator = iterator.next(response)
// 		// console.log('anotherIterator', anotherIterator)
// 		const anotherPromise = anotherIterator.value
// 		// console.log('anotherPromise', anotherPromise)
// 		anotherPromise.then(y => iterator.next(y))
// 	})
// }

function run (generator) {
	const iterator = generator()
	const iteration = iterator.next()
	function iterate (iteration) {
		if (iteration.done) {
			return iteration.value
		}
		const promise = iteration.value
		return promise.then(x => iterate(iterator.next(x)))
	}
	return iterate(iteration)
}

run(function *() {
	const uri = 'https://jsonplaceholder.typicode.com/posts/1'
	const response = yield fetch(uri)
	// console.log('response', response)
	const post = yield response.json()
	// console.log('post', post)
	const title = post.title
	console.log('Title:', title)
})

