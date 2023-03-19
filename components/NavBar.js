import React from "react";
import NavbarItem from "./NavbarItem";
import { creep } from "@/app/fonts";

const NavBar = () => {
	return (
		<div
			className={`flex justify-center pt-5 space-x-6 text-base text-xl sm:text-xl text-navy ${creep.className}`}
		>
			<NavbarItem title="Characters" params="/character" />
			<NavbarItem title="Species" params="/species" />
			<NavbarItem title="Episodes" params="/episodes" />
			<NavbarItem title="Locations" params="/locations" />
		</div>
	);
};

export default NavBar;
