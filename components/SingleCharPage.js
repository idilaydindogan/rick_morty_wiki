import React from "react";
import Image from "next/image";
import { creep } from "@/app/fonts";

const SingleCharPage = ({ data }) => {
	return (
		<div className="flex items-center justify-center">
			<div className="grid justify-center max-w-6xl p-4 m-8 border rounded-lg border-green justify-items-center sm:pt-4 sm:grid-cols-2 md:space-x-6">
				<Image
					src={data.image}
					width={200}
					height={100}
					alt={data.title}
					className="rounded-lg justify-self-center sm:w-80 "
					// placeholder="blur"
					// blurDataURL="/spinner.svg"
					style={{ maxWidth: "100%", height: "100%" }}
				/>
				<div className="flex flex-col mt-3 text-center sm:mt-0">
					<h2
						className={`mb-3 text-4xl text-green font-bold ${creep.className}`}
					>
						{data.name}
					</h2>
					<p className="mt-2 text-navy">
						<span className="mr-1 font-semibold ">Species: </span>
						{data.species}
					</p>
					<p className="mt-2 text-navy">
						<span className="mr-1 font-semibold ">Status: </span>
						{data.status}
					</p>

					{data.origin.name === "unknown" ? null : (
						<p className="mt-2 text-navy">
							<span className="mr-1 font-semibold ">Origin: </span>
							{data.origin.name}
						</p>
					)}

					{data.location.name === "unknown" ? null : (
						<p className="mt-2 text-navy">
							<span className="mr-1 font-semibold ">Home: </span>
							{data.location.name}
						</p>
					)}
					{data.created === "unknown" ? null : (
						<p className="mt-2 text-navy">
							<span className="mr-1 font-semibold ">Created at: </span>
							{data.created}
						</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default SingleCharPage;

{
	/* <p className="flex mt-2 space-x-2">
        <span className="mr-1 font-semibold ">Genre: </span>
        {data.genres.map((genre) => (
            <div key={genre.id} className="">
                {genre.name}
            </div>
        ))}
    </p> */
}
