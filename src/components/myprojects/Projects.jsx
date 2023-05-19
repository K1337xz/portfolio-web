import "./_Projects.scss";
import Projectcard from "../Projectcard";

export default function Projects() {
	return (
		<div className="portfolio">
			<div className="portfolio__top">
				<h3>Portfolio</h3>
				<p>
					Most of the projects in my portfolio are personal, but
					looking for comercial ones! Here are a few of them.
				</p>
			</div>
			<div className="portfolio__wrapper">
				<Projectcard />
			</div>
		</div>
	);
}
