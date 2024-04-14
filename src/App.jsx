import Navigation from "./components/Navigation";
import Hero from "./components/Hero";

export default function App() {
	return (
		<main className="dark text-foreground bg-background min-h-screen min-w-scren overflow-hidden">
			<Navigation />
			<Hero />
		</main>
	);
}
