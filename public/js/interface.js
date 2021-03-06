function ThermostatView(element) {
	this.el = $(element);
	this.thermostat = new Thermostat;
	this.el.text(this.thermostat.temperature);
	this.bindTo('#increase', this.thermostat, this.thermostat.increaseTemperature, 'h1');
	this.bindTo('#decrease', this.thermostat, this.thermostat.decreaseTemperature, 'h1');
	this.bindTo('#reset', this.thermostat, this.thermostat.reset, 'h1');
	this.bindTo('#powersaveron', this.thermostat, this.thermostat.isPowerSaverOn, '#message');
	this.bindTo('#powersaveroff', this.thermostat, this.thermostat.isPowerSaverOff, '#message');
};

ThermostatView.prototype.bindTo = function(selector, obj, func, target) {
	$(selector).on('click', function() {
		$(target).text(func.call(obj));
		if(parseInt($('h1').text()) > 25) {
	 		$('body').css('background-color', 'red');
	 	};
		if(parseInt($('h1').text()) < 25) {
			$('body').css('background-color', 'yellow');
		};
		if(parseInt($('h1').text()) < 18) {
			$('body').css('background-color', 'green');
		};
		if(selector === '#reset') {
			$('#message').text('The temperature has been reset!');
		};
		if(selector === '#powersaveron') {
			$('#message').text('Power Saver is on!');
		};
		if(selector === '#powersaveroff') {
			$('#message').text('Power Saver is off!');
		};
	});
};

$(document).ready(function() {

	new ThermostatView('h1');

	$.get("http://api.openweathermap.org/data/2.5/find?q=London&units=metric", function(data) { 
		var currentLocation = (data['list'][1]['name']);
		$('#location').text(currentLocation)
	});

	$.get("http://api.openweathermap.org/data/2.5/find?q=London&units=metric", function(data) { 
		var currentWeather = (data['list'][1]['main']['temp']);
		$('#currenttemp').text(currentWeather)
	});

			// $('h1').text(thermostat.temperature)

			// $('#increase').on('click', function() {
			// 	$('h1').text(thermostat.increaseTemperature());
   // 				if(thermostat.temperature > 25) {
  	// 			$('body').css('background-color', 'red');
  	// 			};
			// 	if(thermostat.temperature < 25) {
  	// 			$('body').css('background-color', 'yellow');
  	// 			};
			// 	if(thermostat.temperature < 18) {
  	// 			$('body').css('background-color', 'green');
  	// 			};
			// });
			

			// $('#decrease').on('click', function() {
			// 	$('h1').text(thermostat.decreaseTemperature());
   // 				if(thermostat.temperature > 25) {
  	// 			$('body').css('background-color', 'red');
  	// 			};
			// 	if(thermostat.temperature < 25) {
  	// 			$('body').css('background-color', 'yellow');
  	// 			};
			// 	if(thermostat.temperature < 18) {
  	// 			$('body').css('background-color', 'green');
  	// 			};
			// });

			// $('#reset').on('click', function() {
			// 	thermostat.reset();
			// 	$('h1').text(thermostat.temperature);
			// 	$('#message').text('The temperature has been reset!');
			// });

			// $('#powersaveron').on('click', function() {
			// 	thermostat.isPowerSaverOn = true
			// 	$('#message').text('Power Saver is on!');
			// });

			// $('#powersaveroff').on('click', function() {
			// 	thermostat.isPowerSaverOn = false
			// 	$('#message').text('Power Saver is off!');
			// });


	  //       $('#custom-values').on('submit', function(event) {
	  //         event.preventDefault();
			// 	if ($('#mintemperature').val() !== "") {
			// 	$('#message').text("You've changed your minimum temperature to " + $('#mintemperature').val())
	  //       	thermostat.minTemperature = parseInt($('#mintemperature').val())
	  //       	}
	  //       	if ($('#maxtemperature').val() !== "") {
			// 	$('#message').text("You've changed your maximum temperature to " + $('#maxtemperature').val())
	  //       	thermostat.maxTemperature = parseInt($('#maxtemperature').val())
	  //       	}
	  //       	if ($('#maxtemperatureps').val() !== "") {
			// 	$('#message').text("You've changed your power saver maximum temperature to " + $('#maxtemperatureps').val())
	  //       	thermostat.maxTemperaturePowerSaver = parseInt($('#maxtemperatureps').val())
	  //       	}
	  //       });
});
