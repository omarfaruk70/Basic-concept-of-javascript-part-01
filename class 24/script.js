// control flow  part 2
// if , else if, else condition
var person1 = 'kamal';
var person2 = 'jamal';
var person3 = false;
if( person1 == 'kamal' && person2 == 'jamal' && person3 == true){
    console.log('They are brother');
}
else{
    console.log('They are not brother');
}

// positive and negative value 
var number = 10;
if(number > 5){
    var result = 'This number ' + number + ' is a positive number';
}
else{
    var result = ' This number ' + number + ' is a negative number';
}
console.log(result)


// Odd  or Even Number
var num = 12;
if(num % 2 == 0){
    var result = 'This is a odd number';
}
else{
    var result = 'This is a even number';
}
console.log(result);