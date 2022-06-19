// switch statement use case
var choice = prompt("Please enter your alphabet a to d");
var text ;
if(choice == 'a'){
    text = "You have selected option 1 "
}
else if(choice == "b"){
    text  = "You have selected option 2"
}
else if(choice == "c"){
    text = "You have selected option 3"
}
else if(choice == "d"){
    text = "You have selected option 4"
}
else{
    text = "Invalid option selected"
}
console.log(text);

// uporeer if,else if, and elses er kaj ta korte onk code and time lagse
// ei kaj ta short korar jonno js er switch statement use korbo ..
 var choice = prompt("Please enter your option from a to z ");
 var text;
switch(choice){
    case 'a':
        text = "You have selected option 1"
        break;
    case 'b':
        text = "You have selected option 2"
        break;
    case 'c':
        text = "You have selected option 3"
        break;
    case 'd':
        text = "You have selected option 4"
        break;
    default:
        text = "Invalid option selected"    
}
console.log(text);

// day counter 
var today = prompt("Enter your day serial number of a week");
var result ;
switch(today){
    case '1':
        result = "The first day of a week is Saturday "
        break;
    case '2':
        result = "The second day of a week is Sunday"
        break;
    case '3':
        result = "The third day of a week is Monday"
        break;
    case '4':
        result = "The fourth day of a week is Tuesday"
        break;
    case '5':
        result = "The fifth day of a week is Wednesday"
        break;
    case '6':
        result = "The sixth day of a week is Thursday"
        break;
    case '7':
        result = "The seventh day of a week is Friday" 
            break;
    default:
        result = "Invalid Number of the day"                              
}
console.log(result);