/* 
    Async/await 101
    - Async/await is a new way to write asynchronous code. 
    - Previous options for asynchronous code are callbacks and promises.
    - Async/await is, like promises, non blocking.
    - Async/await is actually built on top of promises
    - It cannot be used with plain callbacks or node callbacks.
    - Async/await makes asynchronous code look and behave a little more like synchronous code. This is where all its power lies.
    - Any async function returns a promise implicitly, and the resolve value of the promise will return whatever returned in that function
*/

// Anti-pattern (with promise)
const makeRequest = () => 
    getJSON()
        .then(data => {
            console.log(data);
            return "done"
        });

makeRequest();

// Async/Await
const makeReq = async () => {
    console.log(await getJSON());
    return "done";
}

makeReq();
