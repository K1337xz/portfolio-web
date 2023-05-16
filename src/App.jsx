import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Mainsection from "./components/mainsection/Mainsection";
import Aboutmesection from "./components/aboutmesection/Aboutmesection";
import Myskils from "./components/myskils/Myskils";
import "./App.scss";

function App() {
	return (
		<>
			<Navbar />
			<main className="container">
				<Mainsection />
				<Aboutmesection />
				<Myskils />
			</main>
		</>
	);
}

export default App;
