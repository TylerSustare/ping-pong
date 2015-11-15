// Tests the value passed in by rules of Ping-Pong
var pingPong = function(iterator) {
  if (iterator% 15 === 0) { 			// explicit check for divisible by 15
    return 'pingpong';
  } else if (iterator% 5 === 0){	// divisible by 5
    return 'pong';
	} else if (iterator% 3 === 0){	// divisible by 3
    return 'ping';
  } else {												// not divisible by 15, 5, or 3
    return iterator;
  }
};

// Checks if user input is not a number (NaN)
var checkInput = function(input){
  if (isNaN(input)){
    alert("I'm sorry that is not a number.\nPlease try again");
  }
}

$(document).ready(function(){
  $("button#play-me").click(function() {
    var userInput = parseInt($("input#txtinput").val());
    checkInput(userInput);
    $(".answers ul").empty()	// clear answers ul before showing answers
    for (var iterator = 1; iterator <= userInput; ++iterator){
      $("ul").append('<li>' + pingPong(iterator) + '</li>');
    }	// end for
  });
});
