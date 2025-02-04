function PokemonListItem(props) {
	return (
		<div
			key={props.number}
			className={"pokemon-list-item " + props.itemSize}
			id={props.number}
			onClick={props.clicky}>
			<img
				alt={props.name}
				src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.number}.png`}
			/>
			<br />
			<div>
				{props.number <= 1025
					? "#" + props.number.toString().padStart(4, 0) + " - "
					: ""}
				{props.name.replace("-", " ")}
			</div>
		</div>
	);
}

export default PokemonListItem;
