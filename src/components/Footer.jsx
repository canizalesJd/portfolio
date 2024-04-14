import { Button, Link } from "@nextui-org/react";
import GithubIcon from "./icons/GithubIcon";
import LinkedInIcon from "./icons/LinkedInIcon";

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<div className="max-w-3xl footer mx-auto  grid grid-cols-2  py-10 pl-5 items-center">
			<p className="text-md text-gray-300">&copy; {year} Jose Canizales</p>
			<div className="flex gap-3 items-center justify-end">
				<Link color="foreground" he>
					<Button isIconOnly variant="default" className="bg-gray-900">
						<GithubIcon className="text-2xl" />
					</Button>
				</Link>
				<Button isIconOnly color="primary">
					<LinkedInIcon className="text-2xl" />
				</Button>
			</div>
		</div>
	);
};
export default Footer;
