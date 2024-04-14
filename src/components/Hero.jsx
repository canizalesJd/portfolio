import { Image } from "@nextui-org/react";
import { MagneticText } from "./ui/MagneticText";
const Hero = () => {
	return (
		<div className="hero container  mx-auto h-[30rem] max-h-scren flex flex-col justify-center items-center">
			<div className="h-[35rem] absolute inset-0 bg-grid-white/10 bg-grid-16 [mask-image:linear-gradient(180deg,black,transparent)]"></div>
			<div className="mx-auto pl-5">
				<Image
					width={150}
					height={150}
					alt="Jose Canizales"
					src="../src/images/jose-canizales.jpeg"
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
				<p className="text-lg max-w-xl font-light mt-1">
					2+ years of experience. Based in San Jose, Costa Rica.
				</p>
				<p className="text-xl max-w-xl mt-1">
					I love building modern, good looking and efficient web applications
				</p>
			</div>
		</div>
	);
};
export default Hero;
