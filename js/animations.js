$(document).ready(function () {
	//Variables
	var tweetControls = $('#tweet-controls');
	var tweet_compose = $('.tweet-compose');
  var tweet_compose_size = tweet_compose.innerHeight();
  var char_count = $('#char-count');
	//Events
	tweetControls.css('display', 'none');
	tweet_compose.on('click', function () {
		$(this).height(tweet_compose_size*2);
    tweetControls.css('display', 'block');
	});

		var count = 0;

		tweet_compose.keydown( function () {
		var tweet = tweet_compose.val();
		if (tweet) {
			count = tweet.length;
		}
		var leftOver = 140 - count;
    char_count.text(leftOver);
		if (tweet.length === 0) {
			char_count.text('140');
		}
		if (tweet.length >= 130) {
			char_count.css('color', 'red')
		}
		if (tweet.length < 130 ) {
			char_count.css('color', '#999')
		}
		});

		$("#tweet-submit").click(function(){
  	var typing = $(".tweet-compose").val();
  	var theclone = $("#theClone").clone();
  	$("#stream").prepend(theclone);
  	theclone.find(".tweet-text").text(typing);
  	theclone.find(".avatar").attr("src",'img/alagoon.jpg');
  	theclone.find(".fullname").text("Tyler Durden");
		theclone.find('.username').text('@TD-FC')
		})
	//Listeners
});
