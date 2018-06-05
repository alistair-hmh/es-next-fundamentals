const fetch = require('node-fetch')
const co = require('co')

// fetch('https://jsonplaceholder.typicode.com/posts/1')
// 	.then(response => response.json())
// 	.then(post => post.title)
// 	.then(x => console.log('Title:', x))

co(function *() {
	const uri = 'https://jsonplaceholder.typicode.com/posts/1'
	const response = yield fetch(uri)
	const post = yield response.json()
	const title = post.title
	console.log('Title:', title)
})