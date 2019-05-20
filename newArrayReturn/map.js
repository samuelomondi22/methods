//works like the forEach() function, applying a function to each element of an array
//difference is map returns a new array

const array = [1,2,3,4]
const newArray = array.map(e => console.log(e * 2))
newArray;

//
function curve(grade) {
    return grade += 5;
    }
    var grades = [77, 65, 81, 92, 83];
    var newgrades = grades.map(curve);
    console.log(newgrades)

//strings
function first(word) {
    return word[0];
    }
    var words = ["for","your","information"];
    var acronym = words.map(first);
    console.log(acronym.join(""));