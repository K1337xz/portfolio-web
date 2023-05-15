import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Mainsection from "./components/mainsection/Mainsection";
import "./App.scss";

function App() {
	return (
		<>
			<Navbar />
			<main className="container">
				<Mainsection />
			</main>
		</>
	);
}

export default App;
