import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Proyects from "./components/Proyects";
import About from "./components/About";
import Footer from "./components/Footer";
export default function App() {
	return (
		<main className="dark text-foreground bg-gradient-to-br from-zinc-900 to-zinc-950 min-h-screen min-w-scren">
			<Navigation />
			<Hero />
			<Experience />
			<Proyects />
			<About />
			<Footer />
		</main>
	);
}
