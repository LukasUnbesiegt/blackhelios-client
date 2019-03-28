
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'

import styles from './Login.module.css';
// import LoginForm from './LoginForm/LoginForm';

import { loginUser } from '../../../../actions/userActions'
import { withRouter } from 'react-router-dom'


class Login extends Component {


    loginAdmin = (data) => {

        this.props.loginUser(data, this.props.history)





    }


    render() {





        return (


            <Fragment>
                <div


                >
                    <div>




                    </div>



                </div>
            </Fragment>
        )
    }
}



const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    loginUser
}



export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));