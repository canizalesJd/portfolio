import { Image } from "@nextui-org/react";

const About = () => {
	return (
		<div
			className="flex flex-col container mx-auto max-w-2xl pl-5 py-5"
			id="about">
			<h2 className="mb-3 text-3xl">About Me</h2>
			<div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
				<p className="text-gray-300">
					My name is Jose Canizales. I&apos;ve been coding since the age of 15
					when I built my first website for a school project.
					<br />I hold an
					<span className="text-emerald-500 font-semibold">
						{" "}
						Associate&apos;s Degree in Web Design and Development
					</span>
					, and I&apos;m currently pursuing a Bachelor&apos;s Degree in Computer
					Science. I&apos;m driven by my curiosity to explore new technologies
					and to improve my skills.
					<br />
					On my free time,{" "}
					<span className="text-emerald-500 font-semibold">
						I enjoy building web applications{" "}
					</span>
					and experimenting with the newest frameworks and libraries.
				</p>
				<Image
					src="../src/images/about-me.jpeg"
					alt="Jose Canizales"
					isZoomed
					className="w-full"
				/>
			</div>
		</div>
	);
};
export default About;
