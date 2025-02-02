function FlavorText(props) {
  return (
    <div className="flex-container">
      <div className="flavor-container">
        <p>{props.text}</p>
        <div>Pokémon {props.game}</div>
      </div>
    </div>
  );
}

export default FlavorText;
