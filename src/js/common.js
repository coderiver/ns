$(document).ready(function() {
	var a = new Date(); // Now
	var b = new Date(2016, 2, 20, 0, 0, 0, 0); // end date
	var seconds = Math.round((b - a) / 1000); // seconds

	clock = $('.js-clock').FlipClock({
		clockFace: 'DailyCounter',
		language: 'ru'
	});

	clock.setTime(seconds);
	clock.setCountdown(true);
	clock.start();

	// form validation
	(function () {
		var thanks = $('.js-thanks-popup');
		// welcome
		$.validate({
			form: '#form',
			onSuccess: function() {
				post_data = {
					'name': $('#form input[name=name]').val(),
					'tel': $('#form input[name=tel]').val(),
					'email': $('#form input[name=mail]').val()
				};
				// Ajax post data to server
				$.post('send.php', post_data, function(response) {
					if (response.type == 'error') {
						console.log('error');
					}
					else {
						// reset values in all input fields
						thanks.fadeIn('fast');
						$('#form').get(0).reset();
						setTimeout(function() {
							thanks.fadeOut('fast');
						}, 2000);
					}
				}, 'json');
				return false;
			}
		});
	}());

});