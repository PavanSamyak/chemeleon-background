import { Button } from "react-aria-components";
import "./index.css";
import { useEffect, useState } from "react";

// To-do change color of bg on click of button with persistant storage

const colors = [
	{ id: 19, name: "slate" },
	{ id: 20, name: "gray" },
	{ id: 1, name: "red" },
	{ id: 2, name: "orange" },
	{ id: 3, name: "yellow" },
	{ id: 4, name: "lime" },
	{ id: 5, name: "green" },
	{ id: 6, name: "forest" },
	{ id: 7, name: "mint" },
	{ id: 8, name: "teal" },
	{ id: 9, name: "cyan" },
	{ id: 10, name: "sky" },
	{ id: 11, name: "blue" },
	{ id: 12, name: "indigo" },
	{ id: 13, name: "purple" },
	{ id: 14, name: "violet" },
	{ id: 15, name: "magenta" },
	{ id: 16, name: "pink" },
	{ id: 17, name: "crimson" },
	{ id: 18, name: "brown" },
];

export function App() {
	const [color, setColor] = useState("background");
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
	const [themeText, setThemeText] = useState(localStorage.getItem("themeText") || "Toggle to light mode");

	localStorage.setItem("theme", theme);
	// localStorage.setItem("color", color);
	localStorage.setItem("themeText", themeText);
	document.body.classList.add(theme);

	function themeToggle() {
		document.body.classList.contains("dark")
			? document.body.classList.remove("dark")
			: document.body.classList.add("dark");
		setTheme(theme === "dark" ? "light" : "dark");
		setThemeText(theme === "dark" ? "Toggle to light mode" : "Toggle to dark mode");
		localStorage.setItem("themeText", themeText);
	}

	return (
		<div
			className="flex flex-col h-screen w-full"
			style={{
				backgroundColor: `var(--color-${color})`,
			}}
		>
			<header className="bg-background-2 border-b border-separator py-4">
				<h1 className="text-center headline  em">
					Background-Color Chameleon 🦎
				</h1>
			</header>
			<main className="w-full h-full">
				<h2 className="capitalize text-9xl em text-center pt-28">
					{color}
				</h2>
				<div className="relative w-full flex justify-center top-[40vh]">
					<div
						className="absolute [mask-image:linear-gradient(to_right,black,transparent_4%,transparent_96%,black)]
    [-webkit-mask-image:linear-gradient(to_right,black,transparent_4%,transparent_96%,black)]
   pointer-events-none backdrop-blur-xs container overflow-x-scroll bar mx-auto rounded-full py-4 px-6 h-23"
					></div>
					<div
						className="absolute [mask-image:linear-gradient(to_right,black,transparent_3%,transparent_97%,black)]
    [-webkit-mask-image:linear-gradient(to_right,black,transparent_3%,transparent_97%,black)]
   pointer-events-none backdrop-blur-2xl container overflow-x-scroll bar mx-auto  rounded-full py-4 px-6 h-23"
					></div>
					<div
						className="absolute [mask-image:linear-gradient(to_right,black,transparent_3%,transparent_97%,black)]
    [-webkit-mask-image:linear-gradient(to_right,black,transparent_3%,transparent_97%,black)]
   pointer-events-none backdrop-blur-2xl container overflow-x-scroll bar mx-auto  rounded-full py-4 px-6 h-23"
					></div>
					<div
						className="absolute [mask-image:linear-gradient(to_right,black,transparent_2%,transparent_98%,black)]
    [-webkit-mask-image:linear-gradient(to_right,black,transparent_2%,transparent_98%,black)]
   pointer-events-none backdrop-blur-3xl container overflow-x-scroll bar mx-auto  rounded-full py-4 px-6 h-23"
					></div>
					<div
						className="absolute [mask-image:linear-gradient(to_right,black,transparent_2%,transparent_98%,black)]
    [-webkit-mask-image:linear-gradient(to_right,black,transparent_2%,transparent_98%,black)]
   pointer-events-none backdrop-blur-3xl container overflow-x-scroll bar mx-auto  rounded-full py-4 px-6 h-23"
					></div>
				</div>
				<div className="mt-[40vh] flex gap-4 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] container overflow-x-scroll bar mx-auto border border-separator  bg-grouped-3 rounded-full py-4 px-6">
					{colors.map((c) => (
						<Button
							key={c.id}
							onClick={() => setColor(c.name)}
							className="w-fit p-4 pr-3 pt-7 h-15 em text-right rounded-md capitalize cursor-pointer"
							style={{
								backgroundColor: `var(--color-${c.name})`,
							}}
						>
							<p className="pl-4 subheadline">{c.name}</p>
						</Button>
					))}
				</div>
			</main>
			<footer className="fixed flex w-full bottom-0 bg-background-2 border-t border-separator py-2 px-6 footnote justify-between">
				<Button onClick={themeToggle} className="hover:underline">
					{themeText}
				</Button>
				<p>Thanks for using my app ❤</p>
			</footer>
		</div>
	);
}

export default App;
