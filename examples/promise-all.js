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