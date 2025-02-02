import { useEffect, useState } from "react";
import axios from "axios";

function Ability(props) {
	const [abilityText, setAbilityText] = useState(null);
	const [detailedAbilityText, setDetailedAbility] = useState(null);
	const [abilityShow, setAbilityShow] = useState(false);
	const [viewDetails, setViewDetails] = useState(false);

	function fetchAbility() {
		if (props.fetchUrl) {
			setAbilityText(null);
			setDetailedAbility(null);
			setAbilityShow(false);
			setViewDetails(false);
			axios.get(props.fetchUrl).then((response) => {
				setAbilityText(
					response.data.flavor_text_entries.findLast((effect) => {
						return effect.language.name == "en";
					}).flavor_text
				);

				if (response.data.effect_entries.length != 0) {
					setDetailedAbility(
						response.data.effect_entries.findLast((effect) => {
							return effect.language.name == "en";
						}).effect
					);
				} else {
					setDetailedAbility(null);
				}
			});
		}
	}

	const abilityTextShow = (event) => {
		setAbilityShow((prev) => !prev);
		if (abilityShow) {
			setViewDetails(false);
		}
	};

	const detailedAbilityShow = () => {
		if (detailedAbilityText !== null) {
			setViewDetails((prev) => !prev);
		}
	};

	useEffect(fetchAbility, [props.fetchUrl]);

	return (
		<div>
			<div
				className="ability-text"
				onClick={abilityTextShow}
				style={{
					textTransform: "capitalize",
					color: viewDetails ? "gold" : "white",
					transition: "color .2s",
				}}>
				{props.isHidden ? (
					<span style={{ fontWeight: 700 }}>{props.name}</span>
				) : (
					props.name
				)}
			</div>
			<sub
				onClick={detailedAbilityShow}
				style={{
					display: abilityShow ? "block" : "none",
					cursor: "pointer",
					userSelect: "none",
				}}>
				{viewDetails ? detailedAbilityText : abilityText}
			</sub>
		</div>
	);
}

export default Ability;
