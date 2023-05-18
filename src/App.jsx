import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Mainsection from "./components/mainsection/Mainsection";
import Aboutmesection from "./components/aboutmesection/Aboutmesection";
import Myskils from "./components/myskils/Techstack";
import Current from "./components/currentlearning/Current";
import Projects from "./components/myprojects/Projects";
import "./App.scss";

function App() {
	return (
		<>
			<Navbar />
			<main className="container">
				<Mainsection />
				<Aboutmesection />
				<Myskils />
				<Current />
				<Projects />
			</main>
		</>
	);
}

export default App;
