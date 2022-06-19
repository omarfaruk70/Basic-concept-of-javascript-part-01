// more array and objects
var arr = [1,2,["a", "b"],6,5,4];
console.log(arr);
console.log(arr[2][0]); // result is a

// 3 array output shown 
var arr2 = [1,2,3,4,["a",["num1", "num2"],"b"],5,6]
console.log(arr2);
console.log(arr2[4][1][1]); // num2 shown

// multiple value in an array
// array , array in , property etc
//property access system
var collection = [1,2,3,4, ["a", "b", "c","d"], {property1: "Item1", property2: "Item2"}];
console.log(collection[5].property1);

// copetetive methods
var how = ["item01", "item02", {prop1: "item03", prop2: [1,2,['a','b']]}];
console.log(how[2].prop2[2][1]); // result is b


// object er vitor array
var obj = {
    name : "Faruk",
    age : 20,
    weight: 50,
    familyMembers: ["abbu", "ammu", "chotovon"]
}
var result = obj.familyMembers[1];
console.log(result);