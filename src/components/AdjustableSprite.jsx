function AdjustableSprite(props) {
	return (
		<div style={{ display: "flex", margin: "10px auto" }}>
			<img
				className="sprite"
				width={
					Math.ceil(
						parseInt(window.innerWidth) /
							(parseInt(window.innerWidth) / props.imageSize)
					) + "px"
				}
				src={props.image}
				alt={props.altText}
				onClick={props.click}
			/>
		</div>
	);
}

export default AdjustableSprite;
