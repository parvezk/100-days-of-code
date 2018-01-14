// Async Await

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
