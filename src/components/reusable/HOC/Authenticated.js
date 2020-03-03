import React, { Component } from "react";
import { connect } from "react-redux";
import { auth } from "../../../actions/userActions";
import { withRouter } from "react-router-dom";

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
        return <div style={{}}></div>;
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

  return connect(mapStateToProps, mapDispatchToProps)(AuthenticationCheck);
}
