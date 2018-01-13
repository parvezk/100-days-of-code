
// Async Await
async function getMatchSet(id) {
    try {
        let result = await axios.get('/api/matchset/${id}');
        return result.data;
    }
    catch(err) {
        // ...
    }
}

// Normal approach
async function load(number) {
    let golfers = await api.getActiveGolfers();
    let matchset = await api.getMatchSet(id);
    this.arrangeData(golfers, matchset);

}

// Efficient approach
async function load(number, num) {

    const [golfers, matchset] = await Promise.all([
        api.getActiveGolfers(),
        api.getMatchSet(id)
    ]);

    this.arrangeData(golfers, matchset);
}
