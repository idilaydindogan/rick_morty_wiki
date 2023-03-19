import { Creepster } from "next/font/google";
import { Inter } from "next/font/google";

export const creep = Creepster({
	subsets: ["latin"],
	weight: "400",
	display: "swap",
	variable: "--font-creep",
});
export const inter = Inter({
	subsets: ["latin"],
	weight: "400",
	display: "swap",
	variable: "--font-inter",
});
