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
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
		if (!values.name) {
			errors.name = "Name is required";
		}
		if (!values.lastname) {
			errors.lastname = "Lastname is required";
		}
		if (!values.email) {
			errors.email = "Email is required";
		} else if (!values.email.match(regex)) {
			errors.email = "This is not a valid email format!";
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

	const handleSubmit = async (e) => {
		e.preventDefault();
		setValuesError(validateForm(formValues));
		setIsSubmit(true);
	};

	useEffect(() => {
		console.log(valuesError);
		if (Object.keys(valuesError).length === 0 && isSubmit) {
			axios.post(
				`https://portfolio-contact-form-api-mocha.vercel.app/api/mail`,
				{ ...formValues }
			);
			setFormValues((prevVal) => {
				return {
					name: "",
					lastname: "",
					email: "",
					phone: "",
					message: "",
				};
			});
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
							value={formValues.name}
							handlechange={handleChange}
							labelVal={valuesError.name}
							class={
								valuesError.name
									? "contact__input--error"
									: "contact__input"
							}
						/>
						<FormRow
							type="text"
							name="lastname"
							placeholder="Last Name"
							value={formValues.lastname}
							handlechange={handleChange}
							labelVal={valuesError.lastname}
							class={
								valuesError.lastname
									? "contact__input--error"
									: "contact__input"
							}
						/>
						<FormRow
							type="email"
							name="email"
							placeholder="Email"
							value={formValues.email}
							handlechange={handleChange}
							labelVal={valuesError.email}
							class={
								valuesError.email
									? "contact__input--error"
									: "contact__input"
							}
						/>
						<FormRow
							type="text"
							name="phone"
							placeholder="Phone Number"
							value={formValues.phone}
							handlechange={handleChange}
							class="contact__input"
						/>
						<label for="message" className="messageLabel">
							<textarea
								placeholder="Message"
								value={formValues.message}
								onChange={handleChange}
								id="message"
								name="message"
								class={
									valuesError.message
										? "contact__inputMessage--error"
										: "contact__inputMessage"
								}
							></textarea>
							<span className="messageLabel__error">
								{valuesError.message}
							</span>
						</label>
						<button>Submit Now</button>
					</form>
				</div>
			</div>
		</div>
	);
}
