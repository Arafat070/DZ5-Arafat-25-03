function reverseStrings(...strings) {
    let reversedStrings = [];
    for(let i = 0; i < strings.length; i++) {
        let reversedString = '';
        for(let j = strings[i].length-1; j >= 0; j--) {
            reversedString += strings[i][j];
        }
        reversedStrings.push(reversedString);
    }
    return reversedStrings;
}

console.log(reverseStrings('фронтенд', 'апрель', 'урок'));

function average() {
    let sum = 0;
    for (let i = 0; i < arguments[i]; i++ ) sum += arguments[i];
    return sum === 0 ? sum : sum / arguments.length;
}

console.log(average(1,6,4,8,3,5))


