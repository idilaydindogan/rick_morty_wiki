import React from "react";
import Link from "next/link";
import Characters from "@/components/Characters";

const fecthData = async (page) => {
	const response = await fetch(
		`https://rickandmortyapi.com/api/character/?page=${page}`
	);
	return response.json();
};

const CharacterData = async ({ searchParams }) => {
	const page = Number(searchParams.page) || 1;
	const data = await fecthData(page);
	const results = data.results;

	return (
		<div>
			<Characters results={results} searchParam={page} />
			<div className="mb-8 space-x-4 text-2xl text-center">
				{page === 1 ? null : (
					<Link
						className="p-2 text-white border-2 rounded-md bg-navy hover:bg-green hover:text-pink"
						href={`/character/?page=${page - 1}`}
					>
						Previus Page
					</Link>
				)}
				{page === 42 ? null : (
					<Link
						className="p-2 px-6 text-white border-2 rounded-md bg-navy hover:bg-green hover:text-pink"
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
