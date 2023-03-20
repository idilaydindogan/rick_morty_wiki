import React from "react";
import SingleCharPage from "@/components/SingleCharPage";
import OtherItemsPage from "@/components/OtherItemsPage";
import SingleOthersPage from "@/components/SingleOthersPage";

const fecthId = async (id) => {
	const response = await fetch(
		`https://rickandmortyapi.com/api/character/${id}`
	);
	return response.json();
};

const CharId = async ({ params }) => {
	const data = await fecthId(params.id);
	const results = data.results;

	return (
		<div>
			<SingleCharPage data={data} />
		</div>
	);
};

export default CharId;
