import Ability from "./Ability";

function Abilities(props) {
  return (
    <div className="ability-menu">
      {props.abilityList &&
        props.abilityList.map((ability, index) => (
          <>
            <Ability
              key={index}
              name={ability.ability.name.replace("-", " ")}
              fetchUrl={ability.ability.url}
              isHidden={ability.is_hidden}
            />
          </>
        ))}
    </div>
  );
}

export default Abilities;
