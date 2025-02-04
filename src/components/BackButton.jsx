import { FaArrowLeftLong } from "react-icons/fa6";

function BackButton(props) {
	return (
		<div style={{ position: "absolute", top: 0, left: 0 }}>
			<button className="back-btn" onClick={props.clickFunc}>
				<FaArrowLeftLong />
			</button>
		</div>
	);
}

export default BackButton;
