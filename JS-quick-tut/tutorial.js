/* Data Types:
undefined, null, boolean, string, symbol, number, and object
*/

//types of variables
var myName = "Annie"; //can be used throughout the project
myName = 123; //can be changed later as well

let ourName = "CodingLamb"; //can only be used in the scope where it is defined, can't be declared twice in the same scope

const pi = 3.1415; //a constant that can never be changed

//more about the const
const s = [1, 2, 3];
function editConst() {
  // s = [4,5,6];   TypeError: Assignment to constant variable.
  s[0] = 4;
  s[1] = 5;
  s[2] = 6;
}
editConst();
// console.log(s); //oh no, mutation happend. [ 4, 5, 6 ]

//how to prevent the object mutation?
function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14,
  };

  Object.freeze(MATH_CONSTANTS); //this will froze the object and can't be changed.

  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    // console.log(ex);//error message
  }
  return MATH_CONSTANTS.PI;
}

const PI = freezeObj();
// console.log(PI); //3.14

/*
js is sensitive to Capitalized and uncapitalized word, 
so it means even the letter is the same,
the variable will be considered diffrent.
Usually we use camal case
*/

var input = "string can also use";
input += ", to achieve this";
// console.log(input); //string can also use, to achieve this

//return length syntax
input.length;

//changing part of string and array
//we can't do
var aStr = "abcde";
aStr[0] = "1";
// console.log(aStr); //abcde

//we can do
var aArray = [1, 2, 3, 4, 5, 6];
aArray[0] = 888;
// console.log(aArray); //[ 888, 2, 3, 4, 5, 6 ]

//multi-dimentional array
var multiArray = [
  [1, 2, 3],
  ["a", "b", "c"],
  [aStr, aArray],
];
// console.log(multiArray[2][1][0]); //will give 888

//push and pop
aArray.push(888); //add to the begining of the array
aArray.pop(); //remove the final element
aArray.shift(); //remove the first element
aArray.unshift(888); //add to the front of the array

//identify scope of variables

var myGlobal = 10; //global variable

function foo1() {
  oopsGlobal = 5; //this is a global variable automatically
  var local = 7; //with the var it is local variable
}

function foo2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += "oopsGlobal: " + oopsGlobal;
  }
  // console.log(output); //myGlobal: 10oopsGlobal: 5
}

foo1();
foo2();

//local can use the same name as global var
var outerwear = "T-shirt";

function myOutfit() {
  var outerwear = "sweater";
  return outerwear;
}

// console.log(myOutfit()); //will return sweater
// console.log(outerwear); //will return t-shirt

/*
for the equal sign
3 == 3  convert it to the same data type and comparee
3 === 3 only true when the type and the value is all the same
same for the ineuqality sign.
*/

// console.log(3=="3"); //true
// console.log(3==="3"); //false

//switch statement
function caseInSwitch(val) {
  var answer = "";
  switch (val) {
    case 1:
      answer = "A";
      break;
    case 2:
      answer = "B";
      break;
    case 3:
      answer = "C";
      break;
    default:
      answer = "coming to default";
  }
  return answer;
}

// console.log(caseInSwitch(1));//"A"

//anotheer switch example
function caseInSwitch(val) {
  var answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
    default:
      answer = "coming to default";
  }
  return answer;
}

// console.log(caseInSwitch(7));//High

var mode = "mode";
// var extension = "extension"

//OBJECTS yay
var myEditor = {
  name: ["VSCode"],
  theme: "Dark Mode",
  mode: {
    extension: ["Power Mode"],
    hello: {
      world: "world",
    },
  },
};

// console.log(myEditor.name);//[ 'VSCode' ]
// console.log(myEditor["theme"]);//Dark Mode

number = "number";
//update object properties
myEditor.name.push("IntelliJ");
// console.log(myEditor.name); //[ 'VSCode', 'IntelliJ' ]
myEditor.number = myEditor.name.length;
if (myEditor.hasOwnProperty("number")) {
  // console.log(myEditor[number]); //2
}

delete myEditor.number;
// console.log(myEditor.number); //undefined

if (myEditor.hasOwnProperty(mode)) {
  // console.log(myEditor.mode["extension"][0]);          //Power mode
}

