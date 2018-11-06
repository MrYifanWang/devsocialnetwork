const Validator = require('validator');
const _ = require('lodash');

module.exports = function validateProfileInput(data) {
	let errors = {};

	data.handle = !_.isEmpty(data.handle) ? data.handle : '';
	data.status = !_.isEmpty(data.status) ? data.status : '';
	data.skills = !_.isEmpty(data.skills) ? data.skills : '';

	if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
		errors.handle = 'Handle needs to between 2 and 4 characters';
	}

	if (Validator.isEmpty(data.handle)) {
		errors.handle = 'Profile handle is required';
	}

	if (Validator.isEmpty(data.status)) {
		errors.status = 'Status field is required';
	}

	if (Validator.isEmpty(data.skills)) {
		errors.skills = 'Skills field is required';
	}

	if (!_.isEmpty(data.website)) {
		if (!Validator.isURL(data.website)) {
			errors.website = 'Not a valid URL';
		}
	}

	if (!_.isEmpty(data.youtube)) {
		if (!Validator.isURL(data.youtube)) {
			errors.youtube = 'Not a valid URL';
		}
	}

	if (!_.isEmpty(data.twitter)) {
		if (!Validator.isURL(data.twitter)) {
			errors.twitter = 'Not a valid URL';
		}
	}

	if (!_.isEmpty(data.facebook)) {
		if (!Validator.isURL(data.facebook)) {
			errors.facebook = 'Not a valid URL';
		}
	}

	if (!_.isEmpty(data.linkedin)) {
		if (!Validator.isURL(data.linkedin)) {
			errors.linkedin = 'Not a valid URL';
		}
	}

	if (!_.isEmpty(data.instagram)) {
		if (!Validator.isURL(data.instagram)) {
			errors.instagram = 'Not a valid URL';
		}
	}

	return {
		errors,
		isValid: _.isEmpty(errors)
	};
};
