// let text =
//   'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// text = text.replaceAll(',', '')
// text = text.replaceAll('.', '')

// const words = text.split(' ')

// console.log(words)
// console.log(words.length)

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// shoppingCart.unshift('Meat')
// shoppingCart.push('Sugar')
// console.log(shoppingCart.indexOf('Tea'))
// shoppingCart[3] = 'Green Tea'
// console.log(shoppingCart)

// console.log(countries)

// if (countries.includes('Ethiopia')) {
//     console.log('ETHIOPIA')
// } else {
//     countries.push('Ethiopia')
// }

// if (webTechs.includes('Sass')) {
//     console.log('Sass is a CSS preprocess')
// } else {
//     webTechs.push('Sass')
//     console.log(webTechs)
// }

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node', 'Express', 'MongoDB']

// const fullStack = frontEnd.concat(backEnd)
// console.log(fullStack)

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// ages.sort()
// console.log(ages)

// let minAge = Math.min(...ages)
// console.log(minAge)
// let maxAge = Math.max(...ages)
// console.log(maxAge)
// let averageAge = ages.reduce((a, b) => a + b, 0) / ages.length
// console.log(averageAge)
// let rangeAges = maxAge - minAge
// console.log(rangeAges)
// let compareMin = Math.abs(minAge - averageAge)
// console.log(compareMin)
// let compareMax = Math.abs(maxAge - averageAge)
// console.log(compareMax)
// console.log(countries.slice(0, 10))
// console.log(countries.slice(1,countries.length - 2))
// let number = countries.length / 2
// console.log(countries.slice(0, number))
// console.log(countries.slice(number, countries.length - 1))

// let num = prompt('Enter your age:')

// if (num >= 18) {
//     console.log('You are old enough to drive')
// } else {
//     console.log(`You are left with ${18 - num} years to drive.`)
// }

// let age = prompt('Enter your age:')

// if (age == 30) {
//     console.log('We are the same age.')
// } else  if (age > 30) {
//     console.log(`You are ${age - 30} years older than me.`)
// } else {
//     console.log(`You are ${30 - age} years younger than me.`)
// }

// let a = 4
// let b = 5

// if (a > b) {
//     console.log(`${a} is greater than ${b}`)
// } else {
//     console.log(`${a} is less than ${b}`)
// }

// (a > b) ? console.log(`${a} is greater than ${b}`) : console.log(`${a} is less than ${b}`)

// let num = 5

// if (num % 2 ===  0) {
//     console.log(`${num} is an even number`)
// } else {
//     console.log(`${num} is an odd number`)
// }

// (num % 2 === 0) ? console.log(`${num} is an even number`) : console.log(`${num} is an odd number`)


// let grade = prompt('Enter your grade')

// switch (true) {
//     case grade >= 80 && grade <= 100:
//         console.log('A')
//         break
//     case grade >= 70 && grade < 80: 
//         console.log('B')
//         break
//     case grade >= 60 && grade < 70:
//         console.log('C')
//         break
//     case grade >= 50 && grade < 60:
//         console.log('D')
//         break
//     case grade >= 0 && grade < 50:
//         console.log('F')
//         break
//     default:
//         console.log('Entered value was not a correct number')
// }

// let monthPrompt = prompt('Enter current month:')
// let month = monthPrompt.toLowerCase()



// switch (month) {
//     case 'january':
//     case 'february':
//     case 'december':
//         console.log('Winter')
//         break
//     case 'march':
//     case 'april':
//     case 'may':
//         console.log('Spring')
//         break
//     case 'june':
//     case 'july':
//     case 'august':
//         console.log('Summer')
//         break
//     case 'september':
//     case 'october':
//     case 'november':
//         console.log('Autumn')
//         break
//     default:
//         console.log('This is not a month')
// }

// let dayPrompt = prompt('Enter name of day which is today')
// let day = dayPrompt.toLowerCase()

// switch (day) {
//     case 'monday':
//     case 'thuesday':
//     case 'wednesday':
//     case 'thursday':
//     case 'friday':
//         console.log(`${day} is a working day`)
//         break
//     case 'saturday':
//     case 'sunday':
//         console.log(`${day} is a free day`)
//         break
//     default:
//         console.log(`${day} is not a day`)
// }

