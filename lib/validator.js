module.exports = function (n){
	var result = [];
	if( n<= 0 ){
		result.push('error.nonpositive');
	}
	if( n % 3 === 0 ){
		result.push('error.three');
	}
	if( n % 5 === 0 ){
		result.push('error.five');
	}
	return result;
}