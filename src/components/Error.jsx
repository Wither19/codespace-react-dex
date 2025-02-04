function Error(props) {
	return (
		<div style={{ color: "red" }}>
			{props.errorPretext ? <b>Error:</b> : null}
			<span>{props.children}</span>
		</div>
	);
}

export default Error;
