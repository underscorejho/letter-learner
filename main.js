
var ncorrect = 0;
var highscore = 0;
var currentlevel;

var letterlearner = function () {
	
	if(highscore < localStorage.getItem("highscore"))
		highscore = localStorage.getItem("highscore");

        currentlevel = localStorage.getItem("currentlevel");
        if(!currentlevel)
                currentlevel = 3;

	switch(currentlevel) {
          case 1:
	    practice(); //(level 1)
          case 2:
            level2();
          case 3:
            level3();
          case 4:
            level4();
          case 5:
            level5();
          case 6:
            level6();
          case 7:
            level7();
          default:
            console.log("ERROR: not a level");
	}

	return 0;
	
}

var initialize_lower = function() {
  return String.fromCharCode(Math.floor(Math.random()*26)+97); // random lowercase letter
}
var initialize_upper = function() {
  return String.fromCharCode(Math.floor(Math.random()*26)+65); // random uppercase letter
}
var initialize_symbol = function() {
  return String.fromCharCode(Math.floor(Math.random())); // random symbol //// not sure what ASCIIs to use
}
var initialize_number = function() {
  return String.fromCharCode(Math.floor(Math.random()*10)+48); // random digit 0 - 9
}

var practice = function() { // level 1
	var letter = initialize_lower(); // what letters/symbols
	
	ncorrect = localStorage.getItem("ncorrect");
			
	document.getElementById('letter').innerHTML = letter;
	document.getElementById('ncorrect').innerHTML = ncorrect;
	document.getElementById('highscore').innerHTML = highscore;
	
	if (ncorrect >= 100){
		localStorage.setItem("ncorrect", 0);
		congrats();
	}
	
	$(document).ready(function(){
		$('#keyinput').keyup(function(){
			if (this.value === letter) {
       			 ncorrect++;
       			 document.getElementById('ncorrect').innerHTML = ncorrect;
       			 if(ncorrect > highscore)
				localStorage.setItem("highscore", ncorrect);
			 localStorage.setItem("ncorrect", ncorrect);
       			 document.location.href = "practice.html";
       			}
    			else {
      			 ncorrect = 0;
      			 document.getElementById('ncorrect').innerHTML = ncorrect;
      			 localStorage.setItem("ncorrect", ncorrect);
      			 document.location.href = "practice.html";
      			}
      	});
	});
	
	return ncorrect;
}

var level2 = function() {
	var letter = initialize_lower(); // what letters/symbols
	
        var enoughtime = 1;
        var notenoughtime = function() {
            enoughtime = 0;
        }
        
	ncorrect = localStorage.getItem("ncorrect");
			
	document.getElementById('letter').innerHTML = letter;
	document.getElementById('ncorrect').innerHTML = ncorrect;
	document.getElementById('highscore').innerHTML = highscore;
	
	if (ncorrect >= 100){
		localStorage.setItem("ncorrect", 0);
		congrats();
	}
	
        var timer = setTimeout(notenoughtime, 5000); // how much time

	$(document).ready(function(){
		$('#keyinput').keyup(function(){
			if (this.value === letter && enoughtime) {
       			 ncorrect++;
       			 document.getElementById('ncorrect').innerHTML = ncorrect;
       			 if(ncorrect > highscore)
				localStorage.setItem("highscore", ncorrect);
			 localStorage.setItem("ncorrect", ncorrect);
       			 document.location.href = "practice.html";
       			}
    			else {
      			 ncorrect = 0;
      			 document.getElementById('ncorrect').innerHTML = ncorrect;
      			 localStorage.setItem("ncorrect", ncorrect);
      			 document.location.href = "practice.html";
      			}
      	});
	});
	
	return ncorrect;
}

var level3 = function() {
	var letter = Math.floor(Math.random()*2); // multiple random symbols // what letters/symbols
        switch(letter) {
          case 0:
            letter = initialize_lower();
          case 1:
            letter = initialize_upper();
        }
	
	ncorrect = localStorage.getItem("ncorrect");
			
	document.getElementById('letter').innerHTML = letter;
	document.getElementById('ncorrect').innerHTML = ncorrect;
	document.getElementById('highscore').innerHTML = highscore;
	
	if (ncorrect >= 100){
		localStorage.setItem("ncorrect", 0);
		congrats();
	}
	
	$(document).ready(function(){
		$('#keyinput').keyup(function(){
			if (this.value === letter) {
       			 ncorrect++;
       			 document.getElementById('ncorrect').innerHTML = ncorrect;
       			 if(ncorrect > highscore)
				localStorage.setItem("highscore", ncorrect);
			 localStorage.setItem("ncorrect", ncorrect);
       			 document.location.href = "practice.html";
       			}
    			else {
      			 ncorrect = 0;
      			 document.getElementById('ncorrect').innerHTML = ncorrect;
      			 localStorage.setItem("ncorrect", ncorrect);
      			 document.location.href = "practice.html";
      			}
      	});
	});
	
	return ncorrect;
}

