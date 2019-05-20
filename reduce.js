//applies a function to an accumulator and the successive elements of an array until the end of the array is reached, yielding a single value

/**
 * The reducer function takes four arguments:
Accumulator (acc)
Current Value (cur)
Current Index (idx)
Source Array (src)
Your reducer function's returned value is assigned to the accumulator,
whose value is remembered across each iteration throughout the array and ultimately becomes the final, single resulting value.
 */
// works from left to right
 //add
function add(a, b){
    return a * b
}
const array = [1,2,3,4,5,6,7,8,9,10]
const newArray = array.reduce(add)
console.log(newArray)

//multiply
function multiply(a, b){
    return a * b
}
const array1 = [1,2,3,4,5,6,7,8,9,10]
const newArray1 = array1.reduce(multiply)
console.log(newArray1)

//strings
function string(a,b){
    return a + b 
}
const array2 = ['you', 'my', 'man']
const newArray2 = array2.reduce(string)
console.log(newArray2)

//reduceARight() works just like reduce() but from right to left
function string1(a,b){
    return a + b 
}
const array3 = ['you', 'my', 'man']
const newArray3 = array3.reduceRight(string1)
console.log(newArray3)