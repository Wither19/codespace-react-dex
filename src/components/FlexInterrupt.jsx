function FlexInterrupt(props) {
  return (
    <div id={props.useId ? props.children.toLowerCase() : ""} className="flex-interrupt">
      <h1>{props.children}</h1>
    </div>
  );
}

export default FlexInterrupt;
