"use client";
import React from "react";
import Image from "next/image";
import rm1 from "../public/rm1.jpeg";
import rm2 from "../public/rm2.webp";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Carousels = () => {
	return (
		<div className="px-6 py-6 md:px-20">
			<Carousel>
				<div>
					<Image src={rm1} width={900} height={300} alt="rickandmorty" />
				</div>

				<div>
					<Image src={rm2} width={900} height={300} alt="rickandmorty" />
				</div>
			</Carousel>
		</div>
		// <div className="max-w-[1400px] h-[780px] w-full m-auto py-10 px-4 relative">
		// 	<div className="w-full h-full duration-500 bg-center bg-cover rounden-2xl">
		// 		<Image src={rm} width={1000} height={300} />
		// 	</div>
		// </div>

		// <div className="relative">
		// 	{/* <div className="relative h-56 overflow-hidden rounded-lg sm:h-64 xl:h-80 2xl:h-96">
		// 		<div className="hidden duration-700 ease-in-out" data-carousel-item>
		// 			<span className="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800">
		// 				First Slide
		// 			</span> */}
		// 	<Image src={rm} width={1000} height={300} />
		// 	{/* </div> */}

		// 	{/* <div
		// 			classname="hidden duration-700 ease-in-out"
		// 			data-carousel-item
		// 		></div>
		// 	</div> */}
		// </div>
	);
};

export default Carousels;
