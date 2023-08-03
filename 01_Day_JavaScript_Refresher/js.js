const arr = Array();
const arr5 = Array(7).fill('Q');
console.log(arr5.length);
let lastIndex = arr5.length - 1;
console.log(arr5[0], arr5[3], arr5[lastIndex]);
const mixedDataTypes = ['Peter', 123, true, arr, {sizes: 'xs, s, m, l, xl, xxl'}, [1, 2, 3]];
console.log(mixedDataTypes.length);
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log(itCompanies, itCompanies.length, itCompanies[0], itCompanies[4], itCompanies[itCompanies.length -1]);

for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i])
    console.log(itCompanies[i].toUpperCase())
}

let sentence = `${itCompanies.slice(0, itCompanies.length - 1).join(', ')} and ${itCompanies[itCompanies.length - 1]} are big IT companies.`
console.log(sentence)

let company = 'Amazon';
 company = 'Netflix'

if (itCompanies.includes(company)) {
    console.log(company)
} else {
    console.log(`${company} not found`)
}

for (let i = 0; i < itCompanies.length; i++) {
    if (itCompanies[i].includes('oo') === true ) {
        console.log(itCompanies[i])
    } else {
        break;
    }
}

console.log(itCompanies.sort())
console.log(itCompanies.reverse())
// console.log(itCompanies.splice(3, itCompanies.length))
// console.log(itCompanies.splice(0, itCompanies.length - 3))
// console.log(itCompanies.splice(1, itCompanies.length - 2))
// itCompanies.shift()
// itCompanies.splice(1,itCompanies.length -2)
// itCompanies.pop()
itCompanies.splice(0,itCompanies.length)
console.log(itCompanies)