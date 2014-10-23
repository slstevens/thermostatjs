function ThermostatView(element) {
	this.el = $(element);
	this.thermostat = new Thermostat;
	this.el.text(this.thermostat.temperature);
	this.bindTo('#increase', this.thermostat, this.thermostat.increaseTemperature);
	this.bindTo('#decrease', this.thermostat, this.thermostat.decreaseTemperature);
	this.bindTo('#reset', this.thermostat, this.thermostat.reset);


};

ThermostatView.prototype.bindTo = function(selector, obj, func) {
	$(selector).on('click', function() {
		$('h1').text(func.call(obj));
			if(parseInt($('h1').text()) > 25) {
  	 			$('body').css('background-color', 'red');
  	 			};
			if(parseInt($('h1').text()) < 25) {
  				$('body').css('background-color', 'yellow');
  				};
			if(parseInt($('h1').text()) < 18) {
  				$('body').css('background-color', 'green');
  				};
	});
};


$(document).ready(function() {

	new ThermostatView('h1');
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
