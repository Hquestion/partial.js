
// Global validation
// Look here: https://github.com/petersirka/partial.js/tree/master/examples/framework-schema
framework.onValidation = function(name, value) {

	// this == controller

	switch (name) {
		case 'Email':
			return utils.isEmail(value);
		case 'Age':
			return utils.isValid(utils.parseInt(value) > 0, 'Fill fucking age');
		case 'Terms':
			return value === '1';
		case 'FirstName':
		case 'LastName':
			return value.length > 0;
	}
}