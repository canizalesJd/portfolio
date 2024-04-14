import { Image, Chip, Button, LinkIcon, Link } from "@nextui-org/react";
import JavaScriptIcon from "./icons/JavaScriptIcon";
import CSSIcon from "./icons/CSSIcon";
import ReactIcon from "./icons/ReactIcon";
import TailwindCssIcon from "./icons/TailwindCssIcon";
import GithubIcon from "./icons/GithubIcon";

const Proyects = () => {
	return (
		<div className="flex flex-col container mx-auto max-w-2xl pl-5 py-5">
			<h2 className="mb-5 text-3xl">Proyects</h2>
			<div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5">
				<div>
					<div className="pr-5 mb-3">
						<Image
							alt="Weather App"
							src="../src/images/weatherApp.webp"
							className="w-full"
							isZoomed
						/>
					</div>
					<div className="flex flex-col">
						<h3 className="text-xl">Weather App</h3>
						<div className="flex gap-4 items-center my-2">
							<Chip
								className="px-2"
								startContent={<JavaScriptIcon size={18} />}
								variant="flat"
								color="default">
								JavaScript
							</Chip>
							<Chip
								className="px-2 bg-[#2682aa]"
								startContent={<CSSIcon size={18} />}
								variant="flat"
								color="default">
								CSS
							</Chip>
						</div>
						<p className="text-gray-300">
							A lightweight, fully responsive weather app created with Vanilla
							JavaScript and CSS. Precise weather data, with customizable
							options such as preferred locations, temperature and wind speed
							units.
						</p>
						<div className="flex gap-3 mt-3">
							<Link
								href="https://github.com/canizalesJd/weather-app"
								target="_blank">
								<Button
									auto
									color="default"
									startContent={<GithubIcon size="18" />}
									variant="ghost">
									Code
								</Button>
							</Link>
							<Link
								href="https://canizalesjd.github.io/weather-app/"
								target="_blank">
								<Button
									auto
									color="default"
									className="bg-indigo-600"
									startContent={<LinkIcon size="18" />}>
									Live Demo
								</Button>
							</Link>
						</div>
					</div>
				</div>
				<div>
					<div className="pr-5 mb-3">
						<Image
							alt="Resume Builder"
							src="../src/images/resumeBuilder.webp"
							className="w-full"
							isZoomed
						/>
					</div>
					<div className="flex flex-col">
						<h3 className="text-xl">Resume Builder</h3>
						<div className="flex gap-4 items-center my-2">
							<Chip
								className="px-2"
								startContent={<ReactIcon size={18} />}
								variant="flat"
								color="default">
								React
							</Chip>
							<Chip
								className="px-2 bg-[#003159]"
								startContent={<TailwindCssIcon size={18} />}
								variant="flat"
								color="default">
								Tailwind CSS
							</Chip>
						</div>
						<p className="text-gray-300">
							Allows users to create a professional resume with customizable
							options such as name, email, phone number, education, skills,
							projects and more.
						</p>
						<div className="flex gap-3 mt-3">
							<Link
								href="https://github.com/canizalesJd/resume-builder"
								target="_blank">
								<Button
									auto
									color="default"
									startContent={<GithubIcon size="18" />}
									variant="ghost">
									Code
								</Button>
							</Link>
							<Link
								href="https://resume-builder-one-jade.vercel.app/"
								target="_blank">
								<Button
									auto
									color="default"
									className="bg-indigo-600"
									startContent={<LinkIcon size="18" />}>
									Live Demo
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Proyects;
