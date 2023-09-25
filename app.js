// *****chapter#1 Alert******
// #1
// alert("Lajpat");
// alert("Rai");
// alert("mendhrani.rai@gmail.com");
// alert("password");
// alert("123456789");
// #2
// alert("you're learning Javascript")
// #3
// alert("Hello world....!")


// *******chapter#2 variables for Strings***********
// var firstName=  "Ali";

// var string;
// string= "hello world";
// document.write(string);

// var teamName ="rai_tech";
// alert(teamName);

// var bestMan= "charlie";
// var bestMan ="Edhi sb";
// alert(bestMan);


// ****************chapter#3 variables for numbers***********************
// var caseQty = 144;
// var num = 9;
// var sum= caseQty + num;
// alert(sum);

// var merchTotal = 100;
// var shippingCharge = 10;
// var orderTotal = merchTotal + shippingCharge;
// document.write(orderTotal);

// var num1 = 10;
// var num2= num1+20;
// alert(num2);

// ***************chapter#4 legal and illegal************************
// var podCast= 3.45;

// var nameOfBand;

// var fisrt_weight= 10;

// var fullName= firstName + lastName;

// legal variables
// var firstName;
// var first_name;
// var firstname123;
// var first_Name;
// var firstname;

// illegal variables
// var 123firstname;
// var #firstname;
// var fitst name;
// var firstname.!;
// var first~name;

// *****************Chapter#5 (Math Expression I)******************
// % modulus operator
// var num = 20 % 6;
//  (the value of num will be) num=2;
// var largeNum=2000000;
// var one= 10;
// var two= one - 5;

// var remainder = 20 % 10;
// alert(5*8);

// ****************Chapter 6 (Math Expression II)*************
// x++;
// --x;

// var x = 50;
// var y = x++;
// alert(y);
// the value of y will be y=50; 

// var y = 50;
// var z = --y;
// alert(z);
// the value of z will be z=49; 

// var num = 1; 
// var newNum = --num;

// var num=10;
// var result = ++num;

// var num1= 10;
// var result= ++num1;
// alert(result);

// **********Chapter 7 (Math Expression III)************
// var calculatedNum = 2 + (2 * 6);
// calculatedNum = 14;

// var calculatedNum = (2 + 2) * 6;
// calculatedNum = 24;

// var calculatedNum = (2 + 2) * (4 + 2);
// calculatedNum = 24;

// var calculatedNum = ((2 + 2) * 4) + 2;
// calculatedNum= 18;

// var calculation= (2 + 2) * (4 + 10); 
// calculation = 56;

//  var calculation = (2 + (2 * 4))  + 10;
// calculation = 20;

// var calculation = 4 / (2 * 4);
// calculation = 0.5;

// **********Chapter 8 (Concatenating Text Strings)**********
// var num = "2" + "2";
// num = 22;


// var  message = ("Hello," + "Dolly");
// message = Hello,Dolly;

// alert("33" + 3);
// result = 333

// alert("Pakistan" + " "+ "Zindabad")

// var strNum = "Peace day"+" " + 1945;

// var firstName ="Raja";
// var lastName ="Ji";
// var fullName = firstName +" "+ lastName;

// **********Chapter 9 (Prompts)*******

// var firstName = prompt("Enter first name");

// var userCountry = "china";
// var userCountry = prompt("country?");
// alert(userCountry);

// var userCountry = "Country?";
//  var defaultCoutry = "China";
//  var country = prompt(userCountry, defaultCoutry);
//  alert(country);

// var yourName = prompt("Enter your name");

//  var defaulMessage = "Always be happy";
//  var resultMessage = prompt("have pity on animals", defaulMessage);
//  alert(resultMessage);

// var userName= "James";
// var newName = prompt("user name" , userName);
// alert(newName);

// var firstVar = "Enter your name";
// var secondVar =  "Raja";
// var thirdVar =prompt(firstVar , secondVar);

// var message =  "your message";
// var defaulMessage = "never tell lie";
// var finalMessage = prompt(message , defaulMessage);
// alert(finalMessage);

// ***********Chapter 10 (if statments)************

// var city = "Karachi";
// if (city === "Karachi") {
// console.log("The City OF Lights")};

// var x= 10;
// var y= 10;
// if(x===y){
//     console(z=y);
// }

// var x= 10;************cannot understand***
// var y =10;
// var z= 5;
// if (x === y){

// var zipCode = prompt("Enter Zipcode");
// if(zipCode === "10010"){
//     alert("Karachi");
// }
// else {
//     alert("Enter correct zipcode")
// }
// *********Chapter 11 (Comparison    Operators)*******

