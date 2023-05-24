import "./_Contactform.scss";
import FormRow from "../Formrow";

export default function Contactform() {
	return (
		<div className="contact" id="con">
			<div className="contact__top">
				<h3>Contact with me</h3>
			</div>
			<div className="contact__content">
				<div className="contact__formWrapp">
					<form className="contact__form">
						<FormRow
							type="text"
							name="contactName"
							placeholder="Name"
						/>
						<FormRow
							type="text"
							name="contactLastName"
							placeholder="Last Name"
						/>
						<FormRow
							type="email"
							name="contactEmail"
							placeholder="Email"
						/>
						<FormRow
							type="text"
							name="contactPhone"
							placeholder="Phone Number"
						/>
						<textarea placeholder="Message"></textarea>
						<button>Submit Now</button>
					</form>
				</div>
			</div>
		</div>
	);
}
