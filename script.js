"use strict";
// alert("My first line of javascript code ...yay it works!");
// console.log(3+2);
//-----
//"use strict";
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

// function showMessage(from, text) {

//     from = '*' + from + '*'; // make "from" look nicer
  
//     alert( from + ': ' + text );
//   }
  
//   let from = "Ann";
  
//   showMessage(from, "Hello"); // *Ann*: Hello
  
  // the value of "from" is the same, the function modified a local copy
//   alert( from ); // Ann




//SOLO WORK STARTS HERE

//Homework HERE
//-------------
//Create a web-page that asks for a name and outputs it. 

// "use strict";
// let name = prompt("What is your name?");
// console.log(name);
//-------------





// "use strict";
// let year = prompt("In which year was ECMAS...");
// if (year == 2015) {
//     alert ("You are right!"); 
//     alert ("Great Job");
// }
// else(alert ('No did you even study?'));

//-------

// let accessAllowed = Boolean;
// let age = prompt("How old are you?");
// if (age>18){
//     accessAllowed = true;

// }
// else{
//     accessAllowed = false;
// }
// alert(accessAllowed);

//--------

//? used as a replacement for if

// let company = prompt('Which company created JavaScript?');
// (company == 'Netscape') ?
// alert('Right!') : alert('Wrong.');


//?=if
//: = else

//--------


// let result;

// let number = prompt('Enter a Number');

// (number<4) ?
//     alert ('Below') : alert ('Above');

    //-------


    //  REMEMBER THIS!!!!!!!!

//     let message = (login == 'Employee') ? 'Hello' :
//   (login == 'Director') ? 'Greetings' :
//   (login == '') ? 'No login' :
//   '';

  //----------

//   let x;

// false || (x = 1);

// alert(x); // 1




//Switch Statements

// let a = 2 + 3;
//ie switched bestween cases given a start point without the break
// switch (a) {
//   case 3:
//     alert( 'Too small' );
//   //  break;
//   case 4:
//     alert( 'Exactly!' );
//   //  break;
//   case 5:
//     alert( 'Too large' );
//   //  break;
//   default:
//     alert( "I don't know such values" );
// }
//---

// switch (browser) {
//     case 'Edge':
//       alert( "You've got the Edge!" );
//       break;
  
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//       alert( 'Okay we support these browsers too' );
//       break;
  
//     default:
//       alert( 'We hope that this page looks ok!' );
//   }

//   if(browser == 'Edge') {
//     alert("You've got the Edge!");
//   } else if (browser == 'Chrome'
//    || browser == 'Firefox'
//    || browser == 'Safari'
//    || browser == 'Opera') {
//     alert( 'Okay we support these browsers too' );
//   } else {
//     alert( 'We hope that this page looks ok!' );
//   }

// //------

//   let a = "1";
// let b = 0;

// switch (+a) {
//   case b + 1:
//     alert("this runs, because +a is 1, exactly equals b+1");
//     break;

//   default:
//     alert("this doesn't run");
// }
//------


//FUNCTION DECLARATION

// function showMessage(){
//     alert('Sup yo!');
// }

// showMessage();
// showMessage();


//----

// function showMessage(from, text) {

//     from = '*' + from + '*'; // make "from" look nicer
  
//     alert( from + ': ' + text );
//   }
  
//   let from = "Ann";
  
//   showMessage(from, "Hello"); // *Ann*: Hello
  
//   // the value of "from" is the same, the function modified a local copy
//   alert( from ); // Ann
// //----


// let sayHi = function() {
//     alert( "Hello" );
//   };

//-----
// 1/11/20

// let car = {
//     type: "Masseratti",
//     model: "Gibli",
//     color: "Royal Blue",
//     isExpensive: true,
//     price: 75000.00,
//     drive: function( ){
//         console.log("Now driving my " + car.type + " " + car.color + " " + car.model + " is it expensive? " + car.isExpensive + " it's "+ car.price+ ".");

//     }
// }
// // console.log(car.model);
// console.log(car.drive());
// //dot
// car.model = "Toyota";
// console.log(car.model);

// //square
// car["model"] = "Honda";
// console.log(car["model"]);

//-----

class Car {
    constructor(type, color, model, isExpensive, price){
        this.type = type;
        this.color = color;
        this.model = model;
        this.isExpensive = isExpensive;
        this.price = price;

    }
    drive(){
        console.log("Now driving my " + this.type + " " + this.color + " " + this.model + " is it expensive? " + this.isExpensive + " it's "+ this.price+ ".");
    }
}
let benz = new Car("Benz","Blue", "Hi", true, 7272727);
benz.drive();
let bmw = new Car ("BMW");


// Animal Classes create dogs, cat that extend from Animal
// create insanced of each
//have name, can eat different things, and that they make noise
// create in java and javascript

//Study functions
// prototypical inheritance

