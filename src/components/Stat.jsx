import NumberFlow from "@number-flow/react";

const statColors = ["#FF0000", "#FFA500", "#FFFF00", "#00FF00", "#71E1B3"];
// 40, 65, 80, 105, 170

function Stat(props) {
  function getStatColors(stat) {
    if (stat < 40) {
      return statColors[0];
    } else if ((stat >= 40) & (stat < 65)) {
      return statColors[1];
    } else if (stat >= 65 && stat < 80) {
      return statColors[2];
    } else if (stat >= 80 && stat < 105) {
      return statColors[3];
    } else {
      return statColors[4];
    }
  }

  return (
    <div>
      <h3 style={{ textAlign: "center", textTransform: "capitalize" }}>
        {props.statName == "hp" ? "HP" : props.statName == "cp" ? "CP" : props.statName.replace("-", " ")}
      </h3>
      {props.optionalLevel ? (
        <>
          <sub
            style={{
              opacity: props.optionalLevel == 15 || props.optionalLevel == 20 || props.optionalLevel == 25 ? 1 : 0,
            }}
          >
            {props.statName != "cp"
              ? "sample text"
              : props.optionalLevel == 15
              ? "Research"
              : props.optionalLevel == 20
              ? "Raid / Egg"
              : props.optionalLevel == 25
              ? "Raid (Weather Boost)"
              : "sample text"}
          </sub>
          <br />
        </>
      ) : null}
      {/* Decides BG Color of each stat bar, and scales based on CP or a mainline stat */}
      <div
        style={{
          backgroundColor: getStatColors(props.statName == "cp" ? props.statNumber / 26 : props.statNumber),
          width:
            props.statName == "cp"
              ? Math.floor((props.statNumber / 6672) * 500)
              : Math.floor((props.statNumber / 255) * 500),
        }}
        className="bar"
      >
        <NumberFlow value={props.statNumber} />
      </div>
    </div>
  );
}

export default Stat;
