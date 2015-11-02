//The mandatory requirements for this app are as follows:

//You must use the HTML and CSS supplied. Once you’ve completed the project, you
// may choose to alter the layout and styles, but stick with the templates
// supplied initially. Note that the index.html file already links to the CSS
// files, app.js file and jQuery. You should write your JavaScript code in
// app.js. Also, note that there is a small amount of code in app.js - there’s a
// $(document).ready() block with code that handles displaying and hiding the
// instructions for the game.

	//When the page loads, JavaScript should start a new game. Since you’ll need
	// to be able to start a new game when the user clicks the “New Game”
	// button, you’ll want to create a newGame function that does everything
	// necessary to start a new game.

	//When a new game starts, a secret number between 1 and 100 should be
	// generated that the user will have to guess. You should write a named
	// function that takes care of this. You should try to start a new game
	// without refreshing or reloading the page.

	//The user should get feedback about each guess – if it was too low, too
	// high, or just right. This means that you’ll need to write a named
	// function that takes a user guess and determines which feedback to
	// provide.

	//Initially, you shouldn’t worry about telling users if they’re getting
	// “hotter” or “colder” relative to their previous guess. Instead, you can
	// use absolute values. For instance, you might decide that if a user is
	// 50 or further away from the secret number, they are told they are
	// “Ice cold”, if they are between 30 and 50 they are “cold”, if they are
	// between 20 and 30 they are warm, between 10 and 20 hot, and between 1
	// and 10 “very hot”. You can choose what the ranges are and what feedback
	// you provide.

	//Feedback about the guess should appear in div#feedback. By default, when
	// the page loads, the text in this field is set to “Make Your Guess!”

	//The game should track how many guess the user has made. Feedback about this
	// should appear in span#count (which defaults to 0, when the page loads).
	//The game should also supply users with a list of the numbers they have
	// guessed so far. The CSS for this game is set up in such a way that you can
	// simply add each guessed number as an <li> to ul#guessList.

	//You’ll need to ensure that users provide valid inputs. Note that the
	// guess text input field has the HTML 5 required flag set, so you won’t
	// have to worry about blank guesses being submitted (if the user submits
	// a blank guess, they'll be prompted to supply an input). However, you will
	// need to write code that ensures that the user has supplied a numeric
	// input between 1 and 100.

	//The starter template already contains a button in the upper right hand
	// corner for starting a new game, however, this button does not currently
	// do anything. You’ll need to write code that allows users to start a new
	// game without making additional calls to the server. Clicking “New Game”
	// should trigger the JavaScript function that starts a new game.
//document.getElementById("myAnchor").addEventListener("click", function(event){
//	event.preventDefault()
//});


$(document).ready(function(){
	/*--- Initialize --*/
	var secretNumber = startNewGame();
	console.log('secret Number is '+ secretNumber);
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
		alert('what was clicked');

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
		alert('hide info modal box');
  	});

	/*------- listen for #guessButton ---------*/
	$( '#guessButton').click(function() {
		event.preventDefault(); //prevents default reloading
		//alert(this.getAttribute("id"));

		var guess = $('input#userGuess').val();
		//alert('userGuess is ' + guess);

		updateGuessList(guess);
		updateGuessCount();

		$('#feedback').text = provideFeedback(guess, secretNumber); //TODO: not yet appearing in proper field, then resubmit
	});

	/*------- listen for #newGame ---------*/
	$( '#newGame').click(function() {
		startNewGame();
		alert('start new game');
	});

});



function getRandomArbitrary(min, max) {
	var secret = Math.random() * (max - min) + min;
		return Math.round(secret);
	}


function provideFeedback(guess,secretNumber){
	//if it was too low, too high, or just right, determine which feedback to return
	var diff = secretNumber - guess;
	var feedback;

	if (diff > 50) {
		feedback = "Ice Cold!  Try again.";
	} else
	if (diff > 30) {
		feedback = "Cold.  Try again.";
	} else
	if (diff > 20) {
		feedback = "Warmer...  Try again.";
	} else
	if (diff > 10) {
		feedback = "Hot!...  Try again.";
	} else
	if (diff > 0) {
		feedback = "Supah Hot! But not it. :( Try again.";
	} else if (diff == 0)
	{feedback = "You got it!"}
	alert(feedback);
	return feedback;
}

function startNewGame(){
	//when the user clicks the “New Game” button...what must be reset?

	// clear ul#guessList
	$('ul#guessList li').remove();

	//set span#count to 0
	$('span#count').text('0');

	//set div#feedback to default
	$('div#feedback').text('Make Your Guess!?!');

	return getRandomArbitrary(1, 100);
}

function updateGuessCount(){
	//update span#count from default 0
	var count  = 0;
	count++;
	//alert($('span#count').text());
	$('span#count').text(count);
}

function updateGuessList(guess){
	$('ul#guessList').append("<li>" + guess + "</li>");
}

