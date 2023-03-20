import React from "react";
import SingleCharPage from "@/components/SingleCharPage";
import OtherItemsPage from "@/components/OtherItemsPage";
import SingleOthersPage from "@/components/SingleOthersPage";

const fecthId = async (others, id) => {
	const response = await fetch(
		`https://rickandmortyapi.com/api/${others}/${id}`
	);
	return response.json();
};

const CharId = async ({ params }) => {
	const others = params.others;
	const id = params.id;
	const data = await fecthId(others, id);
	const results = data.results;

	return (
		<div>
			<SingleOthersPage data={data} />
		</div>
	);
};

export default CharId;
// "location" ? "location" :
