function Thermostat() {
	this.temperature = 20;
	this.isPowerSaverOn = true;
	this.minimumTemperature = 10;
};

Thermostat.prototype.increaseTemperature = function() {
	this.increaseTemperatureBy(1);
};

Thermostat.prototype.increaseTemperatureBy = function(degrees) {
	this.temperature += degrees;
	if(this.isPowerSaverOn && this.temperature > 25) this.temperature = 25
	if(!this.isPowerSaveOn && this.temperature > 32) this.temperature = 32
};

Thermostat.prototype.decreaseTemperature = function() {
	this.decreaseTemperatureBy(1);
};

Thermostat.prototype.decreaseTemperatureBy = function(degrees) {
	if(this.temperature - this.minimumTemperature < degrees){
		this.temperature = this.minimumTemperature;
	}
	else this.temperature -= degrees
};

Thermostat.prototype.reset = function() {
	this.temperature = 20
};