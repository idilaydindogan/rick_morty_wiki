import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
	title: "Rick & Morty",
	description: "Wubba Lubba Dub Dub! Rick and Morty",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="flex flex-col justify-between">
				<Header />
				<NavBar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
