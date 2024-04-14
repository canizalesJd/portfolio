// tailwind.config.js
import { nextui } from "@nextui-org/react";
const plugin = require("tailwindcss/plugin");
const flattenColorPalette = require("tailwindcss/lib/util/flattenColorPalette");
const svgToDataUri = require("mini-svg-data-uri");
/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		fontFamily: {
			sans: ["Inter", "sans-serif"],
		},
		extend: {},
	},
	darkMode: "class",
	plugins: [
		nextui(),
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					"bg-grid": (value) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" stroke="${value}" fill="none"><path d="M64 0H0V64"/></svg>`
						)}")`,
					}),
				},
				{
					values: flattenColorPalette(theme("backgroundColor")),
					type: ["color"],
				}
			);

			matchUtilities(
				{
					"bg-grid": (value) => ({
						backgroundSize: value,
					}),
				},
				{
					values: theme("spacing"),
					type: ["number", "length", "any"],
				}
			);
		}),
	],
};
