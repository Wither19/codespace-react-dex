import { AnimatePresence, motion } from "framer-motion";

function PokemonNameHeader(props) {
  return (
    <>
      <h1
        className="pokemon-detail-header"
        style={{ color: props.info.shiny ? "gold" : "white", transition: "color 300ms" }}
      >
        #{props.info.number && props.info.number.toString().padStart(4, 0)} -&nbsp;
        {props.info.name && props.info.name.replace("-", " ")}
        <motion.img
          style={{ marginTop: 10, marginLeft: 12 }}
          src="https://archives.bulbagarden.net/media/upload/2/20/ShinyVIIIStar.png"
          initial={{ opacity: 0 }}
          animate={{ opacity: props.info.shiny ? 1 : 0 }}
        />
      </h1>

      <div className="jp">{props.info.japanese}</div>
      <sub>The {props.info.genus}</sub>
    </>
  );
}

export default PokemonNameHeader;
