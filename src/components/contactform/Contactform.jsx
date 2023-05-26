import "./_Contactform.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import FormRow from "../Formrow";

export default function Contactform() {
	const [formValues, setFormValues] = useState({
		name: "",
		lastname: "",
		email: "",
		phone: "",
		message: "",
	});
	const [valuesError, setValuesError] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);

	const validateForm = (values) => {
		const errors = {};
		if (!values.name) {
			errors.name = "Name is required";
		}
		if (!values.lastname) {
			errors.lastname = "Lastname is required";
		}
		if (!values.email) {
			errors.email = "Email is required";
		}
		if (!values.message) {
			errors.message = "Message is required";
		}
		if (!values.name) {
			errors.name = "Name is required";
		}
		return errors;
	};

	const handleChange = (e) => {
		setFormValues({ ...formValues, [e.target.id]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setValuesError(validateForm(formValues));
		setIsSubmit(true);
	};

	useEffect(() => {
		console.log(valuesError);
		if (Object.keys(valuesError).length === 0 && isSubmit) {
			console.log(formValues);
		}
	}, [valuesError]);
	return (
		<div className="contact" id="con">
			<div className="contact__top">
				<h3>Contact with me</h3>
			</div>
			<div className="contact__content">
				<div className="contact__formWrapp">
					<form className="contact__form" onSubmit={handleSubmit}>
						<FormRow
							type="text"
							placeholder="Name"
							name="name"
							values={formValues.name}
							handlechange={handleChange}
							labelVal={valuesError.name}
						/>
						<FormRow
							type="text"
							name="lastname"
							placeholder="Last Name"
							values={formValues.lastname}
							handlechange={handleChange}
							labelVal={valuesError.lastname}
						/>
						<FormRow
							type="email"
							name="email"
							placeholder="Email"
							values={formValues.email}
							handlechange={handleChange}
							labelVal={valuesError.email}
						/>
						<FormRow
							type="text"
							name="phone"
							placeholder="Phone Number"
							values={formValues.phone}
							handlechange={handleChange}
						/>
						<textarea
							placeholder="Message"
							onChange={handleChange}
							id="message"
							name="message"
						></textarea>
						<button>Submit Now</button>
					</form>
				</div>
			</div>
		</div>
	);
}