// let monthPrompt = prompt('Enter month')
// let month = monthPrompt.toLowerCase()

// switch (month) {
//     case 'january':
//     case 'march':
//     case 'may':
//     case 'juli':
//     case 'august':
//     case 'october':
//     case 'december':
//         console.log(`${month.charAt(0).toUpperCase() + month.slice(1).toLowerCase()} has 31 days`)
//         break
//     case 'february':
//         console.log(`${month.charAt(0).toUpperCase() + month.slice(1).toLowerCase()} has 28 or 29 days`)
//         break
//     case ' april':
//     case 'june':
//     case 'september':
//     case 'november':
//         console.log(`${month.charAt(0).toUpperCase() + month.slice(1).toLowerCase()} has 30 days`)
//         break
//     default:
//         console.log(`${month.charAt(0).toUpperCase() + month.slice(1).toLowerCase()} is not a month`)
// }

// const user = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     age: 250,
//     country: 'Finland',
//     skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', 'D3.js'],
//   }
  
//   for (const key in user) {
//     console.log(key, user[key])
//   }

//   const dog = {
//     name: 'Reksio', 
//     legs: 4, 
//     color: 'brown', 
//     age: 4,
//     bark: 'woof woof'
//   }
//   console.log(dog)
//   console.log(dog.name)
//   console.log(dog.legs)
//   console.log(dog.color)
//   console.log(dog.age)
//   console.log(dog['bark'])

//   dog.breed = 'Great Charts'
//   dog.getDogInfo = 'info'
//   console.log(dog)

//   const users = {
//     Alex: {
//       email: 'alex@alex.com',
//       skills: ['HTML', 'CSS', 'JavaScript'],
//       age: 20,
//       isLoggedIn: false,
//       points: 30
//     },
//     Asab: {
//       email: 'asab@asab.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//       age: 25,
//       isLoggedIn: false,
//       points: 50
//     },
//     Brook: {
//       email: 'daniel@daniel.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//       age: 30,
//       isLoggedIn: true,
//       points: 50
//     },
//     Daniel: {
//       email: 'daniel@alex.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     },
//     John: {
//       email: 'john@john.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//       age: 20,
//       isLoggedIn: true,
//       points: 50
//     },
//     Thomas: {
//       email: 'thomas@thomas.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     },
//     Paul: {
//       email: 'paul@paul.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     }
// }
//     const getUserInfo = function () {
//        return Object.values(users)
//     }


// const persons = getUserInfo()
// let num = 0
// let points = 0

// for (let i = 0; i < persons.length; i++) {
//     if (persons[i].skills.length > 6)
//     console.log(persons[i].skills)
// }

// for (let i = 0; i < persons.length; i++) {
//     if (persons[i].isLoggedIn == true) {
//         num++
//     }
// }

// console.log(num)

// for (let i = 0; i < persons.length; i++) {
//     if (persons[i].points >= 50) {
//         points++
//     }
// }

// console.log(points)

// for (let i = 0; i < persons.length; i++) {
//     if (persons[i].skills.includes('MongoDB', 'Express', 'React', 'Node')) {
//         console.log(persons[i])
//     }
// }

// const copyUsers = Object.assign({}, users)

// const copyCopyUsers = Object.keys(copyUsers)
// copyCopyUsers.push('Marta')
// console.log(copyCopyUsers)

// const personAccount = {

// firstName: 'Mara', 
// lastName: 'Dembowska', 
// incomes: [
//     {amount: 3495, description: 'salaries'},
//     {amount: 200, description: 'tips'}
// ],
// expenses: [
//     {amount: 200, description: 'plants'}, 
//     {amount: 500, description:'bike service'}
// ],
// totalIncome: function () {
//     return this.incomes.reduce((all, curr) => all + curr.amount, 0)
// }, 
// totalExpense: function () {
//     return this.expenses.amount
// }, 
// accountInfo: function () {
//     return `${this.firstName} ${this.lastName}`
// },
// addIncome: function (newIncome) {
//     return this.incomes.push(newIncome)
// }, 
// addExpense: function (newExpense) {
//     return this.expenses.push(newExpense)
// }, 
// accountBalance: function () {
//     return this.incomes.amount - this.expenses.amount
// } 
// }

