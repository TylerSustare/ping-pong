var pingPong = function(i) {
	if (i % 15 === 0) {
		return 'pingpong';
	}
	else if (i % 5 === 0){
		return 'pong';
	}
	else if (i % 3 === 0){
		return 'ping';
	}
	else {
		return i;
	}
};

$(document).ready(function(){
	$("button#play-me").click(function() {
		var userInput = parseInt($("input#txtinput").val());
		$(".answers ul").empty()	// clear answers ul of items every time before showing answers

		for (var i = 1; i <= userInput; ++i){ // traditional loop variable 'i'
				$("ul").append('<li>' + pingPong(i) + '</li>');
		}	// end for
  });
});
