const Experience = () => {
	return (
		<div className="flex flex-col container mx-auto max-w-2xl pl-5">
			<h2 className="mb-5 text-3xl">Work Experience</h2>
			<ol className="relative border-s border-gray-600">
				<li className="mb-10 ms-4">
					<div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-blue-900 bg-blue-700"></div>
					<time className="mb-1 text-sm font-normal leading-none text-gray-300">
						February 2022 - Now
					</time>
					<h3 className="text-lg font-semibold text-white">
						Tool Builders Academy - Amazon Web Service (AWS)
					</h3>
					<p className="mb-1 text-md font-normal leading-none text-gray-300 my-1">
						San Jose, Costa Rica
					</p>
					<p className="mb-4 text-base font-normal text-gray-400">
						Developing and maintaining internal software tools and automation
						solutions for Customer Service Representatives. Streamlining
						workflows, and enhancing the overall customer experience and
						efficiency KPIs.
					</p>
				</li>
			</ol>
		</div>
	);
};
export default Experience;
