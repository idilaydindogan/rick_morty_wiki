import React from "react";
import OtherItemsPage from "./OtherItemsPage";

const OtherPages = ({ results, params }) => {
	return (
		<div className="grid grid-cols-1 gap-3 px-8 py-4 m-auto sm:grid-cols-2 md:grid-cols-4">
			{results.map((result) => (
				<div key={results.id}>
					<OtherItemsPage
						name={result.name}
						type={result.type}
						airdate={result.air_date}
						episode={result.episode}
						dimension={result.dimension}
						image={result.image}
						residents={result.residents}
						id={result.id}
						params={params}
					/>
				</div>
			))}
		</div>
	);
};

export default OtherPages;
