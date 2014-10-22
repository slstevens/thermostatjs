"use strict";

describe('Thermostat', function() {

	var thermostat;

	beforeEach(function() {
		thermostat = new Thermostat();
	});

	describe('by default', function() {


		it('is set to 20 degrees', function() {
			expect(thermostat.temperature).toEqual(20);
		});

		it('power saving mode will be on', function() {
			expect(thermostat.isPowerSaverOn).toBe(true);
		});

		it('can increase the temperature by one degree', function() {
			thermostat.increaseTemperature();
			expect(thermostat.temperature).toEqual(21);
		});

		it('can decrease the temperature by one degree', function() {
			thermostat.decreaseTemperature();
			expect(thermostat.temperature).toEqual(19);
		});

		it('minimum is set to 10 degrees', function() {
			expect(thermostat.minTemperature).toEqual(10);
		});

		it('cannot go below minimum temperature', function(){
			thermostat.decreaseTemperatureBy(11);
			expect(thermostat.temperature).toEqual(10);
		});

		it('if power saving mode is on, the maximum temperature is 25 degrees', function() {
			thermostat.increaseTemperatureBy(10);
			expect(thermostat.temperature).toEqual(25);
		});

		it('if power saving mode is off, maximum temperature is 32 degrees', function() {
			thermostat.isPowerSaverOn = false;
			thermostat.increaseTemperatureBy(20);
			expect(thermostat.temperature).toEqual(32);
		});

		it('thermostat can be reset to a default temperature', function() {
			thermostat.increaseTemperatureBy(5);
			thermostat.reset();
			expect(thermostat.temperature).toEqual(20);
		});

	});

	describe('custom options', function() {

		it('can increase temperature by 2', function() {
			thermostat.increaseTemperatureBy(2);
			expect(thermostat.temperature).toEqual(22)
		});

		it('can decrease temperature by 5', function() {
			thermostat.decreaseTemperatureBy(5);
			expect(thermostat.temperature).toEqual(15)
		});


	});

});