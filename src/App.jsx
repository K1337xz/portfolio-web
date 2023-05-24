import Navbar from "./components/navbar/Navbar";
import Mainsection from "./components/mainsection/Mainsection";
import Aboutmesection from "./components/aboutmesection/Aboutmesection";
import Myskils from "./components/myskils/Techstack";
import Current from "./components/currentlearning/Current";
import Projects from "./components/myprojects/Projects";
import Footer from "./components/footer/Footer";
import Contactform from "./components/contactform/Contactform";
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
				<Contactform />
			</main>
			<Footer />
		</>
	);
}

export default App;
