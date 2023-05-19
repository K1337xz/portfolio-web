import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import "./_Projects.scss";
import space from "../../assets/k1337xz.github.io_Space-tourism-multi-page-website_.png";
import urlShortening from "../../assets/k1337xz.github.io_URL-shortening-API-landing-page_.png";

export default function Projects() {
	return (
		<div className="portfolio">
			<div className="portfolio__top">
				<h3>Portfolio</h3>
				<p>
					Most of the projects in my portfolio are personal.But
					looking for comercial ones!
				</p>
			</div>
			<div className="portfolio__wrapper">
				<div className="portfolio__card">
					<div className="portfolio__img">
						<img src={space} alt="space image" />
					</div>
					<div className="portfolio__text">
						<h4>Space Tourism</h4>
						<p>Space Tourism multi page website</p>
						<div className="stack">
							<p>SCSS</p>
							<p>JS/HTML5</p>
						</div>
						<div className="socials">
							<a
								href="https://github.com/K1337xz/Space-tourism-multi-page-website"
								target="_blank"
								className="socials__link"
							>
								Code <FontAwesomeIcon icon={faGithub} />
							</a>
							<a
								href="https://k1337xz.github.io/Space-tourism-multi-page-website/"
								target="_blank"
								className="socials__link"
							>
								Server
								<FontAwesomeIcon
									icon={faArrowUpRightFromSquare}
								/>
							</a>
						</div>
					</div>
				</div>
				<div className="portfolio__card--rev">
					<div className="portfolio__img--rev">
						<img src={urlShortening} alt="urlshortening website" />
					</div>
					<div className="portfolio__text">
						<h4>URL shortening API landing page</h4>
						<p>URL shortening API landing page</p>
						<div className="stack">
							<p>SCSS</p>
							<p>JS/HTML5/API</p>
						</div>
						<div className="socials">
							<a
								href="https://github.com/K1337xz/URL-shortening-API-landing-page"
								target="_blank"
								className="socials__link"
							>
								Code <FontAwesomeIcon icon={faGithub} />
							</a>
							<a
								href="https://k1337xz.github.io/URL-shortening-API-landing-page/"
								target="_blank"
								className="socials__link"
							>
								Server
								<FontAwesomeIcon
									icon={faArrowUpRightFromSquare}
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
