
var ncorrect = 0;
var highscore = 0;
var currentlevel;
var levelup = 0;

var letterlearner = function () {
        
	if(highscore < localStorage.getItem("highscore"))
		highscore = +localStorage.getItem("highscore");

        currentlevel = +localStorage.getItem("currentlevel");
        if(!currentlevel)
                currentlevel = 1;

	switch(currentlevel) {
          case 1:
	    practice(); //(level 1)
            break;
          case 2:
            level2();
            break;
          case 3:
            level3();
            break;
          case 4:
            level4();
            break;
          case 5:
            level5();
            break;
          case 6:
            level6();
            break;
          case 7:
            level7();
            break;
          case 8:
            level8();
            break;
          case 9:
            level9();
            break;
          case 10:
            level10();
            break;
          case 11:
            level11();
            break;
          case 12:
            level12();
            break;
          case 13:
            level13();
            break;
          case 14:
            level14();
            break;
          case 15:
            level15();
            break;
          case 16:
            level16();
            break;
          case 17:
            level17();
            break;
          case 18:
            localStorage.setItem("currentlevel", 1);
            document.location.href = "practice.html";
          default:
            console.log("ERROR: not a level");
	}

	return 0;
	
};

var initialize_lower = function() {
  return String.fromCharCode(Math.floor(Math.random()*26)+97); // random lowercase letter
};
var initialize_upper = function() {
  return String.fromCharCode(Math.floor(Math.random()*26)+65); // random uppercase letter
};
var initialize_symbol1 = function() {
  return String.fromCharCode(Math.floor(Math.random()*7)+58); // random symbol : ; , = > ? @
};
var initialize_symbol2 = function() {
  return String.fromCharCode(Math.floor(Math.random()*15)+33); // random symbol ! " # $ % & ' ( ) * + , - . /
};
var initialize_number = function() {
  return String.fromCharCode(Math.floor(Math.random()*10)+48); // random digit 0 - 9
};
var initialize_phrase = function() {
  var phrase = Math.floor(Math.random()*20);
  switch(phrase) {//  //------// lengths allowed
    case 0:
      phrase = "You and I";
      break;
    case 1:
      phrase = "Xavier and You";
      break;
    case 2:
      phrase = "Elephant Poo";
      break;
    case 3:
      phrase = "Orange Grapes";
      break;
    case 4:
      phrase = "no orangutans";
      break;
    case 5:
      phrase = "Batman art";
      break;
    case 6:
      phrase = "Aqua Man Farts";
      break;
    case 7:
      phrase = "Dog water";
      break;
    case 8:
      phrase = "not so cool cats";
      break;
    case 9:
      phrase = "Hot tea for me";
      break;
    case 10:
      phrase = "CAT HAIRBALLS";
      break;
    case 11:
      phrase = "MATH IS FUN";
      break;
    case 12:
      phrase = "UsE sHiFt";
      break;
    case 13:
      phrase = "flying fish";
      break;
    case 14:
      phrase = "number 9";
      break;
    case 15:
      phrase = "nine numbers";
      break;
    case 16:
      phrase = "8 OCTAVES";
      break;
    case 17:
      phrase = "artistic airplanes";
      break;
    case 18:
      phrase = "Capital Capitol";
      break;
    case 19:
      phrase = "Zooey Zubats";
      break;
  }
  return phrase;
};
var initialize_sentence = function() {
  var sentence = Math.floor(Math.random()*20);
  switch(sentence) {//_____________//----------//
    case 0:
      sentence = "NO, THIS IS PATRICK!";
      break;
    case 1:
      sentence = "Pikachu, I choose YOU!";
      break;
    case 2:
      sentence = "My favorite food is pizza.";
      break;
    case 3:
      sentence = "8 people know I have 3 toes!";
      break;
    case 4:
      sentence = "How many ants have you eaten?";
      break;
    case 5:
      sentence = "(I'm whispering!)";
      break;
    case 6:
      sentence = "I like strawberry ice cream...";
      break;
    case 7:
      sentence = "One day, I'll draw cacti, you?";
      break;
    case 8:
      sentence = "Check Yes or No... please?";
      break;
    case 9:
      sentence = "Blue is not my favorite color.";
      break;
    case 10:
      sentence = "I swing on sweet swings sometimes!";
      break;
    case 11:
      sentence = "How are you today?";
      break;
    case 12:
      sentence = "I am afraid of spiders.";
      break;
    case 13:
      sentence = "Babies grow on Puerto Rican trees.";
      break;
    case 14:
      sentence = "Mom, where do babies come from?";
      break;
    case 15:
      sentence = "I have 4 homeworks tonight.";
      break;
    case 16:
      sentence = "Aren't Artists Awesome?";
      break;
    case 17:
      sentence = ":) :( :/ :P";
      break;
    case 18:
      sentence = ":D :O :') O_O";
      break;
    case 19:
      sentence = "UP down < Left Right >";
      break;
  }
  return sentence;
};