// if (ticketNo !== 56854){};

// if (1 >= 1){}

// var a= 10;
// var b=5;
// if(a !==b){}

// if( 5 !==6){
//     alert("Congratulations");
// }

// var firstName = prompt("Enter your first name");
// if ( firstName !== "raja"){
//     alert("No match")
// }

// *******Chapter 12 (if…else and else if   statements)******
// var x= 10;
// var z= 10;
// if (x >= z){
//     alert("Matches found")

// }
// else {
//     alert("no match")
// }

// var mathsMarks =+prompt("enter maths marks");
// var chemistryMarks =+prompt("enter chemistry marks");
// var englishMarks =+prompt("enter english marks");
// var biologyMarks =+prompt("enter biology marks");
// var totalMarks = chemistryMarks+ englishMarks + biologyMarks;
// // alert(totalMarks);
// var percentage = (totalMarks / 400) * 100;
// if (percentage <= 100 && percentage >= 80) {
//   alert("A grade"); 
// } 
// else if (percentage <= 79 && percentage >= 60) {
//     alert("B grade"); 
// }
//  else if (percentage <= 59 && percentage >= 40) {
//     alert("C grade"); 
// }
//  else {
//     alert("Work hard so you can pass the Exam") 
// }

// var a= 5;
// if (a === 10) {
//     alert("a is 10");
//    }
//    else if( a!==10){
//     alert("correct value of a is 10")
//    } 

//    var userCity =prompt("enter city name");
//    if (userCity === "karachi"){
//     alert( "It is Karachi")
//    }
//    else if ( userCity === "lahore"){
//     alert("It is Lahore ")
//    }
//    else{
//     alert("Invalid city name")
//    }

// **********Chapter 13 (Testing sets of conditions)***************

// var a= 5;
// var b= 5;
// var c= 20;
// var d= 20;
// if (a === b && c === d){}


// **remained Q***

// var userName =prompt("enter user name");
// var age = 50;
// if (userName === "hamza" || userName === "bilal" && age < 60){
//     alert("You made it to go")
// }

// var firstNum =10;
// var secondNum =12;
// if ( firstNum > secondNum || firstNum < secondNum){
//     alert (firstNum+ " " + " is less than second num")
// }
// else{
//     alert( firstNum + " " +  "is greater than second num")

// }


// var firstName = prompt ("enter first name");
// var lastName = prompt ("enter last name");
// var fullName = firstName +" "+ lastName;
// if ( firstName === "raja" && lastName === "ji"){
//     alert ( "Welcome" +" "+ fullName)
// }


// **********Chapter 14 (If statements nested)******

// var password =prompt("enter one digit for password") ;
// if (password < 5 ){
//     alert ("password must be greater than 5");
// }
// else if (password > 5 ){
//     alert ("Ok")
// }


// **********Chapter 15 (Array I)**********

// var arr =[];

// var arrStr = ["apple"];

// var alphabet = ["h","i","j","k"];
// alert(alphabet.indexOf('j'));
// indexOf "j" is 2

// var alphabet=["h","i","j","k", “l”,”m”, “n”, “o”]
// length of alphabet is 4;
// if we add total element than length will be 8;

// var fruits = ["apple"];
// fruits[1]= ["mango"];
// // alert(fruits[1]);
// alert(fruits.length);

// ********Chapter 16 (Array II) ********
// var arr =["apple"];
// arr.push("banana");
// alert(arr[1]);

// var Alphabet=["h","i","j","k"];
// Alphabet.pop();

// var Alphabet=["h","i","j","k"];
// Alphabet.push(5);

// ***********Chapter 16 (Array III)******

// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.shift();

// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.unshift(1,2,3);
//
// var  fruits = ["apple"];
// fruits.unshift("mango")

// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.splice(2,0,"L");
// alert(sizes);

// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// var regSizes = sizes.slice(1,3);

// var pets = ["dog", "cat", "ox", "duck", "frog"];
// pets.splice(1,3, "camel", "zebra");

// var pets = ["dog", "cat", "ox", "duck", "frog"];
// pets.splice(1,2);

// var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
// pets.slice(4,5);

// var greet = "hello world";
// for (var a= 1; a<=10;a++){
//     document.write(greet+"<br>");
// }

// var firstName ="raja";
// for (var i = 0;i <= 4 ;i++){
// console.log(firstName)
// };

// for(var a= 0; a<100; a++){};

// for (var a= 3; a>0 ;a--){
//     document.write(x[a]);
// }

// var matchFound ="no";

