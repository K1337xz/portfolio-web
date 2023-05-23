export default function FormRow(props) {
	return (
		<>
			<label htmlFor={props.name} className={props.validLabel}>
				<input
					type={props.type}
					value={props.value}
					name={props.name}
					onChange={props.handleChange}
					className={props.class}
					placeholder={props.placeholder}
					hidden={props.hidden}
				/>
			</label>
		</>
	);
}
