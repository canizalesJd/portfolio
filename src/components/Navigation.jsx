import { Navbar, NavbarContent, NavbarItem, Link } from "@nextui-org/react";

const Navigation = () => {
	return (
		<Navbar maxWidth="2xl" shouldHideOnScroll>
			<NavbarContent className="flex gap-4 w-full" justify="center">
				<NavbarItem>
					<Link
						color="foreground"
						className="cursor-pointer"
						onClick={() => {
							const experience = document.getElementById("experience");
							experience.scrollIntoView({ behavior: "smooth" });
						}}>
						Experience
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link
						color="foreground"
						className="cursor-pointer"
						onClick={() => {
							const proyects = document.getElementById("proyects");
							proyects.scrollIntoView({ behavior: "smooth" });
						}}>
						Proyects
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link
						color="foreground"
						className="cursor-pointer"
						onClick={() => {
							const about = document.getElementById("about");
							about.scrollIntoView({ behavior: "smooth" });
						}}>
						About
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link href="mailto:canizalesjd@gmai.com" className="text-emerald-300">
						Contact
					</Link>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
};
export default Navigation;
