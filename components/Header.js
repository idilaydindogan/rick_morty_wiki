import React from "react";
import Image from "next/image";
import Link from "next/link";
// import logo from "../public/logo.png";

const Header = () => {
	return (
		<header className="w-screen bg-navy">
			<div className="flex items-center justify-center h-32 md:h-40">
				<Link href="/">
					<Image
						src="/logo.png"
						width={350}
						height={180}
						alt="rickandmorty logo"
					/>
				</Link>
			</div>
		</header>
	);
};

export default Header;
