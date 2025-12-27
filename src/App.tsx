import { Button } from "react-aria-components";
import "./index.css";
import { useState } from "react";

// To-do change color of bg on click of button with persistant storage

const colors = [
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
	{ id: 19, name: "slate" },
	{ id: 20, name: "gray" },
];

export function App() {
	const [color, setColor] = useState("background");

	return (
		<div
			className={`flex flex-col h-screen w-full`}
			style={{ backgroundColor: color }}
		>
			<header className="bg-background-2 border-b border-separator py-4">
				<h1 className="text-center title em">
					Background-Color Chameleon 🦎
				</h1>
			</header>
			<main className="w-full fixed top-[80vh]">
				<div className="flex gap-4 container overflow-x-scroll bar mx-auto border border-separator  bg-grouped rounded-full py-4 px-6">
					{colors.map((c) => (
						<Button
							key={c.id}
							onClick={() => setColor(c.name)}
							className={`w-fit p-4 h-full em text-center rounded-2xl capitalize cursor-pointer`}
							style={{ backgroundColor: c.name }}
						>
							{c.name}
						</Button>
					))}
				</div>
			</main>
			<footer className="fixed w-full bottom-0 bg-background-2 border-t border-separator py-2 px-6 footnote text-right">
				Thanks for using
			</footer>
		</div>
	);
}

export default App;
