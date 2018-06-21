// // Const overwrites var 
// var a = 1
// const a = 2
// console.log(a)

// // Var cannot overwrite const
// const a = 1
// var a = 2
// // ...or...
// a = 2
// console.log(a)
// // SyntaxError: Identifier 'a' has already been declared
// - Execution of your script will halt

// // Block Scoping Const
// const a = 1
// {
// 	const a = 2
// 	console.log(a)
//  (
//		Note: you cant do var here, because var falls through the block.
//  	Eg: var a = 4
//		// SyntaxError: Identifier 'a' has already been declared
// }

// // Block Scoping Let
// let a = 1
// let a = 2
// // SyntaxError: Identifier 'a' has already been declared

// // Works...
// let a = 1
// a = 2
// console.log(a)

// // For Loops
// for (let i = 0; i< 10; i++) {
// 	console.log(i)
// }
// // ReferenceError: i is not defined
// console.log(i)

// // If Statements
// if (true) {
// 	const a = 1
// }
// const a = 2
// console.log(a)