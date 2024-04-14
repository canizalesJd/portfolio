import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Proyects from "./components/Proyects";
export default function App() {
	return (
		<main className="dark text-foreground bg-background min-h-screen min-w-scren">
			<Navigation />
			<Hero />
			<Experience />
			<Proyects />
		</main>
	);
}