// console.log(personAccount.addIncome({amount: 150, description:'dupa'}))
// console.log(personAccount.addIncome({amount: 150, description:'kupa'}))
// console.log(personAccount.incomes)
// console.log(personAccount.totalIncome())

// const users = [
//     {
//       _id: 'ab12ex',
//       username: 'Alex',
//       email: 'alex@alex.com',
//       password: '123123',
//       createdAt: '08/01/2020 9:00 AM',
//       isLoggedIn: false,
//     },
//     {
//       _id: 'fg12cy',
//       username: 'Asab',
//       email: 'asab@asab.com',
//       password: '123456',
//       createdAt: '08/01/2020 9:30 AM',
//       isLoggedIn: true,
//     },
//     {
//       _id: 'zwf8md',
//       username: 'Brook',
//       email: 'brook@brook.com',
//       password: '123111',
//       createdAt: '08/01/2020 9:45 AM',
//       isLoggedIn: true,
//     },
//     {
//       _id: 'eefamr',
//       username: 'Martha',
//       email: 'martha@martha.com',
//       password: '123222',
//       createdAt: '08/01/2020 9:50 AM',
//       isLoggedIn: false,
//     },
//     {
//       _id: 'ghderc',
//       username: 'Thomas',
//       email: 'thomas@thomas.com',
//       password: '123333',
//       createdAt: '08/01/2020 10:00 AM',
//       isLoggedIn: false,
//     },
//   ]
  
//   const products = [
//     {
//       _id: 'eedfcf',
//       name: 'mobile phone',
//       description: 'Huawei Honor',
//       price: 200,
//       ratings: [
//         { userId: 'fg12cy', rate: 5 },
//         { userId: 'zwf8md', rate: 4.5 },
//       ],
//       likes: [],
//     },
//     {
//       _id: 'aegfal',
//       name: 'Laptop',
//       description: 'MacPro: System Darwin',
//       price: 2500,
//       ratings: [],
//       likes: ['fg12cy'],
//     },
//     {
//       _id: 'hedfcg',
//       name: 'TV',
//       description: 'Smart TV:Procaster',
//       price: 400,
//       ratings: [{ userId: 'fg12cy', rate: 5 }],
//       likes: ['fg12cy'],
//     },
//   ]

//   const newUser = {
//     _id: 'opphbo',
//     username: 'Maria',
//     email: 'mary@jones.com',
//     password: '1456333',
//     createdAt: '08/01/2020 9:50 AM',
//     isLoggedIn: false,
//   }
  
//   const signUp = function (user) {
//     if (users.find(u => u.email===user.email)) {
//         console.log('You have an account already')
//         return
//     }

//     users.push(newUser)
// }

//   signUp(newUser)

//   const signIn = function (user) {
//     if (users.find(u => u.email === user.email)) {
//         user.isLoggedIn = true
//         return
//     } 

//     console.log('You do not have an account yet. Please sign up.')
//   }

//   signIn(users[3])

//   const rateProduct = function (user, product, rate) {
//     product.ratings.push({ userId: user._id, rate: rate })
//   }

//   rateProduct(users[3], products[1], 4)

//   console.log(products[1])



//   const averageRating = function (product) {
//     if (!product.ratings.length) return 0

//     return product.ratings.reduce((all, curr) => all + curr.rate, 0) / product.ratings.length
//   }

//   console.log(averageRating(products[0]))

//   const likeProduct = function (user, product) {
//     if (product.likes.includes(user._id)) {
//         let index = (product.likes.indexOf(user._id))
//         product.likes.splice(index, 1)
//     return
//     }
    
//     product.likes.push( user._id )
//   }

//   likeProduct(users[1], products[2])

//   console.log(products[2])

