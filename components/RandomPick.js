"use client";
import { creep } from "../app/fonts";
import React from "react";
import { useState } from "react";
import Image from "next/image";

export const apiUrl = "https://rickandmortyapi.com/api/character";
export const randomNumber = (min, max) => {
	return Math.floor(Math.random() * (max - min) + min);
};

const Random = () => {
	const [chars, setChars] = useState(null);
	const [error, setError] = useState(null);

	const charId = randomNumber(1, 826);

	const handleClick = async (id) => {
		try {
			id = charId;
			setError(null);

			const response = await fetch(`${apiUrl}/${id}`);
			const jsonResponse = await response.json();
			setChars(jsonResponse);
		} catch (error) {
			setError(error);
			setChars(null);
		}
	};

	// const handleRandom = () => {
	// 	return setChars(randomNumber(1, 826));
	// };

	// const fetchRandom = async (chars) => {
	// 	const response = await fetch(`${apiUrl}/${chars}`);
	// 	const data = response.json();
	// 	return data;
	// };
	// fetchRandom(chars);

	return (
		<div className="grid grid-cols-1 mb-10 justify-items-center">
			<button
				onClick={handleClick}
				className={`${creep.className} flex items-center text-2xl sm:text-4xl text-center text-green bg-navy border-4 sm:border-8 rounded-lg py-4 px-8 w-86 hover:bg-pink hover:text-navy hover:border-8`}
			>
				Pick a Random Character
			</button>
			{chars && (
				<div className="grid grid-cols-1 py-4 my-4 space-y-2 text-lg border-4 rounded-lg sm:space-y-3 sm:border-8 sm:text-lg justify-items-center text-navy border-navy">
					<Image
						src={chars.image}
						width={300}
						height={300}
						className="ml-8 mr-8 sm:ml-14 sm:mr-14"
						alt={chars.name}
					/>
					<h2 className={`${creep.className} text-3xl`}>{chars.name}</h2>
					<h2>{chars.species}</h2>
					<h2>{chars.type}</h2>
					<h2>From {chars.location.name}</h2>
				</div>
			)}
		</div>
	);
};

export default Random;
