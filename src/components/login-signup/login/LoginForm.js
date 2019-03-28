
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextInput from '../../../misc/forms/inputs/TextInput'
import { endpoint, prodEndpoint } from '../../../../config';
import FacebookLogin from 'react-facebook-login';


function LoginForm(props) {


    const { handleSubmit, submitCb, responseFacebook, valid, errors, submitting, pristine } = props;
    // const facebookUrl = process.env.NODE_ENV === 'development' ? `${endpoint}auth/facebook` : `${prodEndpoint}auth/facebook`;
    return (

        <form
            onSubmit={handleSubmit(submitCb)}


        >

            <Field
                name="email"
                type="email"
                label="email"
                component={TextInput}
                placeholder="enter email"

            />

            <Field
                name="password"
                type="password"
                label='password'
                component={TextInput}
                placeholder="enter password"

            />


            <button
                className="btn btn-success"
                type="submit"
                disabled={!valid || pristine || submitting}
            >

                Login
            </button>


            <div className="form-group mt-3">

                <FacebookLogin
                    appId="644973499195403"
                  
                    fields="name,email,picture"
                    callback={responseFacebook}


                />
            </div>
        </form>
    )
}





export default reduxForm({
    form: 'login'
})(LoginForm);