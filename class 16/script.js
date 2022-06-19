// array data types part 2
var number = [];
number.push(1,2,5,4,5,6,5,4);
console.log(number);
// string to array
var str = "Bangladesh";
var arr = str.split("");
console.log(arr)

// separate word 
var val = "Hello world";
var ans  = val.split('.');
console.log(ans);

// Bangladesh is a country.. ekhane word ta alada alada vabe dekhao
var countryName = "Bangladesh is a country";
var output = countryName.split(" ");
console.log(output);



// array to string 
var desherNam = ["Bangladesh", "India", "China",];
var result = desherNam.toString(',');
console.log(result); 
var result = desherNam.join(" ");
console.log(result);



// practising task (string to array)
var love = "I love javascript";
var sta =  love.split(" ")
console.log(sta);

// add two string 
var countries1 = ["Bangladesh", "Pakistan", "Nepal"];
var countries2 = ["USA","UK", "India", "China"];

var result = countries1.concat(countries2)
console.log(result)
result.sort();
console.log(result);

// we can find the serially like a,b,c,d ...etc by sort() method
// sorting method sort()
var alphabets = ["e", "d", "c", "b", "a"];
var result = alphabets.sort();
console.log(result);