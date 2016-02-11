var chai = require('chai');
var expect = chai.expect;
var validator = require('../lib/validator.js');

describe('A Validator', function(){

	it('will return no errors for valid number', function () {
		expect(validator(7)).to.be.empty;
	});

	describe('will return error.nonpositive for not strictly positive numbers:', function() {
		it('like 0', function() {
			expect(validator(0)).to.be.deep.equal(['error.nonpositive']);
		});

		it('like -2', function() {
			expect(validator(-2)).to.be.deep.equal(['error.nonpositive']);
		});
	});

	describe('will return error.three for divisible by 3 numbers:', function() {
		it('like 3', function() {
			expect(validator(3)).to.be.deep.equal(['error.three']);
		});
		it('like 6', function() {
			expect(validator(6)).to.be.deep.equal(['error.three']);
		});
	});

	describe('will return error.three for divisible by 5 numbers:', function() {
		it('like 5', function() {
			expect(validator(5)).to.be.deep.equal(['error.five']);
		});
		it('like 10', function() {
			expect(validator(10)).to.be.deep.equal(['error.five']);
		});
	});

});