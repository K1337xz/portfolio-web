export default function FormRow(props) {
	return (
		<>
			<label htmlFor={props.name} className={props.validLabel}>
				<input
					type={props.type}
					value={props.value}
					id={props.name}
					onChange={props.handlechange}
					className={props.class}
					placeholder={props.placeholder}
					hidden={props.hidden}
					required={props.req}
				/>
				<span className="error">{props.labelVal}</span>
			</label>
		</>
	);
}
