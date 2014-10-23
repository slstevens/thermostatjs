$(document).ready(function() {

			var thermostat = new Thermostat;

			$('h1').text(thermostat.temperature)

			$('#increase').on('click', function() {
				$('h1').text(thermostat.increaseTemperature());
   				if(thermostat.temperature > 25) {
  				$('body').css('background-color', 'red');
  				};
				if(thermostat.temperature < 25) {
  				$('body').css('background-color', 'yellow');
  				};
				if(thermostat.temperature < 18) {
  				$('body').css('background-color', 'green');
  				};
			});
			

			$('#decrease').on('click', function() {
				$('h1').text(thermostat.decreaseTemperature());
   				if(thermostat.temperature > 25) {
  				$('body').css('background-color', 'red');
  				};
				if(thermostat.temperature < 25) {
  				$('body').css('background-color', 'yellow');
  				};
				if(thermostat.temperature < 18) {
  				$('body').css('background-color', 'green');
  				};
			});

			$('#reset').on('click', function() {
				thermostat.reset();
			});

			$('#reset').on('click', function() {
				thermostat.reset();
				$('h1').text(thermostat.temperature);
				$('#message').text('The temperature has been reset!');
			});

			$('#powersaveron').on('click', function() {
				thermostat.isPowerSaverOn = true
				$('#message').text('Power Saver is on!');
			});

			$('#powersaveroff').on('click', function() {
				thermostat.isPowerSaverOn = false
				$('#message').text('Power Saver is off!');
			});


	        $('#custom-values').on('submit', function(event) {
	          event.preventDefault();
				if ($('#mintemperature').val() !== "") {
				$('#message').text("You've changed your minimum temperature to " + $('#mintemperature').val())
	        	thermostat.minTemperature = parseInt($('#mintemperature').val())
	        	}
	        	if ($('#maxtemperature').val() !== "") {
				$('#message').text("You've changed your maximum temperature to " + $('#maxtemperature').val())
	        	thermostat.maxTemperature = parseInt($('#maxtemperature').val())
	        	}
	        	if ($('#maxtemperatureps').val() !== "") {
				$('#message').text("You've changed your power saver maximum temperature to " + $('#maxtemperatureps').val())
	        	thermostat.maxTemperaturePowerSaver = parseInt($('#maxtemperatureps').val())
	        	}
	        });
});
