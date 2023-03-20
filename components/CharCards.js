import React from "react";
import Image from "next/image";
import Link from "next/link";
import { creep } from "@/app/fonts";

const CharCards = ({ name, id, image, species, origin }) => {
	return (
		<>
			<Link href={`/character/${id}`}>
				<div className="grid justify-center min-h-full p-3 text-center transition-shadow border-2 rounded-lg cursor-pointer justify-items-center border-navy text-navy hover:shadow-md hover: hover:shadow-green">
					<Image
						src={image}
						width={300}
						height={300}
						alt={name}
						className="transition-opacity rounded-md justify-self-center"
					/>
					<div className="grid mt-2 space-y-2 // grid-cols">
						<h1 className={`text-xl  ${creep.className}`}>{name}</h1>
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
			</Link>
		</>
	);
};

export default CharCards;

// {status === "unknown" ? null : status}{" "}
