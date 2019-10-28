import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form, ErrorMessage } from "formik";
import TextInput from "../../reusable/forms/inputs/TextInput";
import { validate } from "./validateRegister";

function RegisterForm({ initialValues, submitCallBack }) {
	return (
		<div className="container card my-2 py-2 shadow">
			<Formik
				onSubmit={(values, { resetForm }) => {
					submitCallBack(values, () => {
						resetForm();
					});
				}}
				initialValues={initialValues}
				validate={validate}
			>
				{({ isSubmitting, resetForm }) => {
					return (
						<Form>
							<div className="row">
								<div className="col-md-6">
									<Field
										component={TextInput}
										name="username"
										type="text"
										style={{}}
										prepend
										icon="far fa-user"
										placeholder="username"
									/>
								</div>
								<div className="col-md-6">
									<Field
										component={TextInput}
										name="email"
										type="email"
										prepend={true}
										icon="far fa-envelope"
										style={{}}
										placeholder="email"
									/>
								</div>
								<div className="col-md-6">
									<Field
										component={TextInput}
										name="password"
										type="password"
										prepend={true}
										icon="fas fa-key"
										style={{}}
										placeholder="password"
									/>
								</div>
							</div>
							<button
								className="btn btn-dark btn-sm"
								type="button"
								onClick={() => {
									resetForm();
								}}
							>
								reset
							</button>
							<button
								type="submit"
								disabled={isSubmitting}
								className="btn btn-dark"
							>
								Register
							</button>
						</Form>
					);
				}}
			</Formik>
		</div>
	);
}

RegisterForm.propTypes = {};

export default RegisterForm;
