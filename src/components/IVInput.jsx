function IVInput(props) {
	return (
		<div
			style={{
				flexBasis: "100%",
				justifyContent: "space-evenly",
				margin: "3px 0px",
			}}>
			<input
				type="range"
				style={{
					accentColor:
						props.iv >= 15
							? "#ba3838"
							: props.iv == 0
							? "lightslategray"
							: "#d49831",
					color: "whitesmoke",
				}}
				id={props.stat}
				min={0}
				max={15}
				value={props.iv}
				onChange={props.changeFunc}
			/>
			<span>{props.iv}</span>
		</div>
	);
}

export default IVInput;