var level4 = function() {
	var letter = Math.floor(Math.random()*2); // multiple random symbols // what letters/symbols
        switch(letter) {
          case 0:
            letter = initialize_lower();
          case 1:
            letter = initialize_upper();
        }

        var enoughtime = 1;
        var notenoughtime = function() {
            enoughtime = 0;
        }
        
	ncorrect = localStorage.getItem("ncorrect");
			
	document.getElementById('letter').innerHTML = letter;
	document.getElementById('ncorrect').innerHTML = ncorrect;
	document.getElementById('highscore').innerHTML = highscore;
	
	if (ncorrect >= 100){
		localStorage.setItem("ncorrect", 0);
		congrats();
	}
	
        var timer = setTimeout(notenoughtime, 4000); // how much time

	$(document).ready(function(){
		$('#keyinput').keyup(function(){
			if (this.value === letter && enoughtime) {
       			 ncorrect++;
       			 document.getElementById('ncorrect').innerHTML = ncorrect;
       			 if(ncorrect > highscore)
				localStorage.setItem("highscore", ncorrect);
			 localStorage.setItem("ncorrect", ncorrect);
       			 document.location.href = "practice.html";
       			}
    			else {
      			 ncorrect = 0;
      			 document.getElementById('ncorrect').innerHTML = ncorrect;
      			 localStorage.setItem("ncorrect", ncorrect);
      			 document.location.href = "practice.html";
      			}
      	});
	});
	
	return ncorrect;
}

var level5 = function() {
	var letter = Math.floor(Math.random()*2); // multiple random symbols // what letters/symbols
        switch(letter) {
          case 0:
            letter = initialize_lower();
          case 1:
            letter = initialize_upper();
        }

        var enoughtime = 1;
        var notenoughtime = function() {
            enoughtime = 0;
        }
        
	ncorrect = localStorage.getItem("ncorrect");
			
	document.getElementById('letter').innerHTML = letter;
	document.getElementById('ncorrect').innerHTML = ncorrect;
	document.getElementById('highscore').innerHTML = highscore;
	
	if (ncorrect >= 100){
		localStorage.setItem("ncorrect", 0);
		congrats();
	}
	
        var timer = setTimeout(notenoughtime, 3000); // how much time

	$(document).ready(function(){
		$('#keyinput').keyup(function(){
			if (this.value === letter && enoughtime) {
       			 ncorrect++;
       			 document.getElementById('ncorrect').innerHTML = ncorrect;
       			 if(ncorrect > highscore)
				localStorage.setItem("highscore", ncorrect);
			 localStorage.setItem("ncorrect", ncorrect);
       			 document.location.href = "practice.html";
       			}
    			else {
      			 ncorrect = 0;
      			 document.getElementById('ncorrect').innerHTML = ncorrect;
      			 localStorage.setItem("ncorrect", ncorrect);
      			 document.location.href = "practice.html";
      			}
      	});
	});
	
	return ncorrect;
}
var level6 = function() {
	var letter = Math.floor(Math.random()*2); // multiple random symbols // what letters/symbols
        switch(letter) {
          case 0:
            letter = initialize_lower();
          case 1:
            letter = initialize_upper();
        }

        var enoughtime = 1;
        var notenoughtime = function() {
            enoughtime = 0;
        }
        
	ncorrect = localStorage.getItem("ncorrect");
			
	document.getElementById('letter').innerHTML = letter;
	document.getElementById('ncorrect').innerHTML = ncorrect;
	document.getElementById('highscore').innerHTML = highscore;
	
	if (ncorrect >= 100){
		localStorage.setItem("ncorrect", 0);
		congrats();
	}
	
        var timer = setTimeout(notenoughtime, 1500); // how much time

	$(document).ready(function(){
		$('#keyinput').keyup(function(){
			if (this.value === letter && enoughtime) {
       			 ncorrect++;
       			 document.getElementById('ncorrect').innerHTML = ncorrect;
       			 if(ncorrect > highscore)
				localStorage.setItem("highscore", ncorrect);
			 localStorage.setItem("ncorrect", ncorrect);
       			 document.location.href = "practice.html";
       			}
    			else {
      			 ncorrect = 0;
      			 document.getElementById('ncorrect').innerHTML = ncorrect;
      			 localStorage.setItem("ncorrect", ncorrect);
      			 document.location.href = "practice.html";
      			}
      	});
	});
	
	return ncorrect;
}
var congrats = function () {
	document.location.href = "congrats.html";
}

