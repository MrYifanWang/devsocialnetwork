const Validator = require('validator');
const _ = require('lodash');

module.exports = function validateExperienceInput(data) {
  let errors = {};

  data.school = !_.isEmpty(data.school) ? data.school : '';
  data.degree = !_.isEmpty(data.degree) ? data.degree : '';
  data.fieldofstudy = !_.isEmpty(data.fieldofstudy) ? data.fieldofstudy : '';
  data.from = !_.isEmpty(data.from) ? data.from : '';

  if (Validator.isEmpty(data.school)) {
    errors.school = 'School field is required';
  }

  if (Validator.isEmpty(data.degree)) {
    errors.degree = 'Degree field is required';
  }

  if (Validator.isEmpty(data.fieldofstudy)) {
    errors.fieldofstudy = 'Field of study field is required';
  }

  if (Validator.isEmpty(data.from)) {
    errors.from = 'From date field is required';
  }

  return {
    errors,
    isValid: _.isEmpty(errors)
  };
};
