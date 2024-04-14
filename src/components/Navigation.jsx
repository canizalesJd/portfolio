import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Link,
} from "@nextui-org/react";

const Navigation = () => {
	return (
		<Navbar position="sticky" isBordered>
			<NavbarBrand>
				<h1 className="text-xl font-serif font-bold">Jose Canizales</h1>
			</NavbarBrand>
			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				<NavbarItem>
					<Link color="foreground" href="#">
						Features
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color="foreground" href="#">
						Customers
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color="foreground" href="#">
						Integrations
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify="end">
				<NavbarItem>Dark / Light</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
};
export default Navigation;
