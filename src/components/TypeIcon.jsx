function TypeIcon(props) {
  return (
    <div className={`icon ${props.type}`}>
      <img
        src={`https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/5781623f147f1bf850f426cfe1874ba56a9b75ee/icons/${props.type}.svg`}
        alt={props.type}
      />
    </div>
  );
}

export default TypeIcon;
