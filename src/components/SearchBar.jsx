function SearchBar(props) {
	return (
		<center>
			<input
				className="search-bar"
				type="text"
				placeholder="Type to filter Pokémon results"
				onChange={props.changeFunc}
			/>
		</center>
	);
}

export default SearchBar;
