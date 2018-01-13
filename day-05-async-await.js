// Async await
/*
    Code below fetches some data and decides whether it should return that or get more details based on some 
    value in the data
*/

// With Promise
const makeRequest = () => {
    return getJSON()
    .then(data => {
        if(data.needsAnotherRequest){
            return makeAnotherRequest(data)
                .then(moreData => {
                    console.log(moreData);
                    return moreData;
                });
            } else {
                console.log(data);
                return data;
            }
        })
}


// Async-Await

const makeReq = async () => {
    const data = await getJSON();
    if (data.needsAnotherRequest){
        const moreData = await makeAnotherRequest(data);
        console.log(moreData);
        return moreData;
    } else {
        console.log(data);
        return data;
    }
}
