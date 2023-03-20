import React from "react";
import OtherPages from "@/components/OtherPages";
import Link from "next/link";

const fecthOthers = async (others) => {
	const response = await fetch(`https://rickandmortyapi.com/api/${others}`);
	return response.json();
};

const Others = async ({ params }) => {
	const others = params.others;
	const data = await fecthOthers(others);
	const results = data.results;
	console.log(others);

	return (
		<div>
			<OtherPages results={results} params={others} />
		</div>
	);
};

export default Others;

{
	/* <div className="mb-8 space-x-4 text-2xl text-center">
				{page === 1 ? null : (
					<Link
						className="p-2 text-white border-2 rounded-md bg-navy hover:bg-green hover:text-pink"
						href={`/${others}/?page=${page - 1}`}
						// href={`/locations/?page=${page - 1}`}
					>
						Previus Page
					</Link>
				)}
				{page === 7 ? null : (
					<Link
						className="p-2 px-6 text-white border-2 rounded-md bg-navy hover:bg-green hover:text-pink"
						href={`/${others}/?page=${page + 1}`}
						// href={`/locations/?page=${page + 1}`}
					>
						Next Page
					</Link>
				)}
			</div> */
}

// const fecthData = async (others, page) => {
// 	const response = await fetch(
// 		`https://rickandmortyapi.com/api/${others}/?page=${page}`
// 	);
// 	return response.json();
// };

// const page = Number(searchParams.page) || 1;
// const othersData = await fecthData(others, page);
