$(document).ready(function() {
	var a = new Date(); // Now
	var b = new Date(2016, 3, 20, 0, 0, 0, 0); // end date
	var seconds = Math.round((b - a) / 1000); // seconds

	clock = $('.js-clock').FlipClock({
		clockFace: 'DailyCounter',
		language: 'ru'
	});

	clock.setTime(seconds);
	clock.setCountdown(true);
	clock.start();

});