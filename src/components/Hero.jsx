import { Image } from "@nextui-org/react";
const Hero = () => {
	return (
		<div className="hero container  mx-auto h-[40rem] max-h-scren flex flex-col justify-center items-center">
			<div className="mx-auto">
				<Image
					width={150}
					height={150}
					alt="Jose Canizales"
					src="../src/images/jose-canizales.jpeg"
					className="mb-3"
					shadow="lg"
				/>
				<p className="text-6xl font-bold">Hi, I&apos;m Jose</p>
				<p className="text-xl max-w-xl">
					2+ years of experience in Web Design and Development. Based in San
					Jose, Costa Rica.
				</p>
			</div>
		</div>
	);
};
export default Hero;
