import { useContext, useEffect, useState } from "react";
import axios from "axios";

import PokemonNameHeader from "./NameHeader";
import AdjustableSprite from "./AdjustableSprite";
import Abilities from "./Abilities";
import Stats from "./Stats";
import NavButtons from "./NavButtons";
import ArtButtons from "./ArtButtons";
import TypeIcon from "./TypeIcon";
import FlavorText from "./FlavorText";
import MoveList from "./MoveList";

import { PokemonContext, SettingsContext } from "../App";

function PokemonMenu() {
	// Contexts passed by the App component
	const pokemon = useContext(PokemonContext);

	// Massive amounts of State Hooks
	const [pkmn, setPkmn] = useState([]);
	const [pkmnId, setPkmnId] = useState(pokemon);
	const [genus, setGenus] = useState(null);
	const [flavor, setFlavor] = useState(null);
	const [displayName, setDisplayName] = useState(null);
	const [flavorLang, setFlavorLang] = useState("en");
	const [flavorGame, setFlavorGame] = useState([]);
	const [jp, setJP] = useState(null);
	const [artSource, setArtSource] = useState(true);
	const [isShiny, setShiny] = useState(false);

	// Values based on the boolean values of Artwork and Shiny toggles
	const artChoice = artSource ? "official-artwork" : "home";
	const artChoiceText = artSource ? "Pokémon HOME" : "Ken Sugimori Art";
	const shinyChoice = isShiny ? "front_shiny" : "front_default";

	function fetchPokemonFromSelect() {
		axios
			.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
			.then((response) => {
				setPkmn(response.data);
			});

		axios
			.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`)
			.then((speciesresponse) => {
				setGenus(
					speciesresponse.data.genera.findLast((genus) => {
						return genus.language.name == "en";
					}).genus
				);

				setJP(
					speciesresponse.data.names.findLast((name) => {
						return name.language.name == "ja-Hrkt";
					}).name
				);

				setFlavor(
					speciesresponse.data.flavor_text_entries.findLast((flavor) => {
						return flavor.language.name == flavorLang;
					})
				);
				setDisplayName(speciesresponse.data.name);
			});

		setPkmnId(pokemon);
	}

	function fetchPokemonFromButton() {
		axios
			.get(`https://pokeapi.co/api/v2/pokemon/${pkmnId}`)
			.then((response) => {
				setPkmn(response.data);
			});
		axios
			.get(`https://pokeapi.co/api/v2/pokemon-species/${pkmnId}`)
			.then((speciesresponse) => {
				setGenus(
					speciesresponse.data.genera.findLast((genus) => {
						return genus.language.name == "en";
					}).genus
				);

				setJP(
					speciesresponse.data.names.findLast((name) => {
						return name.language.name == "ja-Hrkt";
					}).name
				);

				setFlavor(
					speciesresponse.data.flavor_text_entries.findLast((flavor) => {
						return flavor.language.name == flavorLang;
					})
				);
				setDisplayName(speciesresponse.data.name);
			});
	}

	const shinyChange = () => setShiny((prev) => !prev);

	useEffect(fetchPokemonFromSelect, [pokemon]);

	useEffect(fetchPokemonFromButton, [pkmnId]);

	return (
		pkmn && (
			<div
				style={{
					display: "flex",
					justifyContent: "center",
				}}>
				<div
					className="flex-container"
					style={{ width: 500, minWidth: 500, maxWidth: 500 }}>
					<Abilities abilityList={pkmn.abilities} />
					<br />
					<br />
					<Stats statList={pkmn.stats} />
				</div>

				<div style={{ flexBasis: "33%" }}>
					<PokemonNameHeader
						info={{
							genus: genus,
							japanese: jp,
							name: displayName,
							number: pkmn.id,
							shiny: isShiny,
						}}
					/>

					<AdjustableSprite
						image={pkmn.sprites && pkmn.sprites.other[artChoice][shinyChoice]}
						imageSize={350}
						altText={displayName}
						shiny={isShiny}
						click={shinyChange}
					/>

					<div className="types">
						{pkmn.types &&
							pkmn.types.map((type, index) => (
								<TypeIcon key={index} type={type.type.name} />
							))}
					</div>

					<NavButtons
						leftFunc={() => setPkmnId((prev) => parseInt(prev) - 1)}
						randomFunc={() => setPkmnId(Math.floor(Math.random() * 1025) + 1)}
						rightFunc={() => setPkmnId((prev) => parseInt(prev) + 1)}
					/>

					<ArtButtons
						artFunc={() => setArtSource((prev) => !prev)}
						artChoice={artChoiceText}
					/>
				</div>
				<div style={{ width: 500, minWidth: 500, maxWidth: 500 }}>
					<FlavorText
						text={flavor && flavor.flavor_text}
						game={flavor && flavor.version.name.replace("-", " ")}
					/>
					<br />
					<br />
					<MoveList moves={pkmn.moves} />
				</div>
			</div>
		)
	);
}

export default PokemonMenu;
