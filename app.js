//chapter 26-30
//q1

var number = +prompt("Enter a positive integer: ")
document.write("<h1>Q1</H1>")
document.write("Number: ", number);
document.write("<br>Rounded value: ", Math.round(number));
document.write("<br>Floor value: ", Math.floor(number));
document.write("<br>Ceil value: ", Math.ceil(number));

//q2
var num = parseFloat(prompt("Enter a negative floating point number: "));
document.write("<br><h1>Q2</H1>")
document.write("Number: ", num);
document.write("<br>Rounded value: ", Math.round(num));
document.write("<br>Floor value: ", Math.floor(num));
document.write("<br>Ceil value: ", Math.ceil(num));

//q3
var num1=+prompt("Enter a value")
document.write("<br><h1>Q3</H1>")
document.write("The absolute value of ",num1," is ", Math.abs(num1));

//q4
var diceValue = Math.floor(Math.random() * 6) + 1;
document.write("<br><h1>Q4</H1>")
document.write("Random dice value: ",diceValue)

//q5
document.write("<br><h1>Q5</H1>")
var toss = Math.random() * 2 ;
var convert = Math.floor(toss);

if(convert === 0){
  document.write(convert, "<br>Random coin value: head");
} else {
    document.write(convert,"<br>Random coin value: Tail");
}

//q6
document.write("<br><h1>Q6</H1>")
var ran =Math.floor( Math.random()*100);
document.write("Random number between 1 and 100: ",ran)

//q7
document.write("<br><h1>Q7</H1>")
var weight = +prompt("Enter your weight")
var math = Math.ceil(weight)
document.write("Your weight is: ",math," kg")
//q8

var secretNumber = Math.floor(Math.random() * 10) + 1;
var userInput = +prompt("Guess the secret number between 1 and 10:");
if(userInput === secretNumber){
    alert("Congratulation! You guessed the secret number.");
}
else{ alert("Sorry, the secret number was " + secretNumber + ". Try again!");}

//home pdf of ch 26-30
//ch 26
document.write("<br><h1>Chapter 26</H1>")

//q1
var number1 = 5.7;
var roundedNumber = Math.round(number1);
document.write("<br><h1>Q1</H1>")
document.write("The rounded number is: " + roundedNumber);

//q2
document.write("<br><h1>Q2</H1>")
var origNum = 5.9; 
var roundNum = Math.ceil(origNum);
document.write("The rounded up number is: " + roundNum);

//q3
document.write("<br><h1>Q3</H1>")
var origNum1 = 3.7;
var roundNum1 = Math.floor(origNum1);
document.write("The rounded down number is: " + roundNum1);

//q4
document.write("<br><h1>Q4</H1>")
var origNum2 = 5.7;
var roundNum2 = Math.round(origNum2);
document.write("The rounded number is: " + roundNum2);

//q5
document.write("<br><h1>Q5</H1>")
var roundNum3 = Math.round(.5);
document.write("The rounded number is: " + roundNum3);

//ch 27
document.write("<br><h1>Chapter 27</H1>")
//q1
document.write("<h1>Q1</H1>")
var read = Math.floor((Math.random() * 50))
document.write("The random number is: " + read);

//q2
document.write("<h1>Q2</H1>")
var randomNumber4 = Math.random();
document.write("Random number: " + randomNumber4);

//q3
document.write("<h1>Q3</H1>")
var diceValue1 = Math.floor(Math.random() * 6) ;
document.write("Dice value: " + diceValue1);

//q4
document.write("<br><h1>Q4</H1>")
var toss = Math.random() * 2 ;
var convert = Math.floor(toss);

if(convert === 0){
  document.write(convert, "<br>Random coin value: head");
} else {
    document.write(convert,"<br>Random coin value: Tail");
}



//ch 28 - 29
document.write("<br><h1>Ch 28 -29</H1>")
//q1
document.write("<br><h1>Q1</H1>")
var str = "123";
var num5 = parseInt(str);
document.write(num5); // Output: 123

//Q2
var h = 14
document.write("<br><h1>Q2</H1>")
document.write( h.toString())

//q3
var str = "2.718";
document.write("<br><h1>Q3</H1>")
var floatValue = +str;
document.write(floatValue); 

//q4
var number = 10;
document.write("<br><h1>Q4</H1>")
console.log(typeof number.toString());

//q5
var h = 14
document.write("<br><h1>Q5</H1>")
document.write( h.toString())

//q6
var num7 = 42;
document.write("<br><h1>Q6</H1>")
var str = num7.toString();
document.write(str)

//q7
var decimalString = "3.14";
document.write("<br><h1>Q7</H1>")
var integerValue = +decimalString;
document.write(integerValue); 

//ch 30
document.write("<br><h1>ch 30</H1>")
//q1
document.write("<br><h1>Q1</H1>")
var num = 3.14159265359; 
var newNum = num.toFixed(4).toString();

//q2
document.write("<br><h1>Q2</H1>")
number = +(number.toFixed(2));

//q4

var originalNumber = 123.456789;
document.write("<br><h1>Q4</H1>")
document.write(originalNumber.toFixed(2).toString());



