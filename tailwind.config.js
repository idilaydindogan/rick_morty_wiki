/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
		colors: {
			navy: "#3a4767",
			turq: "#01b4c6",
			green: "#97ce4c",
			pink: "#f675da",
			white: "#fff",
			black: "#000",
		},
	},
	plugins: [],
};
