import React, { Component } from "react";
import { connect } from "react-redux";
import { auth } from "../../../actions/userActions";
import { withRouter } from "react-router-dom";
import Loader from "react-loader-spinner";

export default function(ComposedClass) {
	class AuthenticationCheck extends Component {
		componentDidMount() {
			this.props.auth();
		}

		render() {
			if (!this.props.async.loading) {
				return (
					<ComposedClass
						{...this.props}
						user={this.props.user.userData}
						browser={this.props.browser}
						async={this.props.async}
					/>
				);
			} else {
				return (
					<div style={{}}>
						<Loader type="Puff" color="#00BFFF" height={100} width={100} />
					</div>
				);
			}
		}
	}

	const mapStateToProps = state => ({
		user: state.user,
		async: state.async,
		browser: state.browser
	});

	const mapDispatchToProps = {
		auth
	};

	return connect(
		mapStateToProps,
		mapDispatchToProps
	)(AuthenticationCheck);
}
