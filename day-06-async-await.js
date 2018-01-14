// Async await

/* Intermediate values
    Call promise1 and then use what it returns to call promise2, then use result of both promises to call promise3
*/

// Anti-pattern
const makeRequest = () => {
    return promise1()
    .then(value1 => {
        // do something
        return Promise.all([value1, promise2(val1)])
    })
    .then(([value1, value2]) => {
        // do something
        return promise3(value1, value2);
    });
}

// Async-await
const makeReq = async () => {
    //const value1 = await promise1();
    //const value2 = await promise2(value1);

    const [value1, value2] = await Promise.all([
        promise1(),
        promise2(value1)
    ]);

    return promise3(value1, value2);
}