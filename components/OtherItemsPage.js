import React from "react";
import Link from "next/link";
import Image from "next/image";
import { creep } from "@/app/fonts";

const OtherItemsPage = ({
	name,
	id,
	episode,
	airdate,
	dimension,
	type,
	params,
}) => {
	return (
		<>
			<Link href={`/${params}/${id}`}>
				<div className="grid justify-center min-h-full p-3 text-center transition-shadow border-2 rounded-lg cursor-pointer justify-items-center border-green text-navy hover:border-8 hover:shadow-lg hover: hover:shadow-green">
					{/* <div className="grid mt-2 space-y-2 grid-cols"> */}
					<h1 className={`text-xl  ${creep.className}`}>{name}</h1>
					<h1>{type ? type : episode}</h1>

					{dimension === "unknown" ? (
						<span className="text-white"> unknown </span>
					) : (
						<h3>{dimension}</h3>
					)}

					{airdate === "unknown" ? (
						<span className="text-white"> unknown </span>
					) : (
						<h3>{airdate}</h3>
					)}
				</div>
				{/* </div> */}
			</Link>
		</>
	);
};

export default OtherItemsPage;

// {dimension && dimension === "unknown" ? (
//     <span className="text-white"> unknown </span>
// ) : (
//     <h1>{dimension}</h1>
// )}

{
	/* <Link href={`/${params}/${id}`}>
<div className="grid justify-center p-3 text-center transition-shadow border-2 rounded-lg cursor-pointer justify-items-center border-navy text-navy hover:border-8 hover:shadow-lg hover: hover:shadow-pink">
	<div className="grid mt-2 space-y-2 grid-cols">
		<h1 className={`text-xl  ${creep.className}`}>{name}</h1>
		<h1>{type ? type : episode}</h1>

		{dimension === "unknown" ? (
			<span className="text-white"> unknown </span>
		) : (
			<h3>{dimension}</h3>
		)}

		{airdate === "unknown" ? (
			<span className="text-white"> unknown </span>
		) : (
			<h3>{airdate}</h3>
		)}
	</div>
</div>
</Link> */
}
