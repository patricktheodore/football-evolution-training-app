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

export function initialize(user) {

    if (!user.first_name || !user.last_name) {
        return `U`
    }

    let firstInitial = user.first_name.charAt(0)
    let lastInitial = user.last_name.charAt(0)

    let initials = `${firstInitial}${lastInitial}`;

    return initials.toUpperCase();

    //get value of first_name, take first letter, to uppercase
    //get value of last_name, take first, letter, to uppercase,
    //return A+B 
}

