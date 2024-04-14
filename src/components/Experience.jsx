import ExperienceItems from "./data/ExperienceItems";

const Experience = () => {
	return (
		<div
			className="flex flex-col container mx-auto max-w-3xl pl-5 py-5"
			id="experience">
			<h2 className="mb-5 text-3xl">Work Experience</h2>
			<ol className="relative border-s border-gray-600">
				{ExperienceItems.map((item, index) => {
					return (
						<li className="mb-10 ms-4" key={index}>
							<div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-blue-900 bg-blue-700"></div>
							<time className="mb-1 text-sm font-normal leading-none text-gray-300">
								{item.time}
							</time>
							<h3 className="text-lg font-semibold text-white">
								{item.jobTitle}
							</h3>
							<p className="mb-1 text-md font-normal leading-none text-gray-300 my-1">
								{item.location}
							</p>
							<p className="mb-4 text-base font-normal text-gray-400 max-w-xl">
								{item.description}
							</p>
						</li>
					);
				})}
			</ol>
		</div>
	);
};
export default Experience;
