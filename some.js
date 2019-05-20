//will take a Boolean function and return true if at least one of the elements in the array meets the criterion of the Boolean function.

function isFalse(num){
    return num<10
}
const array1 = [1,2,3,4,40]
console.log(array1.some(isFalse))