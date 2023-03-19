import React from "react";
import Link from "next/link";
import Characters from "@/components/Characters";

const fecthData = async (page) => {
	const response = fetch(
		`https://rickandmortyapi.com/api/character/?page=${page}`
	);
	return (await response).json();
};

const fecthLocation = async (page) => {
	const response = fetch(`https://rickandmortyapi.com/api/location`);
	return (await response).json();
};

const CharacterData = async ({ searchParams }) => {
	const page = Number(searchParams.page) || 1;
	const data = await fecthData(page);
	const results = data.results;

	const locationData = await fecthLocation();
	const locations = locationData.results;

	return (
		<div>
			<Characters results={results} searchParam={page} locations={locations} />
			<div className="text-center space-x-4 text-2xl mb-8">
				{page === 1 ? null : (
					<Link
						className="border-2 rounded-md p-2 bg-navy text-white hover:bg-green hover:text-pink"
						href={`/character/?page=${page - 1}`}
					>
						Previus Page
					</Link>
				)}
				{page === 42 ? null : (
					<Link
						className="border-2 rounded-md p-2 px-6 bg-navy text-white hover:bg-green hover:text-pink"
						href={`/character/?page=${page + 1}`}
					>
						Next Page
					</Link>
				)}
			</div>
		</div>
	);
};

export default CharacterData;
