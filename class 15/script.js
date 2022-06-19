// array data types
// array is a types of data types which hold a lot of data types/ a lot of collection
var countryName = ["Bangladesh","India","USA","UK","Finland"];
console.log(countryName);

// single item output from array 
var names = ["Faruk", "Minhaz", "Opi"];
var myName = names[0];
console.log("This is","Omar", myName , 'here today' );
// names[2] = 'Saiful islam Emon';
// console.log(names);

var programmers = ["Emon", "Noman", "Faruk", "Minhaz"];
var noob = programmers[2];
var me = noob + " is a baby Programmer";            
console.log(me);

// add a single item on the last side
var dream = ["Doctor", "Engineer", "Teacher",];
dream[dream.length] = "Youtuber";
console.log(dream);

// push method use case
var subjectsName = ["Bangla", "English", "Math"];
subjectsName.push('ICT');
console.log(subjectsName);

//pop methods use case 
var number = [1,2,3,4,5,6];
number.pop();
console.log(number);
// shift() method 
// shift() is a popular method to remove first element from an array in js
var dokanerNam = ["Grocery", "Ice-cream", "Farmacy", "Tea-stall"];
dokanerNam.shift();
console.log(dokanerNam);
// unshift() method is use for add an element in first position in an array
console.log(arr);
var arr = [4,5,6];
arr.unshift(1,2,3);
console.log(arr);