// var pets = ["dog", "cat", "ox", "duck", "frog"];
// for( var i=0; i<= pets.length; i++){

// }

// var greet = "hello world";

// for( var i= 0; i<10; i++){
//     alert([1] )
// }

// var firstName =prompt("enter first name");
// var userNames = ["raja", "ali", "ahmed", "danish"];
// for(var i=0; i<=4; i++){
//     if(firstName === userNames[i]){
//         alert("enter")
//     }
//     else{
//         alert("enter correct name")
//     }
// }


// var userInput =prompt("enter city name")
// var list = ["karachi", "hyderababd", "lahore"]
// var matchFound = false;
// for (var i = 0; i < list.length; i++) {
//  if (userInput === list[i]) {
//  alert("Match found");
//  matchFound = true;
//  break;
//  }
// }

//  if (matchFound === false) {
//     alert("It's not on the list");
//  };


// var firstArr = ["a","b","c","d","e","f"];
// var secondArr = [1, 2, 3, 4, 5, 6];
// for(var i=0; i < firstArr.length; i++){
//     for(var j= 0; j < secondArr.length; j++){
//         document.write( firstArr[i] +" "+secondArr[j] +"<br>")
//     }
// }
// *************the end****** *************


// *********Chapter 21 (Changing Case)**********

// var userInput = prompt("enter your value");
// var allToLowerCase = userInput.toLowerCase();

// var x = prompt("enter city name ");
// x= x.toLowerCase();
// var cities= ["karachi", "lahore"];
// for(var i=0; i < cities.length; i++){
//     if(x === cities[i]){
//         alert("city found" +" "+ x)
//     }
// }


// var y = prompt("enter city name ");
// y= y.toUpperCase();
// var cities= ["KARACHI", "LAHORE"];
// for(var i=0; i < cities.length; i++){
//     if(y === cities[i]){
//         alert("city found" +" "+ y)
//     }
// }


// var cityName =prompt ("enter city name")
// cityName= cityName.toUpperCase();
// if(cityName === "KARACHI"){
//     alert(cityName)
// }

// var userCity = prompt("enter city name")
// var firstChar = userCity.slice(0, 1);
//  var otherChars = userCity.slice(1);
//  firstChar = firstChar.toUpperCase();
//  otherChars = otherChars.toLowerCase();
//  var userCity = firstChar + otherChars;
//  if( userCity === "Karachi"){
//     alert("wow " + userCity)
//  }


// *******Chapter 22 - 25 (Strings)*************

// var sameWords ="captain";
// (sameWords.slice(1,3))

// var str = "javascript";
// var a =str.length;
// alert(a)


// var animal = "elephant";
// animal.slice(2,6);
// var seg = animal.slice(2,6);


// var text = "To be or not to be.";
// var indx = text.indexOf("be");
// alert(indx);
// // value of indx = 3;

// var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// alert(indx);
// value of indx = 16;


// var text = "let us go.";
// var indx = text.indexOf("go");
// alert(indx);


// var string = "abcde";
// alert(string.charAt(2))

// var text = "it is raining at tharparkar";
// var newTxt= text.charAt(10);
// var cha = "i";

// var str = "javascript";
// var newStr = str.charAt(9);
// alert(newStr);
// var x = newStr;
// alert(x)

// var text = "tharparkar";
// var newTxt= text.charAt(5);
// alert(newTxt)
// var cha = "a";

// var text = "wow ! nice to learn";
// for ( var a= 0; a< text.length ;a++){
// if ( text.charAt(a) === "!") {
//     document.write( "character found!")
// }
// }


// var reply = "no";
// for( var i= 0; i< reply.length; i++){
//     if( reply.slice(i , i + 2) === "no"){
//      var reviseReply = reply.slice(0,i) + "yes" + reply.slice(i+2)   
//     // console.log(reply)
//     }
// console.log(reviseReply);
// }


// var str = "player number 1";
// var newStr = str.replace("1" , "one");
// console.log(newStr);

// ********Chapter 26 (Rounding Numbers)**********

// var num = 2.8254851;
// console.log(Math.round(num));

// var origNum = 2.2545;
// var roundNum = Math.ceil(origNum);
// console.log(roundNum)

// var origNum = 2.2545;
// var roundNum = Math.floor(origNum);
// console.log(roundNum)

// var num = 2.5684;
// var roundNum = Math.round(num);
// console.log(roundNum)

// var num= .5;
// var roundNum =Math.floor(num);
// console.log(roundNum)

// ******Chapter 27 (Random Numbers)******

// var randomNum = Math.random()*50;
// console.log(randomNum);

