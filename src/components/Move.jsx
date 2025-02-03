import { useEffect, useState } from "react";
import axios from "axios";

function Move(props) {
	return (
		<div>
			<p>{props.name}</p>
			{!props.name && "pootis"}
		</div>
	);
}

export default Move;
