//function weekTemps() {
    // this.dataStore = [];
    // this.add = add;
    // this.average = average;
    // }
    function add(temp) {
    this.dataStore.push(temp);
    }
    function average() {
    var total = 0;
    for (var i = 0; i < this.dataStore.length; ++i) {
    total += this.dataStore[i];
    }
    return total / this.dataStore.length;
    }
    var thisWeek = new weekTemps();
    thisWeek.add(52);
    thisWeek.add(55);
    thisWeek.add(61);
    thisWeek.add(65);
    thisWeek.add(55);
    thisWeek.add(50);
    thisWeek.add(52);
    thisWeek.add(49);
    console.log(thisWeek.average());




/**
 * 1. Create a grades object that stores a set of student grades in an object. Provide a
function for adding a grade and a function for displaying the student’s grade average
 */

function meanGrades(){
    this.store = []
    this.add = add;
    this.average = average;
}
function add(grades){
    this.store.push(grades)
}
function average(){
    var total = 0;
    for (let i = 0; i < this.store.length; i++) {
        total += this.store[i]
    }
    return total/ this.store.length
}
var thisStudent = new meanGrades()
thisStudent.add(52)
thisStudent.add(55)
console.log(thisStudent.average())

/**
 * 2. Store a set of words in an array and display the contents both forward and backward
 */

 const string = 'i am handsome'
 const array = string.split(' ')
 console.log(array)
 console.log(array.reverse());


 /**
  * 4. Create an object that stores individual letters in an array and has a function for
displaying the letters as a single word.
  */

const letter = ['what', 'you', 'think', 'i', 'am', 'nigga']
letter.forEach(e => console.log(e))