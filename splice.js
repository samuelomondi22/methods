//changes the contents of an array by removing or replacing existing elements and/or adding new elements

//syntax .splice(index to where element is placed, number of elements deleted after where it is placed, thing to be added)

//
array1 = [1, 2, 4, 6, 8]
array1.splice(1, 0, 'june')
console.log(array1);
//
array1 = [1, 2, 4, 6, 8]
array1.splice(1, 2, 'june')
console.log(array1);
