
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
    			else {
                         if(!enoughtime)
                           document.getElementById('prompt').innerHTML = "Too Slow!";
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

var congrats = function () {
	document.location.href = "congrats.html";
};

