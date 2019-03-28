
import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import { loginUser, fbLogin } from '../../../../actions/userActions'


class Login extends Component {



    loginUser = (userData) => {

        console.log(userData);
        this.props.loginUser(userData, this.props.history)

    }

    responseFacebook = (response) => {


        const dataObj = {
            email: response.email,
            name: response.name,
            accessToken: response.accessToken
        }
        console.log(dataObj)
        this.props.fbLogin(dataObj, this.props.history)

    }

    render() {



        return (
            <Fragment>
                <div className="container">
                    <div className="row">

                        <div className="col-md-12">

                            <h4>Login Form</h4>

                            <LoginForm
                                submitCb={this.loginUser}
                                responseFacebook={this.responseFacebook}
                            />


                        </div>

                    </div>

                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    loginUser,
    fbLogin
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));