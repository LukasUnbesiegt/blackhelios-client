import React from 'react'
import styles from './LoginForm.module.css'
import { reduxForm, Field } from 'redux-form'
import TextInput from '../../../../misc/forms/inputs/TextInput'
import { connect } from 'react-redux'
import { compose } from 'redux'


const validate = values => {
    const errors = {}

    if (!values.email) {
        errors.email = 'Email Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }

    if (!values.password) {
        errors.password = 'Password Required'
    }


    return errors
}







function LoginForm({
    submitCallback,
    handleSubmit,
    valid,
    submitting,
    pristine,
    errors

}) {





    return (


        <form
            onSubmit={handleSubmit(submitCallback)}
            className={`${styles.formWrapper}`}

        >
            <div className="container">

                <div className="row">

                    <div className="col-12 text-center">

                        <p className={`${styles.textHead}`}>Contact kyawthura@gmail.com if want to contribute</p>
                        <Field
                            component={TextInput}
                            placeholder="enter email"
                            type="text"
                            name="email"

                        />
                        <Field
                            component={TextInput}
                            placeholder="enter password"
                            type="password"
                            name="password"
                        />

                        <div>



                        </div>
                        <div className="my-3">

                            <span style={{ color: 'red', fontSize: '13px' }}>

                                {errors ? <span>{errors.error}</span> : null}


                            </span>



                        </div>
                        <button
                            className="btn btn-success mt-2"
                            type="submit"
                            disabled={submitting}
                        >

                            Login

                        </button>

                        <div>



                        </div>

                    </div>


                </div>



            </div>



        </form>
    )
}


const mapStateToProps = (state) => ({
    errors: state.errors
})

// const mapDispatchToProps = {

// }



export default compose(

    reduxForm({
        form: 'login-register',
        validate: validate

    }),
    connect(mapStateToProps)
)(LoginForm);