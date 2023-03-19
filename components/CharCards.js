import React from "react";
import Image from "next/image";

const CharCards = ({ name, status, image, species, origin }) => {
	return (
		<div className="grid justify-items-center justfy-center text-center border-2 border-navy text-navy rounded-lg p-3 min-h-full">
			<Image
				src={image}
				width={300}
				height={300}
				alt={name}
				className="rounded-md justify-self-center"
			/>
			<div className="flex flex-col mt-2 space-y-2">
				<h1 className="text-xl">{name}</h1>
				<h1>{species}</h1>

				{origin === "unknown" ? (
					<span className="text-white"> unknown </span>
				) : (
					<h1>
						<span className="pr-1">From:</span> {origin}
					</h1>
				)}
			</div>
		</div>
	);
};

export default CharCards;

// {status === "unknown" ? null : status}{" "}
