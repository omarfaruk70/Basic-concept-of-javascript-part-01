var age = prompt('Enter your age');
if(age > 40){
    console.log('You age an old person');
}
else if(age >= 30 && age < 50){
    console.log('You are under 50 years old');
}
else if ( age >= 0 && age < 18){
    console.log(' you are not a citizen of the country');
}
else if(age >= 18 && age < 35){
    console.log(' You are a citizen of the country');
}
else{
    console.log(' Enter your proper age ')
}