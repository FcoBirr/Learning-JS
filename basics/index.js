//console.log(`Hello World!`);
//console.log(`I like pizza`);

//window.alert(`this is an alert`);
//window.alert(`I like pizza!`);

//This is how comments are made

/*
    This is 
    a 
    multiline
    comment
*/

/*
document.getElementById("myParagraph").textContent = `Hello there`;

//the 'let' keyword declares a variable. declaration and initialization can happen
//on the same line
let x;
x = 100;

let y = 3*x;

//JS is NOT a strongly typed language, and variables can hold different data types
console.log(`Dollar signs can reference variables like ${x}`);
console.log(typeof(x));
x = `What`;
console.log(typeof(x));

//true and false values are LOWER case
let boolean_var = true;
*/

let my_name = "John Doe";
let age = 26;
let isStudent = false;

var button = document.getElementById("myButton");
button.onclick = function()
{
    document.getElementById("p1").textContent = `My name is ${my_name}`;
    document.getElementById("p2").textContent = `I am ${age} years old`;
    if(isStudent){
        document.getElementById("p3").textContent = `And I am a student`;
    }
    else{
        document.getElementById("p3").textContent = `And I am not a student`;
    }
}

