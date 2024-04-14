import { Navbar, NavbarContent, NavbarItem, Link } from "@nextui-org/react";

const Navigation = () => {
	return (
		<Navbar maxWidth="2xl" shouldHideOnScroll>
			<NavbarContent className="flex gap-4 w-full" justify="center">
				<NavbarItem>
					<Link color="foreground" href="#">
						Experience
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color="foreground" href="#">
						Proyects
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color="foreground" href="#">
						About
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color="foreground" href="#">
						Contact
					</Link>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
};
export default Navigation;
