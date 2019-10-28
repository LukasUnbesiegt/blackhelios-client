import React from "react";

const TextInput = ({ label, type, field, form, prepend, icon, ...props }) => {
	let valid = form.errors[field.name] ? "is-invalid" : null;
	return (
		<div className="form-group mb-3">
			<label for="validationServer04" style={{ letterSpacing: "1px" }}>
				{field.name}
			</label>
			<div class="input-group mb-1 ">
				{prepend && (
					<div class="input-group-prepend">
						<span class="input-group-text">
							<i className={icon}></i>
						</span>
					</div>
				)}

				<input
					type={type}
					{...field}
					className={`form-control ${valid}`}
					{...props}
				/>
			</div>

			{
				<div style={{ fontSize: "10px", color: "red" }}>
					{form.errors[field.name]}
				</div>
			}
		</div>
	);
};

export default TextInput;
