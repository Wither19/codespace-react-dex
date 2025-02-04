import { useEffect, useState } from "react";

import { FaStar } from "react-icons/fa6";

import cpm from "./numbers/cpmValues";

import Stat from "./Stat";
import IVInput from "./IVInput";

function Stats(props) {
	const [pogoDisplay, setPogoDisplay] = useState(false);

	const [attackIV, setAttackIV] = useState(15);
	const [defenseIV, setDefenseIV] = useState(15);
	const [hpIV, setHpIV] = useState(15);
	const [ivTotal, setIVTotal] = useState(45);

	const [level, setLevel] = useState(50);
	const [cp, setCP] = useState(null);

	function updatePOGOValues() {
		setAttackIV(parseInt(document.querySelector("#atk").value || 0));
		setDefenseIV(parseInt(document.querySelector("#def").value || 0));
		setHpIV(parseInt(document.querySelector("#hp").value || 0));

		if (props.statList) {
			setIVTotal(attackIV + defenseIV + hpIV);

			var scaledAtk = Math.round(
				2 *
					((7 / 8) *
						Math.max(props.statList[1].base_stat, props.statList[3].base_stat) +
						(1 / 8) *
							Math.min(
								props.statList[1].base_stat,
								props.statList[3].base_stat
							))
			);
			var scaledDef = Math.round(
				2 *
					((5 / 8) *
						Math.max(props.statList[2].base_stat, props.statList[4].base_stat) +
						(3 / 8) *
							Math.min(
								props.statList[2].base_stat,
								props.statList[4].base_stat
							))
			);
			var speedMod = 1 + (props.statList[5].base_stat - 75) / 500;

			var baseAtk = Math.round(scaledAtk * speedMod);
			var baseDef = Math.round(scaledDef * speedMod);

			var baseHP = Math.floor(props.statList[0].base_stat * 1.75 + 50);

			var maxCP = Math.floor(
				Math.max(
					10,
					((baseAtk + attackIV) *
						Math.pow(baseDef + defenseIV, 0.5) *
						Math.pow(baseHP + hpIV, 0.5) *
						Math.pow(cpm[level !== NaN ? level - 1 : 1], 2)) /
						10
				)
			);

			var nerfCP = Math.floor(
				Math.max(
					10,
					((baseAtk + attackIV) *
						Math.pow(baseDef + defenseIV, 0.5) *
						Math.pow(baseHP + hpIV, 0.5) *
						Math.pow(cpm[39], 2)) /
						10
				)
			);
			if (nerfCP >= 4000) {
				baseAtk = Math.round(baseAtk * 0.91);
				baseDef = Math.round(baseDef * 0.91);
				baseHP = Math.round(baseHP * 0.91);
				maxCP = Math.floor(
					Math.max(
						10,
						((baseAtk + attackIV) *
							Math.pow(baseDef + defenseIV, 0.5) *
							Math.pow(baseHP + hpIV, 0.5) *
							Math.pow(cpm[level !== NaN ? level - 1 : 1], 2)) /
							10
					)
				);
			}
			setCP(maxCP);
		}
	}

	useEffect(updatePOGOValues, [
		props.statList,
		attackIV,
		defenseIV,
		hpIV,
		level,
	]);

	return (
		<div className="stat-menu">
			<div style={{ display: pogoDisplay ? "none" : "block" }}>
				<button
					onClick={() => {
						setPogoDisplay(true);
					}}>
					PoGO
				</button>
				{props.statList &&
					props.statList.map((stat, index) => (
						<Stat
							key={index}
							statName={stat.stat.name}
							statNumber={stat.base_stat}
						/>
					))}
			</div>

			<div style={{ display: pogoDisplay ? "block" : "none" }}>
				<button
					onClick={() => {
						setPogoDisplay(false);
					}}>
					Mainline
				</button>
				<Stat key={6} statName="cp" statNumber={cp} optionalLevel={level} />
				<br />
				<br />
				<div>
					<div
						style={{
							display: "flex",
							flexWrap: "wrap",
							justifyContent: "space-evenly",
						}}>
						<input
							id="lvl"
							type="number"
							min="1"
							max="50"
							value={level}
							onChange={() => {
								setLevel(parseInt(document.querySelector("#lvl").value || 1));
								updatePOGOValues();
							}}
						/>
					</div>
					<br />
					<br />
					<div
						style={{
							display: "flex",
							flexWrap: "wrap",
							justifyContent: "center",
						}}>
						<div
							style={{
								display: "flex",
								flexWrap: "wrap",
								justifyContent: "center",
								width: "50%",
							}}>
							<IVInput stat="atk" iv={attackIV} changeFunc={updatePOGOValues} />
							<IVInput
								stat="def"
								iv={defenseIV}
								changeFunc={updatePOGOValues}
							/>
							<IVInput stat="hp" iv={hpIV} changeFunc={updatePOGOValues} />
						</div>
					</div>
					<br />
					<center>
						<FaStar
							size="3em"
							color={
								ivTotal >= 24 && ivTotal != 45
									? "#d49831"
									: ivTotal >= 45
									? "#ba3838"
									: "lightgray"
							}
							style={{ margin: "2px 6px" }}
						/>
						<FaStar
							size="3em"
							color={
								ivTotal >= 31 && ivTotal != 45
									? "#d49831"
									: ivTotal >= 45
									? "#ba3838"
									: "lightgray"
							}
							style={{ margin: "2px 6px" }}
						/>
						<FaStar
							size="3em"
							color={
								ivTotal > 38 && ivTotal != 45
									? "#d49831"
									: ivTotal >= 45
									? "#ba3838"
									: "lightgray"
							}
							style={{ margin: "2px 6px" }}
						/>
					</center>
				</div>
			</div>
		</div>
	);
}

export default Stats;