//   const fullName = (firstName = 'Marta', lastName = 'Kujawska') => {
//     console.log(`${firstName} ${lastName}`)
//   }

//   fullName()
//   fullName('Bartosz', 'Kujawski')

//   const addNumbers = (a, b) => {
//     console.log(a + b)
//   }

//   addNumbers(4,9)

//   const areaOfCircle = (r) => {
//         console.log(3.14 * r * r)
//   }

//   areaOfCircle(2)

// const convertCelciusToFahrenheit = (oC) => {
//     const oF = (oC * 9/5) + 32
//     console.log(`${oC}oC = ${oF}oF `)
// }
  
// convertCelciusToFahrenheit(15)

// const bmi = (kg, m) => {
//     const bmiValue = kg / (m * m);
//     let weight
//     if (bmiValue < 18.5) {
//         weight = 'underweight'
//     } else if (bmiValue >= 18.5 && bmiValue < 25) {
//         weight = 'normal weight'
//     } else if (bmiValue >= 25 && bmiValue < 30) {
//         weight ='overweight'
//     } else {
//         weight = 'obese'
//     }
//     console.log(`Your bmi = ${bmiValue}, and it's ${weight}`)
// }

// bmi(57, 1.58)

// const checkSeason = (month) => {
//     let season
//     if (month === 'January' || month === 'February' || month === 'December') {
//         season = 'Winter'
//     } else if (month === 'March' || month === 'April' || month === 'May') {
//         season = 'Spring'
//     } else if (month === 'June' || month === 'July' || month === 'August') {
//         season = 'Summer'
//     } else if (month === 'September' || month === 'October' || month === 'November') {
//         season = 'Autumn'
//     } else {
//         season = 'This is not a month'
//     }
//     console.log(season)
// }

// checkSeason('April')

// const solveQuadratic = (a, b, c) => {
//     let delta
//     let x1
//     let x2

//     delta = (b * b) - 4 * a * c

//     if (delta > 0) {
//         x1 = ( - b - Math.sqrt(delta)) / (2 * a)
//         x2 = ( - b + Math.sqrt(delta)) / (2 * a)
//        return {x1, x2}
//     } else if (delta === 0) {
//         x1 = x2 = -b / (2 * a)
//        return {x1}
//     } else {
//         x1 = 0
//        return {x1}
//     }
// }

// console.log(solveQuadratic()) // {0}
// console.log(solveQuadratic(1, 4, 4)) // {-2}
// console.log(solveQuadratic(1, -1, -2)) // {2, -1}
// console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)) //{2, -2}
// console.log(solveQuadratic(1, -1, 0)) //{1, 0}

// const showDateTime = () => {
//     const date = new Date();
//     const day = date.getDay() < 10 ? `0${date.getDay()}` : date.getDay()
//     const month = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth()
//     const year = date.getFullYear()
//     const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
//     const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
    
//     console.log(`${day}/${month}/${year} ${hours}:${minutes}`)
// }

// showDateTime()

// const numOfCar = prompt('number of characters');
// // const numOfIds = prompt('number of ids')

// console.log(numOfCar)

// const userIdGeneratedByUser = (length = numOfCar) => {
//     console.log(Math.random().toString(36).substring(2, length + 2))
// }

// userIdGeneratedByUser()

const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]

const showPrice = products.forEach(product => {
    if (product.price === '' || product.price === ' ') {
        console.log(`The price of ${product.product} is unknown.`)
    } else {
    console.log(`The price of ${product.product} is ${product.price} euros.`)
    }
});

let sum = 0

// const sumPrices = products.forEach(product => {
//     if (product.price === '' || product.price === ' ') {
//         product.price = 0
//     }
//     console.log(sum += product.price)
// })

const prices = products.map(product => product.price)

const getNumber = (value) => typeof value === 'number' ? value : 0


// console.log(prices)

console.log(products.filter(product => typeof product.price === 'number'))

const sumPricesbyReduce = products.reduce((acc, curr) => acc + getNumber(curr.price), 0) 

console.log(sumPricesbyReduce)

const findProduct = products.every(product => typeof product.price === 'string')
console.log(findProduct)
