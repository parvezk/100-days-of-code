// Async await

//Error stacks
const makeRequest = () => {
    return callAPromise()
      .then(() => callAPromise())
      .then(() => callAPromise())
      .then(() => callAPromise())
      .then(() => callAPromise())
      .then(() => {
        throw new Error("oops");
      })
  }
  
  makeRequest()
    .catch(err => {
      console.log(err);
      // output
      // Error: oops at callAPromise.then.then.then.then.then (index.js:8:13)
    })

    // the error stack from async/await points to the function that contains the error

    const makeRequest = async () => {
        await callAPromise()
        await callAPromise()
        await callAPromise()
        await callAPromise()
        await callAPromise()
        throw new Error("oops");
      }
      
      makeRequest()
        .catch(err => {
          console.log(err);
          // output
          // Error: oops at makeRequest (index.js:7:9)
        })