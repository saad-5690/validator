var chai = require('chai');
var expect = chai.expect;
var validatorWith = require('../lib/validator.js');
var nonPositiveValidationRule = require('../lib/rules/nonPositive.js');
var nonDivisibleValidationRule = require('../lib/rules/nonDivisible.js');

describe('A validation', function(){

	var validator;

	context('using the default validation rules:',function () {

		beforeEach(function(){
			validator = validatorWith([
				nonPositiveValidationRule,
				nonDivisibleValidationRule(3, 'error.three'),
				nonDivisibleValidationRule(5, 'error.five')
			]);
		});

		it('for valid numbers, will return no errors', function () {
			expect(validator(7)).to.be.empty;
		});

		context('for not strictly positive numbers:', function() {
			it('like 0', function() {
				expect(validator(0)).to.include('error.nonpositive');
			});

			it('like -2', function() {
				expect(validator(-2)).to.include('error.nonpositive');
			});
		});

		context('for numbers divisible by 3 numbers:', function() {
			it('like 3', function() {
				expect(validator(3)).to.include('error.three');
			});
			it('like 15', function() {
				expect(validator(6)).to.include('error.three');
			});
		});

		context('for numbers divisible by 5 numbers:', function() {
			it('like 5', function() {
				expect(validator(5)).to.include('error.five');
			});
			it('like 15', function() {
				expect(validator(10)).to.include('error.five');
			});
		});
	});

	// it('will include one error for each rule the number violates', function() {
	// 	expect(validator(15)).to.include(['error.three', 'error.five']);
	// });

});