function addButNoHurry (a, b, callback) {
	setTimeout(() => {
		callback(a + b)
	}, 1000)
}

const a = 2
const b = 2

addButNoHurry(a, b, function (result) {
	console.log(result)
})