import validator from "validator";

export const validateHelper = (values, selection = []) => {
	let errors = {};

	for (const key in values) {
		if (values.hasOwnProperty(key)) {
			let isExist = selection.findIndex(item => {
				return item.key === key;
			});
			if (selection[isExist]) {
				let selectedItem = selection[isExist];
				let method = selection[isExist].method;
				let element = values[key];
				if (selectedItem.required) {
					if (validator.isEmpty(element)) {
						errors[key] = "required field";
					}
				}
				if (method) {
					let checkPassed = validator[method.func](element);

					if (!checkPassed) {
						errors[key] = method.message;
					}
				}
			}
		}
	}

	return errors;
};
