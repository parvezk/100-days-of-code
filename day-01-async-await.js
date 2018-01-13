/*
	Async Await:
	Any async function returns a promise implicitly, and the resolve value of the promise 
	will return whatever returned 
*/

const doubleAfter2Sec = (x) => {
	return new Promise(resolve => {
    	setTimeout(() => {
        	resolve(x * 2);
        }, 2000);
    });
}

async function addAsync(x) {
  let sec = 0;
	const a = doubleAfter2Sec(10);
	const b = doubleAfter2Sec(20);
  	const c = doubleAfter2Sec(30);
  // These async calls run in parallel, like promise.all
  return {
  	x: x,
  	a: await a,
  	b: await b,
  	c: await c
  };
}

console.log(addAsync(4));