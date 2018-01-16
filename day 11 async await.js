/*
// ECMAScript 2017 feature - Async Functions
//
//  Async Function Variants 
*/

// 1. Async fn declaration
async function foo() {};

// 2. Async fn expression
const foo = async function() {};

// 3. Async method definitions
let obj = { async foo(){} }

// 4. Async arrow fn
const foo = async () => {};

// Async fn always returns a Promise

async function asyncFunc() {
    return 123;
}

asyncFunc()
.then(x => console.log(x));
    // 123

//  Rejecting the Promise of an async function

async function asyncFunc2() {
    throw new error('Problem');
}

asyncFunc2()
.catch(err => console.log(err));
// Errorr: Problem!