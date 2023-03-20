import React from "react";
import CharCards from "./CharCards";

const Characters = ({ results }) => {
	return (
		<div className="grid grid-cols-1 gap-3 px-8 py-4 m-auto sm:grid-cols-2 md:grid-cols-4">
			{results.map((result) => (
				<div key={results.id}>
					<CharCards
						name={result.name}
						status={result.status}
						species={result.species}
						origin={result.origin.name}
						image={result.image}
						id={result.id}
					/>
				</div>
			))}
		</div>
	);
};

export default Characters;
