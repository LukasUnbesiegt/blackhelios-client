import React, { Component } from "react";
import PropTypes from "prop-types";
import RegisterForm from "./RegisterForm";
class Register extends Component {
	state = {
		error: "something wrong"
	};
	static propTypes = {
		prop: PropTypes
	};

	submitHandler = (data, cb) => {
		console.log("data", data);
		cb();
	};
	render() {
		return (
			<div>
				<RegisterForm
					submitCallBack={this.submitHandler}
					initialValues={{
						email: "",
						password: "",
						username: ""
					}}
					error={this.state.error}
				/>
			</div>
		);
	}
}

export default Register;
