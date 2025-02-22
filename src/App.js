import "./styles/app.scss";

import React from "react";

import { createContext, useContext, useEffect, useState } from "react";

import axios from "axios";

import PokedexTitle from "./components/PokedexTitle";
import GoBackUp from "./components/GoBackUp";
import SearchBar from "./components/SearchBar";
import PokemonListItem from "./components/PokemonListItem";
import PokemonMenu from "./components/PokemonMenu";
import BackButton from "./components/BackButton";
import FlexInterrupt from "./components/FlexInterrupt";
import Error from "./components/Error";

export const PokemonContext = createContext(null);

const regionsList = [
	{ start: 0, name: "Kanto" },
	{ start: 151, name: "Johto" },
	{ start: 251, name: "Hoenn" },
	{ start: 386, name: "Sinnoh" },
	{ start: 493, name: "Unova" },
	{ start: 649, name: "Kalos" },
	{ start: 721, name: "Alola" },
	{ start: 809, name: "Galar" },
	{ start: 898, name: "Hisui" },
	{ start: 905, name: "Paldea" },
];

var starts = [0, 151, 251, 386, 493, 649, 721, 809, 898, 905];
var names = [
	"kanto",
	"johto",
	"hoenn",
	"sinnoh",
	"unova",
	"kalos",
	"alola",
	"galar",
	"hisui",
	"paldea",
];

function App() {
	const [showDetails, setShowDetails] = useState(false);
	const [pokemonList, setPokemonList] = useState([]);
	const [pokemonID, setPokemonID] = useState(1);
	const [itemSize, setItemSize] = useState("medium");
	const [itemLimit, setLimit] = useState(300);
	const [searchString, setSearch] = useState("");

	// Conditional to find if the searchbar input matches a search preset (For regions)

	const isRegionKeyword =
		searchString.toLowerCase() == "kanto" ||
		searchString.toLowerCase() == "johto" ||
		searchString.toLowerCase() == "hoenn" ||
		searchString.toLowerCase() == "sinnoh" ||
		searchString.toLowerCase() == "unova" ||
		searchString.toLowerCase() == "kalos" ||
		searchString.toLowerCase() == "alola" ||
		searchString.toLowerCase() == "galar" ||
		searchString.toLowerCase() == "hisui" ||
		searchString.toLowerCase() == "paldea"
			? true
			: false;

	// Gets the full list of Pokémon from the API
	const fetchPokemonList = () => {
		axios
			.get("https://pokeapi.co/api/v2/pokemon?limit=1302")
			.then((response) => {
				setPokemonList(response.data.results);
			});
	};

	useEffect(() => {
		fetchPokemonList();
	}, []);

	function changeSearch(event) {
		setSearch(event.currentTarget.value);
	}

	const loadMore = () => {
		if (itemLimit >= 1025) {
			setLimit((prev) => prev + 9238);
		} else {
			setLimit((prev) => Math.min(prev + 300, 1025));
		}
	};

	const pokemonButtonSelected = (event) => {
		setPokemonID(event.currentTarget.id);
		setTimeout(() => {
			setShowDetails(true);
		}, 500);
	};

	return (
		<div>
			<div className="pokemon-list-wrapper">
				<div style={{ display: showDetails ? "none" : "block" }}>
					<PokedexTitle>Pokédex</PokedexTitle>

					<GoBackUp />

					<SearchBar changeFunc={changeSearch} />

					<div className="size-buttons">
						<button onClick={() => setItemSize("small")}>SM</button>
						<button onClick={() => setItemSize("medium")}>MED</button>
						<button onClick={() => setItemSize("large")}>LG</button>
					</div>
					<div className="size-buttons">
						<button onClick={() => setItemSize("list")}>List</button>
					</div>
					<div style={{ textAlign: "center", textTransform: "capitalize" }}>
						{itemSize} view
					</div>
					<br />
					<div className="region-refer-btn">
						<select
							onChange={(e) => {
								document.querySelector(".search-bar").value =
									e.currentTarget.value;
								setSearch(e.currentTarget.value);
							}}>
							<option key="none" value=""></option>
							{names.map((name) => (
								<option key={name} value={name}>
									{name.charAt(0).toUpperCase() + name.slice(1)}
								</option>
							))}
						</select>
					</div>
					<div className="pokemon-list">
						{isRegionKeyword
							? pokemonList
									.filter(
										(_, index) =>
											index >= starts[names.indexOf(searchString)] &&
											index < (starts[names.indexOf(searchString) + 1] ?? 1025)
									)
									.map((item, index) => (
										<>
											<PokemonListItem
												key={index}
												number={index + starts[names.indexOf(searchString)] + 1}
												name={item.name}
												itemSize={itemSize}
												clicky={pokemonButtonSelected}
											/>
										</>
									))
							: searchString.length != 0 && !isRegionKeyword
							? pokemonList &&
							  pokemonList
									.filter((_, index) => index < 1025)
									.map((item, index) => (
										<>
											{item.name.replace("-", " ").includes(searchString) && (
												<PokemonListItem
													key={index + 1}
													number={index + 1}
													name={item.name}
													itemSize={itemSize}
													clicky={pokemonButtonSelected}
												/>
											)}
										</>
									))
							: pokemonList &&
							  pokemonList
									.filter((_, index) => index < itemLimit || index > 10000)
									.map((item, index) => (
										<>
											{searchString.length == 0 &&
												regionsList.map(
													(region) =>
														index == region.start && (
															<FlexInterrupt
																key={region.name + "-interrupt"}
																useId>
																{region.name}
															</FlexInterrupt>
														)
												)}

											<PokemonListItem
												key={index + 1}
												number={index > 1024 ? index + 8975 : index + 1}
												name={item.name}
												itemSize={itemSize}
												clicky={pokemonButtonSelected}
											/>

											{index == itemLimit - 1 && itemLimit < 10263 && (
												<FlexInterrupt>
													<button className="load-more-btn" onClick={loadMore}>
														Load More
													</button>
												</FlexInterrupt>
											)}
										</>
									))}
					</div>
				</div>

				<div style={{ display: showDetails ? "block" : "none" }}>
					<PokemonContext.Provider value={pokemonID}>
						<BackButton
							clickFunc={() => {
								setShowDetails(false);
							}}
						/>
						<br />

						<PokemonMenu />
					</PokemonContext.Provider>
				</div>
			</div>
		</div>
	);
}

export default App;
