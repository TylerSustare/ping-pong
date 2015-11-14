$(document).ready(function(){
	$("button#play-me").click(function() {
		var userInput = parseInt($("input#txtinput").val());
		//var maxNum = Number(userInput);

		$(".answers ul").empty()	// clear answers ul of items every time before showing answers

		for (var i = 1; i <= userInput; ++i){ // traditional loop variable 'i'
			if (i%15 === 0){ // explicit if divisible by 15
				$("ul").append('<li>' + 'pingpong' + '</li>');
			}
			else if (i%5 === 0){ // if divisible by 5
				$("ul").append('<li>' + 'pong' + '</li>');
			}
			else if (i%3 === 0){ // if divisible by 3
				$("ul").append('<li>' + 'ping' + '</li>');
			}
			else { // if i is not divisible by 15, 5 or 3
				$("ul").append('<li>' + i + '</li>');
			}
		}	// end for
  });
});
