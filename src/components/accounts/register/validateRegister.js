import validator from "validator";

export const validate = values => {
	let errors = {};

	if (!values.email) {
		errors.email = "email required";
	}

	if (!values.password) {
		errors.password = "password required";
	}

	if (!values.username) {
		errors.username = "username required";
	}
	return errors;
};
