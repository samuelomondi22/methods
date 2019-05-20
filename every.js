//tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value. 

//
function isTrue(num){
    return num<10
}
const array = [1,2,3,4]
console.log(array.every(isTrue))

//
function isFalse(num){
    return num<10
}
const array1 = [1,2,3,4,40]
console.log(array1.every(isFalse))