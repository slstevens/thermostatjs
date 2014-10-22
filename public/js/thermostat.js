function Thermostat() {
	this.temperature = 20;
	this.resetDefault = 20;
	this.isPowerSaverOn = true;
	this.minTemperature = 10;
	this.maxTemperature = 32;
	this.maxTemperaturePowerSaver = 25;
};

Thermostat.prototype.increaseTemperature = function() {
	this.increaseTemperatureBy(1);
};

Thermostat.prototype.increaseTemperatureBy = function(degrees) {
	this.temperature += degrees;
	if(this.isPowerSaverOn && this.temperature > this.maxTemperaturePowerSaver) this.temperature = this.maxTemperaturePowerSaver
	if(!this.isPowerSaveOn && this.temperature > this.maxTemperature) this.temperature = this.maxTemperature
};

Thermostat.prototype.decreaseTemperature = function() {
	this.decreaseTemperatureBy(1);
};

Thermostat.prototype.decreaseTemperatureBy = function(degrees) {
	if(this.temperature - this.minTemperature < degrees){
		this.temperature = this.minTemperature;
	}
	else this.temperature -= degrees
};

Thermostat.prototype.reset = function() {
	this.temperature = this.resetDefault;
};