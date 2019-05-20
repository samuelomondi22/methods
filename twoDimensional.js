// var nums = Array.matrix(5,5,0);
// console.log(nums[1][1]); 

// var names = Array.matrix(3,3,"");
// names[1][2] = "Joe";
// console.log(names[1][2]);

var grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]];
console.log(grades[2][2]);
//go to index 2 array [91,94,89] and looks at index 2 within the array


var grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]]
function samuel(grades){
var results = []
for (let row = 0; row < grades.length; row++) {
    for (let col = 0; col < grades[row].length; col++) {
        results.push(grades[col])
        
    }
 
    
}
return results
}
console.log(samuel(grades))