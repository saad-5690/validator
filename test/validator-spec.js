var assert = require('assert');

validator = require('../lib/validator.js')

describe('A Validator', function(){
	it('will return error.nonpositive for not strictly positive numbers', function() {
		assert.deepEqual(validator(0), ['error.nonpositive']);
	});
});