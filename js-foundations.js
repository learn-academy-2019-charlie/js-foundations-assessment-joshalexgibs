// Javascript Foundations Assessments

// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three" or, print the number and "is not divisble by three".
console.log("1:")
var thing = 7
const divByThree = function(num){
    if (num%3 === 0){
        return `${num} is divisible by three.\n`
    } else {
        return `${num} is not divisible by three.\n`
    }
}
console.log(divByThree(thing))

// 2. Write an object called helloMe. Include your first_name, last_name and at least two other properties of you. Write a function that returns a description of you.

console.log("2:")
var helloMe = {first_name: "Joshua", last_name: "Gibson", hair: "brown", age: 24}
const desc = (obj) => {
    return `Hi, my name is ${obj.first_name} ${obj.last_name}. I am ${obj.age} years old and have ${obj.hair} hair.\n`
}
//expected output => "Hi, my name is Joshua Gibson. I am 24 years old and have brown hair."
console.log(desc(helloMe))

// 3. Create an array of 5 grocery items. Write a function that returns the first, middle, and last item as a string.

console.log("3:")
var groceryList = ["apples", "milk", "bacon", "juice", "chips"]
//expected output => "apples bacon chips"
const groceries = (arr) => {
    return `${arr[0]} ${arr[Math.floor(arr.length/2)]} ${arr.slice(-1)}\n`
}
console.log(groceries(groceryList))

// 4. Write a function called alphabetSoup that takes an argument of "str" and return a string with the letters in alphabetical order (ie. learn becomes aelnr). Assume numbers and punctuation symbols will not be included in the parameter.

console.log("4:")
var example = "goknba"
const alphabetSoup = (str) => {
    let alpha = str.split("")
    alpha.sort()
    return alpha.join("")
}
console.log(`${alphabetSoup(example)}\n`)

// 5. Given the arrays below, write a function animalNums that uses a for loop to print one value from each array concatenated together.

console.log("5:")
var nums = [9, 5, 88, 2, 5, 42, 57]

var nouns = ["ducks", "elephants", "pangolin", "rhinoceros", "giraffes", "penguins", "llamas"]

// output should be: "9 ducks", etc

const animalNums = (arr1, arr2) => {
    if (arr1.length === arr2.length){
        for (let i = 0; i < arr1.length; i++){
            console.log(`${arr1[i]} ${arr2[i]}`)
        }
    }
}
animalNums(nums, nouns)

//6. Create an array of 5 numbers. Write a function that loops through the array and returns a new array of the numbers multiplied by 5.

console.log("\n6:")
var toBeMult = [1, 7, 3, 6, 90]

const mult5 = (arr1) => {
    let holder = arr1.map(value => {
        return value*=5
    })
    return holder
}
console.log(`${mult5(toBeMult)}`)