import React, { Component } from "react";
import { connect } from "react-redux";
import { auth } from "../../../actions/userActions";
import { withRouter } from "react-router-dom";
import Loading from "../Loading/LoadingComponent1/LoadingComponent";

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
					/>
				);
			} else {
				return <Loading />;
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
