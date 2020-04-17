const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.username = !isEmpty(data.username) ? data.username : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (Validator.isEmpty(data.username)) {
    errors.username = "A name is required";
  }

  if (Validator.isEmpty(data.password)) {
    error.password = "A password is required";
  }

  if (Validator.isEmpty(data.password2)) {
    error.password2 = "Please confirm the password";
  }

  if (!Validator.isLength(data.password, {min: 5, max: 30})) {
    errors.password = "Password must be at least 5 characters"
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
