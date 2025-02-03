import Move from "./Move";

function MoveList(props) {
	return (
		<div className="move-list">
			<ul>
				{props.moves &&
					props.moves
						// .filter((move, index) => props.moves.length > 1 && index < 4)
						.map((move, index) => (
							<Move
								key={index}
								name={move.move.name.replace("-", " ")}
								fetchUrl={move.move.url}
							/>
						))}
			</ul>
		</div>
	);
}

export default MoveList;