// var numRd = Math.random();
// var improvedNum = (numRd *6)+ 1;
// var diceNum = Math.floor(improvedNum);
// console.log(diceNum);

// var headUser = prompt("Enter first name");
// var tailUser = prompt("Enter first name");
// var toss = Math.random()*2;
// var floor = Math.floor(toss);
// if ( floor === 0){
//     alert("Heads" + " "+ headUser + " "+"wins the toss" )
// }
// else {
//     alert("Tails"+" " +tailUser +" "+ "wins the toss" )     
// }


// *****Chapter 28, 29 (Converting Strings)*****

// var str = "10";
// console.log(Number(str));

// var str = "123";
// console.log(Number(str));

// var integer = parseInt("1.158712541115");
// console.log(integer);

// var integer = parseFloat("8.12564");
// console.log(integer);

// var number = 20;
// console.log(number.toString());

// var num = 42;
// console.log(num.toString());

// var str = "3.14";
// console.log(parseFloat(str))


// ********Chapter 30 (Controlling the length of  decimals)******

// var num = 1.25487458;
// var roundNum = num.toFixed(4);
// var newNum = roundNum.toString();
// console.log(newNum);


// var num = 2.5987745;
// var roundNum = num.toFixed(2);
// var str = roundNum.toString();
// var str = Number(str);
// console.log(str);

// var num = 20.2545645;
// var roundNum = num.toFixed(2);
// var str = roundNum.toString();
// if(str.length >= 4)
// {
//     alert("More than 4 characters")
// }
// else{
//     alert("Less than 4 character")
// }

// var number = 1.25587565454;
// var roundNum =number.toFixed(2);
// var numToString = roundNum.toString();
// alert("The" + " "+number+" rounded up to"+ roundNum+" "+ "converted to a string"+ " "+ numToString)

// ********Chapter 31 - 34 (Date & Time)******


// var rightNow = new Date();
// var dObj= rightNow;
// console.log(dObj);

// var rightNow = new Date();
// var str = rightNow.toString();
// var dStr = str;
// console.log(dStr);


// var d = new Date();
// var day = d.getDay();
// console.log(day);


// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//  var now = new Date();
//  var theDay = now.getDay();
//  var nameOfToday = dayNames[theDay];
// alert("the day is" + nameOfToday);

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var d = new Date();
// var day = d.getDay();
// var currentDay = dayNames[day];
// alert("Current day is " +" "+currentDay);

// var dateNow = new Date();
// var getDate =dateNow.toDateString();
// var getTime = dateNow.getTime()
// var dateAndTime = "date is" +" "+ getDate+ " "+"time is" + " "+getTime;
// document.write(dateAndTime);

// var d = new Date("December 31, 2020 13:25:00");
// var day = d.getDay();
// console.log(day);

// var d =  new Date("Feburary 02,1992");
// var day = d.getDay();
// console.log(day);


// var d = new Date();
// var millis = d.getMilliseconds();
// var lastMillis = new Date("January 01,1980");
// var totalMs = lastMillis.getMilliseconds();
// var diffMs = lastMillis-millis
// console.log(diffMs);


// var d = new Date();
// var setYear = d.setFullYear(2006);
// console.log(d);

// var d = new Date();
// var setMonth = d.setMonth(0);
// console.log(d);



// var getMints = prompt("enter minutes");
// var d = new Date();
// d.setMinutes(getMints);
// alert(d);


// var d = new Date();
// d.setHours(23);
// alert(d)


// ******age calculator*****

// var dateOfBirth= prompt("enter date of birth", "January 1,1970");
// var milliSet =milliSet.getMilliseconds();
// var today = new Date();
// var todayMili= today.getTime();
// var diff = todayMili - dobmilli;
// var accurate = Math.floor(diff/(1000*60*60*24*30*12));
// document.write(accurate);



// *************Chapter 35 - 37 (Functions)********

// function greet(){
//     alert("hello world");
// }
// greet();

// function askName(){
//     var Name = prompt("enter name");
//     var userName = "userName"+" "+Name ;
//     alert(userName);
// }
// askName();

// function Name(){
//     var userName = prompt("enter name");
//     alert(userName);
// }
// Name();


// function userInput(name1,name2){
// var fullName = name1 + name2;
// return fullName;
// }
// var x=  userInput("Bilal " , "Ahmed");
// alert(x);


// function userInput(m, string, num){
//  alert(m + string + num);
// }
// var month = "Feburary";
// userInput(month, "'s the birthday of mine", 2);

// function add( a, b){
// var addition = a+b;
//     alert(addition)
// }
// add(15,20)

