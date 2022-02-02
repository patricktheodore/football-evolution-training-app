export function getOverall(stats) {
    let array = [];

    for (var key in stats) {
        if (stats.hasOwnProperty(key)) {
            array.push(stats[key])
        }
    }
    
    const ints = array.filter(key => typeof key === 'number');

    const sum = ints.reduce((a, b) => a + b, 0)

    const overall = Math.ceil(sum/ints.length)

    return overall
};

