// Practice 1

var testOne = "What kind of variable am I?";
// string
var testTwo =256;
// number
var testThree= false;
// boolean
var testFour = 'true';
// string
var testFive = '128';
// string

// Practice 2

var testOne = "hello" + "there";
// hellothere
var testTwo = '100' + 28;
// 10028
var testThree = true + 3;
// 4
var testFour = 'false' + 5;
// false5
var testFive = '128' + 3;
// 1283
var testSix = "" * 9;
// 0
var testSeven = 'zero' - 1;
// NaN
var testEight = 'five'.length;
// 4
var testNine = 'five' [0] + 'ever';
// fever
var testTen = 'a'> 'b';
// false
var testEleven = 'number'.length < 7;
// true
var testTwelve = '12' == 12;
// false
var testThriteen = 'twelve' == 12;
// false
var testFourteen = '14' === 14; 
// false
var testfifteen = 'Hi there' [0] + 'open sesame'[2] +
	 'alohamora'[1] + 'eulalia'[4] + 'harkonnen'[4] +
	 'BATMAN!'[6];
// Hello!

// Practice 3

var string1 = "Hello, ";

var string2 = "my name is ";

var string3 = "Kingsley Pappagiorgio.";

var combinedStrings = string1 + string2 + string3;

console.log(combinedStrings);
// Hello, my name is Kingsley Pappagiorgio.

// Practice 4

var num1 = 8;
var num2 = 52;
var num3 = 60;
var combinedNumbers = num1 + num2 + num3;
console.log(mixedConcatenation);
// mixedConcatenation is not defined 

// Practice 5

var mixedNum1 = 10;
var mixedString1 = "ten";
var mixedNum2 = "10";
var mixedConcatenation = mixedNum1 + mixedNum2 +
	mixedString1;
console.log(mixedConcatenation)
// 1010ten

// Practice 6

var num4 = 5;
var num5 = 0;
if(num4 > 1) {
	console.log("Num4 is greater than 1");
}
else{
	console.log("Num4 is NOT greater than 1");
};
// Num4 is greater than 1

// Practice 7

var num4 = 5;
var num5 = 0;
if(num4 < num5 || num4 === num5) {
	console.log("If statement ran!");
}
else if (num5 === "0" || true) {
	console.log("Else if statement ran")
}
else{
	console.log("Else statement ran")
};
// else if statement will be ran

// Practice 8

var num4 = 5;
var num5 = 0;
if(num4 > num5 && num4 === num5) {
	console.log("if statement ran");
}
else if (num5 === "0" || true) {
	console.log("Else if statement ran");
}
else {
	console.log("Else statement ran");
};
// else if statement ran

// Practice 9

 var string1 = "this is a string";
 for(var i = 0; i < string1.length; i = i + 1) {
 	console.log( i, string1[i]);
 };
 // loops 16 times and 
 // runs each letter in the string name

 // Practice 10

 var string2 = "coding";
 var total = 0;
 for(var i = 0; i < string2.length; i++) {
 	total = total + i;
 };
 console.log(total); 
 // 15


 // Practice 11

 var string3 = "onomatopoeia";
 for(var i = 0; i < string3.length; i++) {
 	if(string3[i] == "o") {
 		console.log(i, string3[i]);
 	};
 }; 
// 0 "o"
// 2 "o"
// 6 "o"
// 8 "o"


 // Practice 12

 var string4 = "You're gonna need a bigger boat.";
 for(var i = 0; i < string4.length; i++) {
 	if(string4[i] == "a" || string4[i] == "e" || string4[i] == "i"
 	|| string4[i] == "o" || string4[i] == "u"){
 		console.log(string4[i]);
 	};
 };
 // o
 // u
 // eo
 // a
 // e(x2)
 // a
 // i
 // e
 // o
 // a


 // Practice 13

 function testStuff(a, b) {
	if(a > 25 && b < 100) {
		console.log( a + " is greater than 25 and " + b + " is less than 100");
	}
	else {
		console.log ( a + " is NOT greater than 25 or " + b + " is NOT less than 100");
	};
 };
 testStuff(10, 101);
 testStuff(26, 99);
 testStuff(100, 25);
 // 10 is NOT greater than 25 or 101 is NOT less than 100
 // 26 is greater than 25 and 99 is less than 100
 // 100 is greater than 25 and 25 is less than 100


 // Practice 14

 function testStuff2(c, d) {
	if(c == 25) {
		return c + " is equal to 25";
	  }
	  else if (d <= 100) {
	  	return d + " is less than or equal to 100";
	  }
	  else {
	  	return " Neither if nor else if statement ran";
	  };
 };
 testStuff2(26, 101); 
 testStuff2(25, 99);
 testStuff2(102, 24);
 // neither if nor else if statement ran
 // 25 is equal to 25
 // 24 is less than or equal to 100



 // Practice 15

function countVowels(someString) {
	var vowels = 0;
	for(var i = 0; i < someString.length; i++) {
		if(someString[i] == "a" || someString[i] == "e" || someString[i] == "i"
		|| someString[i] == "o" || someString[i] == "u");{
			vowels++;
		};
	};
	return vowels;
};

coutVowels("I am the very model of a modern major general");
countVowels("Exeunt pursed by a bear");
countVowels( "o1234567891o");
// 45
// 23
// 12