// Async Await

async getMatchSet(id) {
    try {
        let result = await axios.get('/api/matchset/${id}');
        return result.data;
    }
    catch(err) {
        // ...
    }
}

// Normal approach
async load(id: number) {
    let golfers = await api.getActiveGolfers();
    let matchset = await api.getMatchSet(id);
    this.arrangeData(golfers, matchset);

}

// Efficient approach
async load(id: number) {

    const [golfers, matchset] = await Promise.all([
        api.getActiveGolfers(),
        api.getMatchSet(id)
    ]);

    this.arrangeData(golfers, matchset);
}