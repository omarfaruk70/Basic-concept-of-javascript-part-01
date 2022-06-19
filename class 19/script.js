// Premetive data and refference data 
// premetive data = number, string , boolean, Null, NaN (Premetive means purano)
// Refference data = Object, Array etc . 
var a = 123;
var b  = a;
console.log(b);

var a = 54;
console.log(b);

//string case
let dream = "To Be a software engineer";
let job = dream;
console.log(job);
job = 'To be a web developer';
console.log(job);


// conclution
// premetive data works with value and refference type data works with address.


// refference type data 
var number = [ 1,2,4,5,];
var newNum = number;
console.log(newNum);
number[0]  = 0;
console.log(newNum);