import Image from "next/image";
import Carousel from "@/components/Carousel";
import RandomPick from "@/components/RandomPick";

export default function Home() {
	return (
		<main>
			<Carousel />
			<RandomPick />
		</main>
	);
}
