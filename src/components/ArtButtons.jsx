function ArtButtons(props) {
	return (
		<div className="art-buttons">
			<button onClick={props.artFunc}>{props.artChoice}</button>
		</div>
	);
}

export default ArtButtons;
