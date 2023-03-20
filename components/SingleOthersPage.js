import React from "react";
import Image from "next/image";
import { creep } from "@/app/fonts";

const SingleOthersPage = ({ data }) => {
	return (
		<div className="grid items-center justify-center grid-cols-1">
			<div className="grid justify-center max-w-6xl p-4 m-8 border rounded-lg border-green justify-items-center sm:pt-4 md:space-x-6">
				<h2 className={`mb-3 text-4xl text-green font-bold ${creep.className}`}>
					{data.name}
				</h2>

				{data.episode ? (
					<p className="mt-2 text-navy">
						<span className="mr-1 font-semibold ">Episode: </span>
						{data.episode}
					</p>
				) : null}
				{data.air_date ? (
					<p className="mt-2 text-navy">
						<span className="mr-1 font-semibold ">Air Date: </span>
						{data.air_date}
					</p>
				) : null}

				{data.characters &&
					data.characters.map((chars) => (
						<p className="mt-2 text-navy" key={chars.id}>
							<span className="mr-1 font-semibold ">Characters: </span>
							{chars}
						</p>
					))}

				{data.type ? (
					data.type === "unknown" ? null : (
						<p className="mt-2 text-navy">
							<span className="mr-1 font-semibold ">Type: </span>
							{data.type}
						</p>
					)
				) : null}

				{data.dimension ? (
					data.dimension === "unknown" ? null : (
						<p className="mt-2 text-navy">
							<span className="mr-1 font-semibold ">Dimension: </span>
							{data.dimension}
						</p>
					)
				) : null}
				{data.residents &&
					data.residents.map((chars) => (
						<p className="mt-2 text-navy" key={chars.id}>
							<span className="mr-1 font-semibold ">Residents: </span>
							{chars}
						</p>
					))}
			</div>
		</div>
	);
};

export default SingleOthersPage;