function pause(ms) { // buggy and weird, but I like it better than setTimeout()
ms += new Date().getTime();
while (new Date() < ms){}
} 

var new_level = function(level) {
        if(levelup === 26)
        {
          currentlevel = level;
          levelup = 0;
          localStorage.setItem("levelup", levelup);
          localStorage.setItem("currentlevel", currentlevel);
          document.location.href = "levelselect.html";
        }
};

var untimed_level = function(letter) { 	
	ncorrect = +localStorage.getItem("ncorrect");
        levelup = +localStorage.getItem("levelup");
	
        new_level(currentlevel + 1);
        document.getElementById('ribbon-content').innerHTML = "Level " + currentlevel;

	document.getElementById('letter').innerHTML = letter;
	document.getElementById('ncorrect').innerHTML = ncorrect;
	document.getElementById('highscore').innerHTML = highscore;
	
	$(document).ready(function(){
		$('#keyinput').keyup(function(){
			if (this.value === letter) {
       			 ncorrect++;
                         levelup++;
       			 document.getElementById('ncorrect').innerHTML = ncorrect;
       			 if(ncorrect > highscore)
				localStorage.setItem("highscore", ncorrect);
			 localStorage.setItem("ncorrect", ncorrect);
                         localStorage.setItem("levelup", levelup);
       			 document.location.href = "practice.html";
       			}
    			else {
      			 ncorrect = 0;
                         levelup = 0;
      			 document.getElementById('ncorrect').innerHTML = ncorrect;
      			 localStorage.setItem("ncorrect", ncorrect);
                         localStorage.setItem("levelup", levelup);
      			 document.location.href = "practice.html";
      			}
        	});
	});
	
	return ncorrect;
};

var timed_level = function(letter, time) { 
        var enoughtime = 1;
        var notenoughtime = function() {
            enoughtime = 0;
        };
        
	ncorrect = +localStorage.getItem("ncorrect");
        levelup = +localStorage.getItem("levelup");

        new_level(currentlevel + 1);
        document.getElementById('ribbon-content').innerHTML = "Level " + currentlevel;
			
	document.getElementById('letter').innerHTML = letter;
	document.getElementById('ncorrect').innerHTML = ncorrect;
	document.getElementById('highscore').innerHTML = highscore;
	
        var timer = setTimeout(notenoughtime, time); // how much time

	$(document).ready(function(){
		$('#keyinput').keyup(function(){
			if (this.value === letter && enoughtime) {
       			 ncorrect++;
                         levelup++;
       			 document.getElementById('ncorrect').innerHTML = ncorrect;
       			 if(ncorrect > highscore)
				localStorage.setItem("highscore", ncorrect);
			 localStorage.setItem("ncorrect", ncorrect);
                         localStorage.setItem("levelup", levelup);
       			 document.location.href = "practice.html";
       			}
    			else if(!enoughtime){
                         document.getElementById('prompt').innerHTML = "Too Slow!";
                         pause(500);
      			 ncorrect = 0;
                         levelup = 0;
      			 document.getElementById('ncorrect').innerHTML = ncorrect;
      			 localStorage.setItem("ncorrect", ncorrect);
                         localStorage.setItem("levelup", levelup);
      			 document.location.href = "practice.html";
      			}
        	});
	});
	
	return ncorrect;
};

var practice = function() { // level 1
    var letter = initialize_lower(); // what letters/symbols
    untimed_level(letter);
};

var level2 = function() { // lowercase, timed
    var letter = initialize_lower(); // what letters/symbols
    timed_level(letter, 5000);
};

var level3 = function() { // lower and upper case
    var letter = Math.floor(Math.random()*2); // multiple random symbols // what letters/symbols
        switch(letter) {
          case 0:
            letter = initialize_lower();
            break;
          case 1:
            letter = initialize_upper();
            break;
        }
    untimed_level(letter);
};

var level4 = function() { // lower and upper case timed
	var letter = Math.floor(Math.random()*2); // multiple random symbols // what letters/symbols
        switch(letter) {
          case 0:
            letter = initialize_lower();
            break;
          case 1:
            letter = initialize_upper();
            break;
        }
    timed_level(letter, 4000);
};

