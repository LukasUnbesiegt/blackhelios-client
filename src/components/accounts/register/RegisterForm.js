import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form, ErrorMessage } from "formik";
import TextInput from "../../reusable/forms/inputs/TextInput";
import { validateHelper as validate } from "../../../utils/validationHelper";
import Select from "../../reusable/forms/inputs/Select";
import CheckBox from "../../reusable/forms/inputs/CheckBox";
import DateRangePicker from "../../reusable/forms/inputs/dates/DateRangePicker";
import SinglePicker from "../../reusable/forms/inputs/dates/SingleDatePicker";
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
				validate={values => {
					return validate(values, [
						{
							key: "email",
							required: true,
							method: {
								func: "isEmail",
								message: "email is invalid"
							}
						},
						{
							key: "username",
							required: true
						},
						{
							key: "password",
							required: true
						}
					]);
				}}
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
								<div className="col-md-6">
									<Field
										component={Select}
										name="select"
										type="normal"
										options={[
											{
												label: "new",
												value: "new"
											}
										]}
										style={{}}
										placeholder="select samples"
									/>
								</div>
								<div className="col-md-6">
									<Field
										component={CheckBox}
										name="check"
										type="checkbox"
										label="check"
									/>
								</div>
								<div>
									<Field
										name="dates"
										component={DateRangePicker}
										enableTime={true}
										style={{
											width: "300px",
											margin: "20px",
											padding: "20px"
										}}
									/>
								</div>
								<div>
									<Field
										name="date"
										component={SinglePicker}
										enableTime={true}
										style={{
											width: "300px",
											margin: "20px",
											padding: "20px"
										}}
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
