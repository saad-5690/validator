var nonPositiveValidationRule = require('./rules/nonPositive.js');
var nonDivisibleValidationRule = require('./rules/nonDivisible.js');

var validationRules = [
	nonPositiveValidationRule,
	nonDivisibleValidationRule(3, 'error.three'),
	nonDivisibleValidationRule(5, 'error.five')
];

module.exports = function (n){
	return validationRules.reduce(function(result, rule){
		rule(n, result);
		return result;
	}, []);
}