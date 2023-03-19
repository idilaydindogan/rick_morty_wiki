import React from "react";
import CharCards from "./CharCards";

const Characters = ({ results, locations }) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3  m-auto px-8 py-4">
			{results.map((result) => (
				<div key={results.id}>
					<CharCards
						name={result.name}
						status={result.status}
						species={result.species}
						origin={locations.name}
						image={result.image}
					/>
				</div>
			))}
		</div>
	);
};

export default Characters;
