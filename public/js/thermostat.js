function Thermostat() {
	this.temperature = 20;
	this.resetDefault = 20;
	this.isPowerSaverOn = true;
	this.minTemperature = 10;
	this.maxTemperature = 32;
	this.maxTemperaturePowerSaver = 25;
};

Thermostat.prototype.increaseTemperature = function() {
	return this.increaseTemperatureBy(1);
};

Thermostat.prototype.increaseTemperatureBy = function(degrees) {
	this.temperature += degrees;
	if(this.isPowerSaverOn && this.temperature > this.maxTemperaturePowerSaver) this.temperature = this.maxTemperaturePowerSaver
	if(!this.isPowerSaveOn && this.temperature > this.maxTemperature) this.temperature = this.maxTemperature
	return this.temperature
};

Thermostat.prototype.decreaseTemperature = function() {
	return this.decreaseTemperatureBy(1);
};

Thermostat.prototype.decreaseTemperatureBy = function(degrees) {
	if(this.temperature - this.minTemperature < degrees){
		return this.temperature = this.minTemperature;
	}
	else return this.temperature -= degrees
};

Thermostat.prototype.reset = function() {
	return this.temperature = this.resetDefault;
};