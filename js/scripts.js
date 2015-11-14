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

var checkInput = function(input){
	if (isNaN(input)){
		alert("I'm sorry that is not a number.\nPlease try again");
	}
}

$(document).ready(function(){
	$("button#play-me").click(function() {
		var userInput = parseInt($("input#txtinput").val());
		checkInput(userInput);
		$(".answers ul").empty()	// clear answers ul of items every time before showing answers

		for (var i = 1; i <= userInput; ++i){ // traditional loop local var 'i'
				$("ul").append('<li>' + pingPong(i) + '</li>');
		}	// end for
  });
});
