import "./_Contactform.scss";
import FormRow from "../Formrow";

export default function Contactform() {
	return (
		<div className="contact">
			<div className="contact__top">
				<h3>Contact with me</h3>
			</div>
			<div className="contact__content">
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
					<textarea
						placeholder="Message"
						style={{ resize: "none" }}
					></textarea>
					<button>Submit Now</button>
				</form>
			</div>
		</div>
	);
}
