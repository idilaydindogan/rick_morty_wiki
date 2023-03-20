import React from "react";
import NavbarItem from "./NavbarItem";
import { creep } from "@/app/fonts";

const NavBar = () => {
	return (
		<div
			className={`flex justify-center pt-5 space-x-6 text-base sm:text-xl text-navy ${creep.className}`}
		>
			<NavbarItem title="Characters" params="/character" />
			<NavbarItem title="Species" params="/species" />
			<NavbarItem title="Episodes" params="/episode" />
			<NavbarItem title="Locations" params="/location" />
		</div>
	);
};

export default NavBar;
