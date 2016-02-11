var chai = require('chai');
var expect = chai.expect;
var validator = require('../lib/validator.js');

describe('A Validator', function(){

	it('will return no errors for valid number', function () {
		expect(validator(3)).to.be.empty;
	});

	it('will return error.nonpositive for not strictly positive numbers', function() {
		expect(validator(0)).to.be.deep.equal(['error.nonpositive']);
	});
});