import React from "react";
import Image from "next/image";
import Link from "next/link";
import { creep } from "@/app/fonts";

const Footer = () => {
	return (
		<footer className="bg-navy">
			<div className="flex items-center justify-between h-32 p-12 overflow-hidden sm:p-20 md:h-56">
				<Link href="/">
					<Image
						src="/footer.png"
						width={180}
						height={180}
						alt="rickandmorty logo"
						className="overflow-hidden"
					/>
				</Link>
				<Link href="/character">
					<h3 className={`${creep.className} text-xl sm:text-4xl text-green `}>
						Wubba Lubba Dub Dub!
					</h3>
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
