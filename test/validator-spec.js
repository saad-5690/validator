var chai = require('chai');
var should = chai.should();
var validator = require('../lib/validator.js');

describe('A Validator', function(){
	it('will return error.nonpositive for not strictly positive numbers', function() {
		validator(0).should.to.be.deep.equal(['error.nonpositive']);
	});
});