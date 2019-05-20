/**
 * The filter() function works similarly to every() , but instead of returning true if all
the elements of an array satisfy a Boolean function, the function returns a new array
consisting of those elements that satisfy the Boolean function
 */

const words = ['i', 'am',' the', 'real', 'slim', 'shaddy']
const newWords = words.filter(word => word.length > 3)
console.log(newWords);

const array = [1,2,3,4,5,6,7,8,9,10]
const newArr = array.filter(e => e % 2 === 0)
console.log(newArr)