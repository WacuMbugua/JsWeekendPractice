console.log("Hello from JavaScript");
console.log("HELLO WORLD!");
var number = 10; //this is a test
/* well
well
well
well */
number = 12;
/*javascritp has about 7 variables
sympol - unique
buulean = true or false
null = nothing
number
variable is like a box
object - can stvar MyNmore a lot of difefrent key value pairs */
var myName = "Joey"
myName = 8
let ourName = "yaase"
const pi = 3.14
var a;
console.log(b);

var b =2
console.log(b);

a = 7

b = a
console.log(b);


var myVar = 88;
myVar = myVar++; //incementation
console.log(myVar);
var remainder;
remainder = 11 % 3;

var MyStr = "Jello world"
var a = 11;
a *=2;
a += 23;
a /= 1;

var FirstName = "WM";
var LastName = "M"


var myStr = "I am a \"double quoted\" string inside \"double quotes";
console.log(myStr);

var myStr = "I come first." + "I come second."; //concatenating
var myStr = "Icome first.";
myStr += "I come second.";

console.log(myStr);
var someAdjective = "worthwhile";
var myStr = "Learning to code is";
myStr += someAdjective;


var firstName = "Ada" //getting the length of a name
var lastLetterofFirstName = firstName[firstName.length - 1];
//js starts counting from 0

function worldBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The" +myAdjective + "" + myNoun + "" + myVerb + "to the store" + myAdverb
}

console.log(worldBlanks)("dog", "big", "ran", "quickly");
//storing multiple values within an array

var ourArray = ["John" , 23]; //arrays always stsrt and close with a bracket

//Nested or Multidimesnional arrays
var ourArray = [["the universe", 42], ["everything, 101010"]];
var myArray = [["Bulls" , 23], ["white sox" , 45]];


//Functions
var myGlobal = 10;

function fun1() {
    var oopsGlobal = 5;
    
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal" + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun();
fun2();


//Global and Local Functions
var outerwear = "T-shirt";

function myOutfit() {
    
    return outerwear;
}
console.log(myOutfit());
//Assignment with a Returned Value
var changed = 0;
function change(num) {
    return (num + 5) / 3;
}

changed = change(10);

var processed = 0;

function processArg(Num) {
    retunr (num +3) / 5;
}

processed = processArg(7);

//Boolean Values  true or false*/

//Use Conditional Logic with If Statements*/
function ourTrueorFalse(isItTrue) {
    if (isItTrue) {
        return "Yes. if it's true";
    }
    return "No, it's false";
}

function trueorfalse(wasthatTrue) {
    if (wasThattrue) {
        return "Yes, thst ws true"
    }
    return "No, that was false."
    
}

console.log(trueorFalse (true));

//Ese



