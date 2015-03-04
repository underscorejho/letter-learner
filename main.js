
var ncorrect = 0;
var highscore = 0;

var letterlearner = function () {
	
	if(highscore < localStorage.getItem("highscore"))
		highscore = localStorage.getItem("highscore");
	// add switch for levels
	practice(); //(level 1)
	
	return 0;
	
}

var initialize_lower = function() {
  return String.fromCharCode(Math.floor(Math.random()*26)+97); // random lowercase letter
}
var initialize_upper = function() {
  return String.fromCharCode(Math.floor(Math.random()*26)+65); // random uppercase letter
}
var initialize_symbol = function() {
  return String.fromCharCode(Math.floor(Math.random()); // random symbol //// not sure what ASCIIs to use
}
var initialize_number = function() {
  return String.fromCharCode(Math.floor(Math.random()*10)+48); // random digit 0 - 9
}

var practice = function() {
	var letter = initialize_lower();
	//var ncorrect = 0;
	
	ncorrect = localStorage.getItem("ncorrect");
			
	document.getElementById('letter').innerHTML = letter;
	document.getElementById('prompt').innerHTML = "Let's Go: Type Here!";
	document.getElementById('ncorrect').innerHTML = ncorrect;
	document.getElementById('highscore').innerHTML = highscore;
	
	if (ncorrect >= 100){
		localStorage.setItem("ncorrect", 0);
		congrats();
	}
	
	$(document).ready(function(){
		$('#keyinput').keyup(function(){
			if (document.getElementById('keyinput').value === letter) {
       			 ncorrect++;
       			 document.getElementById('ncorrect').innerHTML = ncorrect;
       			 console.log(ncorrect);
       			 if(ncorrect > highscore)
					 localStorage.setItem("highscore", ncorrect);
				 localStorage.setItem("ncorrect", ncorrect);
       			 document.location.href = "practice.html";
       			}
    		else {
      			 ncorrect = 0;
      			 document.getElementById('ncorrect').innerHTML = ncorrect;
      			 console.log(ncorrect);
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

