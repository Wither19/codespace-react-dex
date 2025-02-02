import { FaArrowUpLong } from "react-icons/fa6";

function GoBackUp(props) {
  return (
    <div onClick={() => document.querySelector(".dex-title").scrollIntoView({ behavior: "smooth" })} className="back-up-btn">
      <FaArrowUpLong onClick={props.scrollFunc} />
    </div>
  );
}

export default GoBackUp;
