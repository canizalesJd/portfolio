import { Image, Button, Link } from "@nextui-org/react";
import { MagneticText } from "./ui/MagneticText";
import LinkedInIcon from "./icons/LinkedInIcon";
import joseCanizales from "../images/jose-canizales.jpeg";

const Hero = () => {
	return (
		<div className="hero container  mx-auto h-[30rem] max-h-scren flex flex-col justify-center max-w-3xl">
			<div className="h-[35rem] absolute inset-0 bg-grid-white/10 bg-grid-16 [mask-image:linear-gradient(180deg,black,transparent)]"></div>
			<div className="pl-5">
				<Image
					width={150}
					height={150}
					alt="Jose Canizales"
					src={joseCanizales}
					className="mb-3"
					shadow="md"
				/>
				<p className="text-4xl font-bold">Hi, I&apos;m Jose</p>
				<MagneticText
					body={"Web Developer"}
					as="div"
					className="w-full max-w-xl font-var text-4xl md:text-6xl">
					{(tokens) =>
						tokens.map((token, index) => (
							<MagneticText.Token
								key={index}
								body={token}
								className="inline-block cursor-default whitespace-pre"
							/>
						))
					}
				</MagneticText>
				<p className="text-lg max-w-xl font-light mt-1 text-gray-400">
					2+ years of professional experience. Based in San Jose, Costa Rica.
				</p>
				<p className="text-xl max-w-xl mt-1">
					I love building{" "}
					<span className="bg-gradient-to-r from-blue-500 via-green-400 to-indigo-500 inline-block text-transparent bg-clip-text">
						modern, good looking and efficient web apps.
					</span>
				</p>
				<div className="mt-5 flex">
					<Link href="mailto:canizalesjd@gmail.com">
						<Button
							color="primary"
							variant="solid"
							className="mr-3 bg-emerald-600"
							size="lg">
							Contact Me
						</Button>
					</Link>
					<Link
						href="https://www.linkedin.com/in/jose-ca%C3%B1izales-a3a216197/"
						target="_blank">
						<Button
							color="primary"
							variant="bordered"
							size="lg"
							startContent={<LinkedInIcon className="text-2xl" />}>
							LinkedIn
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};
export default Hero;
