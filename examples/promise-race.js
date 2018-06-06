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