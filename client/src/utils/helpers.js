import moment from 'moment';

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

export function formatDate(date) {
    let result = moment(date, 'DD/MM/yyyy')

    return result
}

export function getAge(date) {
    let result = moment(date, "DD/MM/yyyy").fromNow(true);

    let age = result.slice(0, 2)

    return age
}

export function validateName(name) {
    const regex = /^[a-zA-Z\s]*$/;
    return regex.test(String(name));
}

export function validateEmail(email) {
    const re = /^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export function validatePassword(password) {
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return re.test(String(password));
}
