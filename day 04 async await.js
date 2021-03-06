// Async await

// Error Handling
async function getMatchSet(id) {
    try {
        let result = await axios.get('/api/matchset/${id}');
        return result.data;
    }
    catch(err) {
        // ...
    }
}

// Anti-pattern; Promise method with try-catch
const makeRequest = () => {
try {
    getJSON()
      .then(result => {
        // this parse may fail
        const data = JSON.parse(result)
        console.log(data)
      })
      // uncomment this block to handle asynchronous errors
      /* .catch((err) => {
         console.log(err)
      })*/
  } catch (err) {
    console.log(err)
  }
}

// With Async-await
const makeRequest = async () => {
    try {
        // this parse may fail
        const data = JSON.parse(await getJSON())
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}