// function multiplication(a,b,c){
//     var multi = a*b*c;
// alert(multi)
// }
// multiplication(10,15,20)


// function add(a,b){
//     var sum = a+b;
// return sum;
// }
// var x= add(15,20);
// alert(x)

// var num1 = +prompt("enter first num");
// var num2 = +prompt("enter second num");
// var num3 = +prompt("enter third num");
// var num4 = +prompt("enter fourth num");
// var total = num1 + num2 + num3 + num4;
// var avg = (total/4);
// alert(avg);


// function arr(){
//     var num1 = +prompt("enter first num");
//     var num2 = +prompt("enter second num");
//     var num3 = +prompt("enter third num");
//     var num4 = +prompt("enter fourth num");
//     var total = num1 + num2 + num3 + num4;
//     var avg = (total/4);
//     return avg;
// }
// var x= arr();
// alert(x);


// function add(){
//     var a= 15;
//     var b= 5;
//     return c = a+b;
// }
// var result = add();
// alert(result);


// var date =  new Date();
// var setYear = date.setFullYear();

// var word = "javascript";
// var worLenght= word.length;
// alert(worLenght)

// var word = prompt("enter word");
// var array = ['zaid','haris','raza','abubakar','hassan','hussain','fatima']
// for( var i=0; i<7; i++){
//     if(word === array[i]){
//         alert("true")
//         break;
//     }
//     else {
//         alert("false")
//     }

// }


// var string = "a,b,c,d,e,f,g,h,i,j";
// string.repeat(10);
// console.log(string);


// var array = ['a','b','c','d','e'];
// array.reverse();
// console.log(array);



// **********Chapter 38 (Local vs. Global Variables)***********

// function addition(){
//     var a= 15;
// }



// ******Chapter 39, 40 (Switch Statements)*******

// var dayOfWeek = prompt("enter the day");
// switch(dayOfWeek) {
//  case "sunday" :
//  alert("7th day of the week");
//  break;
//  case "monday" :
//  alert("1st day of the week");
//  break;
//  case "tuesday" :
//  alert("second day of the week");
// break;
// case "wednesday" :
//     alert("third day of the week");
//    break;
//    case "thursday" :
//     alert("fourth  day of the week");
//    break;
//    case "friday" :
//     alert("fifth day of the week");
//    break;
//    case "saturday" :
//     alert("sixth day of the week");
//    break;
//      default :
//  alert("enter the correct day!");
//     }


// var userCity = prompt("enter a city name");
// switch (userCity) {
//     case "karachi":
//         alert(" The city of light")
//         break;
//     case "lahore":
//         alert("Nice city of Pakistan")
//         break;
//     case "islamabad":
//         alert(" The capital city of Pakistan")
//         break;

//     default:
//         alert("please enter correct city name");
//         break;
// }


// ********Chapter # 41,42 (while loop and do while) *************

// var i = 0;
//  while (i <= 1) {
//  alert(i);
//  i++;
//  }

//  var i = 0;
//  do {
//  alert(i);
//  i++;
//  } while (i <= 1);

// var animal = "pig";
// var animals = ["horse","pig" ,"fox", "ox"]
// var i = 0;
// while( i<=3){
//     if( animal === animals[i]){
//         alert("animal found")
//     }
//    i++
// }

// var animal = "pig";
// var animals = ["horse","pig" ,"fox", "ox"]
// var i = 0;
// do{
//     if(animal === animals[i]){
//         alert("found it")
//     }
//     i++;
// }
// while(i<=4);

// var i = 1;
//  while (i <= 10) {
//  document.write(i +"<br>" );
//  i++;
//  }



// var i = 1;
// do {
//  document.write(i +"<br>" );
//  i++;
//  } while ( i <= 10);


// var userNumber = prompt("enter number");
// var i = 0;
// while(i<=10){
//     alert( userNumber);
//     i++;
//     break;
// }



// var userNumber = prompt("enter number");
// var i = 0;
// do{
//     alert(userNumber);
// i++;
// break;
// }
// while(i <= 10);

// var number  = prompt("enter a number");
// var i =0;
// while(i<= 10){
//     if (number %2===0){
//         alert("even number")
//     }
//     else{
//         alert("odd number")
//     }
//     i++;
//     break;


// }

// var number  = prompt("enter a number");
// var i =0;
// do{
//     if( number %2===0){
//         alert("even number")
//     }
//     else{
//         alert("odd number")
//     }
//     i++;
//     break;
// }
// while(i<= 10);

// ***********chapter #46 to 48 *******

