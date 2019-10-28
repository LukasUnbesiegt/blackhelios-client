import React from "react";
import CreatableSelect from "react-select/creatable";
import Select from "react-select";

class SelectInput extends React.Component {
	state = {
		isLoading: false
	};

	handleCreate = inputValue => {
		this.setState({ isLoading: true });
		/**
		 * 1 - REDUX ACTION CALL (2ND CALL - getCompaines)
		 * 2 - newValue ( props )
		 * 3 - input.onChange(newValue)
		 * 4 - loading = false
		 */
	};
	normalHandleChange = inputValue => {
		const { field } = this.props;
		field.onChange(inputValue.value);
	};

	handleChange = inputValue => {
		const { field } = this.props;
		field.onChange(inputValue.value);
	};
	render() {
		const {
			label,
			isMulti,
			placeholder,
			type,
			options,
			field,
			form,
			styles
		} = this.props;
		const { isLoading } = this.state;

		switch (type) {
			case "create":
				return (
					<div className="form-group mb-3">
						<CreatableSelect
							isClearable
							isDisabled={isLoading}
							isLoading={isLoading}
							placeholder={placeholder}
							options={options}
							isMulti={isMulti}
							onChange={this.handleChange}
							onCreateOption={this.handleCreate}
							value={field.value}
							styles={styles}
						/>
					</div>
				);
				break;
			case "normal":
				return (
					<div className="form-group mb-3">
						<Select
							placeholder={placeholder}
							options={options}
							isMulti={isMulti}
							onChange={this.normalHandleChange}
							value={field.value}
							onBlur={() => {}}
							styles={styles}
						/>
					</div>
				);
				break;
			default:
				return (
					<div className="form-group mb-3">
						<Select
							placeholder={placeholder}
							options={options}
							isMulti={isMulti}
							onChange={this.normalHandleChange}
							value={field.value}
							onBlur={() => {}}
							styles={styles}
						/>
					</div>
				);
				break;
		}
	}
}

export default SelectInput;
