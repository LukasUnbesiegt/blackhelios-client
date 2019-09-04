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
		const { input } = this.props;
		input.onChange(inputValue);
	};

	handleChange = inputValue => {
		const { input } = this.props;
		input.onChange(inputValue);
	};
	render() {
		const {
			input,
			type,
			placeholder,
			isMulti,
			options,
			multiple,
			meta: { touched, error },
			customStyles
		} = this.props;
		const { isLoading } = this.state;

		console.log("input", input);
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
							value={input.value}
							styles={customStyles}
						/>
					</div>
				);
				break;
			case "normal":
				return (
					<div className="form-group mb-3">
						<Select
							isClearable
							placeholder={placeholder}
							options={options}
							isMulti={isMulti}
							onChange={this.normalHandleChange}
							value={input.value}
							onBlur={() => input.onBlur(input.value)}
							styles={customStyles}
						/>
					</div>
				);
				break;
			default:
				return (
					<div className="form-group mb-3">
						<Select
							isClearable
							placeholder={placeholder}
							options={options}
							isMulti={isMulti}
							onChange={this.normalHandleChange}
							value={input.value}
							onBlur={() => input.onBlur(input.value)}
							styles={customStyles}
						/>
					</div>
				);
				break;
		}
	}
}

export default SelectInput;