var level5 = function() { // faster previous level
	var letter = Math.floor(Math.random()*2); // multiple random symbols // what letters/symbols
        switch(letter) {
          case 0:
            letter = initialize_lower();
            break;
          case 1:
            letter = initialize_upper();
            break;
        }
    timed_level(letter, 5000);
};

var level6 = function() { // faster previous level
	var letter = Math.floor(Math.random()*2); // multiple random symbols // what letters/symbols
        switch(letter) {
          case 0:
            letter = initialize_lower();
            break;
          case 1:
            letter = initialize_upper();
            break;
        }
    timed_level(letter, 1500);
};

var level7 = function() { // symbols 1
	var letter = initialize_symbol1(); // what letters/symbols
	untimed_level(letter);
};

var level8 = function() { // symbols 2
	var letter = initialize_symbol2(); // what letters/symbols
        untimed_level(letter);
};

var level9 = function() { // letters + all symbols
	var letter = Math.floor(Math.random()*4); // multiple random symbols // what letters/symbols
        switch(letter) {
          case 0:
            letter = initialize_lower();
            break;
          case 1:
            letter = initialize_upper();
            break;
          case 2:
            letter = initialize_symbol1();
            break;
          case 3:
            letter = initialize_symbol2();
            break;
        }
    untimed_level(letter);
};

var level10 = function() { // letters + all symbols, timed
	var letter = Math.floor(Math.random()*4); // multiple random symbols // what letters/symbols
        switch(letter) {
          case 0:
            letter = initialize_lower();
            break;
          case 1:
            letter = initialize_upper();
            break;
          case 2:
            letter = initialize_symbol1();
            break;
          case 3:
            letter = initialize_symbol2();
            break;
        }
    timed_level(letter, 2000);
};

var level11 = function() { // letters + all symbols, timed
	var letter = Math.floor(Math.random()*4); // multiple random symbols // what letters/symbols
        switch(letter) {
          case 0:
            letter = initialize_lower();
            break;
          case 1:
            letter = initialize_upper();
            break;
          case 2:
            letter = initialize_symbol1();
            break;
          case 3:
            letter = initialize_symbol2();
            break;
        }
    timed_level(letter, 1500);
};

var level12 = function() { // letters + all symbols + numbers
	var letter = Math.floor(Math.random()*5); // multiple random symbols // what letters/symbols
        switch(letter) {
          case 0:
            letter = initialize_lower();
            break;
          case 1:
            letter = initialize_upper();
            break;
          case 2:
            letter = initialize_symbol1();
            break;
          case 3:
            letter = initialize_symbol2();
            break;
          case 4:
            letter = initialize_number();
            break;
        }
    untimed_level(letter);
};

var level13 = function() { // letters + all symbols + numbers, timed
	var letter = Math.floor(Math.random()*5); // multiple random symbols // what letters/symbols
        switch(letter) {
          case 0:
            letter = initialize_lower();
            break;
          case 1:
            letter = initialize_upper();
            break;
          case 2:
            letter = initialize_symbol1();
            break;
          case 3:
            letter = initialize_symbol2();
            break;
          case 4:
            letter = initialize_number();
            break;
        }
    timed_level(letter, 2000);	
};

var level14 = function() { // letters + all symbols + numbers, timed
	var letter = Math.floor(Math.random()*5); // multiple random symbols // what letters/symbols
        switch(letter) {
          case 0:
            letter = initialize_lower();
            break;
          case 1:
            letter = initialize_upper();
            break;
          case 2:
            letter = initialize_symbol1();
            break;
          case 3:
            letter = initialize_symbol2();
            break;
          case 4:
            letter = initialize_number();
            break;
        }
    timed_level(letter, 1500);	
};

var level15 = function() { // letters + all symbols + numbers, timed
	var letter = Math.floor(Math.random()*5); // multiple random symbols // what letters/symbols
        switch(letter) {
          case 0:
            letter = initialize_lower();
            break;
          case 1:
            letter = initialize_upper();
            break;
          case 2:
            letter = initialize_symbol1();
            break;
          case 3:
            letter = initialize_symbol2();
            break;
          case 4:
            letter = initialize_number();
            break;
        }
    timed_level(letter, 1000);	
};

var level16 = function() {
  letter = initialize_phrase();
  timed_level(letter, 3500);
};

var level17 = function() {
  letter = initialize_sentence();
  timed_level(letter, 5000);
};

var congrats = function () {
	document.location.href = "congrats.html";
};

