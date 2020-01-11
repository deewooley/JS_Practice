// alert("My first line of javascript code ...yay it works!");
// console.log(3+2);
//-----
// "use strict";
// let message = "hello world";
// message = "Wakanda";
// console.log(message);
//-----
// "use strict";
// let message = "hello world";
// message = "Wakanda";
// //or
// message = 25;
// console.log(message);

// //constant in js and final java are essentially the same ie unchangeable
// const DOB = "03/26/1998"

// let x = 1;
// let y = 1.0;

// ${} sim with java %s
//`` tilda button like \n
//-----
// let name = "wacka flocka";
// let phrase = `The artist is named ${name}`;
// console.log(phrase);
//---

// let isItRainning = false;
// let isItNotRainning = false;
// let isLarger = 4 < 1;
// console.log(isLarger);
// console.log(!isItNotRainning);
//-----
//"use strict"
// let name;
// name = "mike"
// console.log(name);
//--

//the typeof in js is like instance of in java
//symbol is a unique identifier

//----
//String Conversion
// "use strict"
// let value = true;
// console.log("the vaue of value is a boolean", typeof value);
// console.log(value);


//value = String(value);
//----

// "use strict";
// let age = '21';
// let result = Number(age);
// console.log(typeof result);

//---
//Boolean like a wrapper class
//understand unary,buanry operands

// "use strict";
// let age  = 21;
// let result = "1"+21;
// console.log(typeof result);
// console.log(result)

//-----
//modulous %

// "use strict";
// console.log(20 % 7);

//------


// "use strict";
// //older code does it this way
// console.log(Math.pow(2,3));
// // newer code uses this approach
// console.log(2 **3);

//-----
//  let a = 1, b = 1;
//  let c = ++a;
//  let d = b++;
//----

//understand string comparison!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//-----

// console.log("6"==6);
// //^check that values are same not type outputs true
// console.log("6"===6)
//checks type too 

//----

// "use strict";
// let age = prompt("how old you be son?");
// console.log(`Now you are 1 year older so you are ${Number(age)+1} old,son `);

//-----
// "use strict";
// let isBoss = confirm("Are you da boss?");
// alert(isBoss);
//-----

"use strict";
let accessAllowed;
let age = prompt("How old are you",'');

if (age >18){
    accessAllowed = true;
}
else {
    accessAllowed = false;
}
alert(accessAllowed);
}

//JS Findamentals and Objects: the basics

11-16