const Validator = require('validator');
const _ = require('lodash');

module.exports = function validatePostInput(data) {
    let errors = {};

    data.text = !_.isEmpty(data.text) ? data.text : '';

    if (!Validator.isLength(data.text, { min: 1, max: 300 })) {
        errors.text = 'Post must be between 1 and 300 characters';
    }

    if (Validator.isEmpty(data.text)) {
        errors.text = 'Text field is required';
    }

    return {
        errors,
        isValid: _.isEmpty(errors)
    };
};
