const tryToFlipHeads = () => new Promise((resolve, reject) => {
	const rnd = Math.round(Math.random(1))
	const result = rnd ? 'heads' : 'tails';
	setTimeout(() => {
		if (result === 'heads') {
			resolve('HEADS! :)')	
		} else {
			reject('TAILS :(')
		}
	}, 1000)
})

tryToFlipHeads().then(result => {
	console.log(result)
}).catch(err => {
	console.error(err)
}).finally(status => {
	console.log('DONE!')
})
