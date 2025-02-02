import { useEffect, useState } from "react";
import axios from "axios";

function Move(props) {
	return (
		<div>
			<p>{props.name}</p>
		</div>
	);
}

export default Move;
