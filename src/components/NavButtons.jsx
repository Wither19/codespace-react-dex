function NavButtons(props) {
  return (
    <div className="pokemon-nav-buttons">
      <button onClick={props.leftFunc}>&#8592;</button>
      <button onClick={props.randomFunc}>Surprise Me!</button>
      <button onClick={props.rightFunc}>&#8594;</button>
    </div>
  );
}

export default NavButtons;