// console.log(myEditor.mode.hello.world); //world

// while loop
var i = 0;
var myArray = [];
while (i < 5) {
  myArray.push(i);
  i++;
  // console.log(myArray);
  /* log:
    [ 0 ]
    [ 0, 1 ]
    [ 0, 1, 2 ]
    [ 0, 1, 2, 3 ]
    [ 0, 1, 2, 3, 4 ]
    */
}

// for loop
for (var i = 0; i < 8; i += 2) {
  myArray.pop();
  // console.log(myArray);
  /* log
    [ 0, 1, 2, 3 ]
    [ 0, 1, 2 ]
    [ 0, 1 ]
    [ 0 ]
    */
}

//do while loop
i = 1;
do {
  myArray.push(i);
  i++;
  // console.log(myArray);
  /* log:
    [ 0, 1 ]
    [ 0, 1, 2 ]
    [ 0, 1, 2, 3 ]
    [ 0, 1, 2, 3, 4 ]
    */
} while (i < 5);

//do always run, then check with the while condition

strNumber = "1000";
// console.log(parseInt(strNumber,2)); //base 2 so binary, empty so base 10 //8

//condition? statement-if-true : statement-if-false;

function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

// console.log(checkSign(0)); //zero
// console.log(checkSign(1000)); //positive
// console.log(checkSign(-1000)); //negative

//equivalent
/*
var magic = function() {
    return new Data();
}

var magic = () => {
    return new Data();
}
*/

const magic = () => new Data();

//another group
/*
var myConcat = function(arr1, arr2) {
    return arr1.concat(arr2);
};
*/
var myConcat = (arr1, arr2) => arr1.concat(arr2);

// console.log(myConcat([1,2],[3,4,5])); //[1,2,3,4,5]

//another example
const realNumberArray = [];
const squareList = (arr) => {
  const squaredIntegers = arr
    .filter((num) => Number.isInteger(num) && num > 0)
    .map((x) => x ^ 2);
  return squaredIntegers;
};

//another
const increment = (number, value = 1) => {
  return number + value;
};
// console.log(increment(5, 2)); //7
// console.log(increment(5)); //6

//another
const sum = (...args) => {
  //put everything and create a array named args
  return args.reduce((a, b) => a + b, 0); //adds up everything in args
};
// console.log(sum(1, 2, 3, 4)); //10

//another
const arr1 = ["Jan", "Feb", "Mar", "Apr", "May"];
let arr2;
(function () {
  arr3 = arr1;
  arr2 = [...arr1];
  arr1[0] = "potato";
})();
// console.log(arr2);//[ 'Jan', 'Feb', 'Mar', 'Apr', 'May' ]
// console.log(arr3);//[ 'potato', 'Feb', 'Mar', 'Apr', 'May' ]

var voxel = { x: 3.14, y: 2.33, z: 7.77 };
const { x: a, y: b, z: c } = voxel; //a = 3.6 ...

//getting stuff from array
const [w, y, , q] = [1, 2, 3, 4]; //will get 1,ß2,4
// console.log([w, y, q]);

//another example with reduce ...
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
  const [, , ...arr] = list;
  return arr;
}
// console.log(removeFirstTwo(source));
/*
[
  3, 4, 5,  6,
  7, 8, 9, 10
]
*/

//API call might use this, only get what we need to pass in

const neccss = (function () {
  return function half({ name, theme }) {
    name.push(theme);
    return name;
  };
})();

// console.log(neccss(myEditor));//[ 'VSCode', 'IntelliJ', 'Dark Mode' ]
// console.log(myEditor.name);//[ 'VSCode', 'IntelliJ' ]

// single quotation, double quotation, and backticks
var myStr = 'I am a "double quoted" string';

// console.log(myStr);//I am a "double quoted" string

//if use double and single together we don't need \
var newStr = 'hi" \t lala"';
// console.log(newStr);//hi" 	 lala"

//can have new line in it, can also put variable into it
var tryStr = `12 ${myEditor.name}
3`;
console.log(tryStr);
//"12
//3"

/*
CODE OUTPUT
\'      single quote
\"      doubel quote
\\      backslash
\n      newline
\r      carriage return
\t      tab
\b      backspace
\f      form feed
*/
