var q = "Confirm that your Human: What's your star sign?";
var a = 'Gemini';
var c = "<h2></h2>";
var ic = "<h2>ERROR</h2>";
var response = prompt(q,"answer");
if (response != a) 
{ alert("ERROR, WRONG INPUT!"); }
else { alert("Congrats you're Human!"); }
var o = (response == a) ? c : ic;
document.write("<BR/>");
document.write(o);


function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var question7 = document.quiz.question7.value;
    var question8 = document.quiz.question8.value;
    var question9 = document.quiz.question9.value;
    var question10 = document.quiz.question10.text;
    var correct = 0;



	if (question1 == "Brown") {
		correct++;
}
	if (question2 == "Blinks") {
		correct++;
}	
	if (question3 == "Whistle") {
		correct++;
}
    
	if (question4 == "Thailand") {
     correct++;
 }
    if (question5 == "Jisoo") {
     correct++;
 }
    if (question6 == "4") {
     correct++;
 }
   if (question7 == "Rosie") {
     correct++;
 }
   if (question8 == "2016") {
     correct++;
 }
   if (question9 == "New Zealand") {
     correct++;
 }
   if (question10 == "Blackpink in your area") {
     correct++;
}
  
    
	var pictures = ["killthislove.gif", "diamond.gif", "killthislove.gif"];
	var messages = ["Blinktastic!", "Try harder!", "Not bad!"];
	var score;

	if (correct > 3) {
		score == 0;
	}
    
    if (correct > 0 && correct < 3 ) {
        score = 1;
    }

	if (correct == 0 ) {
		score = 1;
	}
     if (correct == 0 ) {
		score = 1;
	}
	

	document.getElementById("after-quizcompleted").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}
	
