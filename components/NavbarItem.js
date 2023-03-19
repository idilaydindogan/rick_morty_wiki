import React from "react";
import Link from "next/link";

const NavbarItem = ({ title, params }) => {
	return (
		<div>
			<Link
				href={`${params}`}
				className={`hover:text-green hover:bg-navy rounded-md p-2 hover:shadow-md hover:shadow-green duration-300 `}
			>
				{title}
			</Link>
		</div>
	);
};

export default NavbarItem;
