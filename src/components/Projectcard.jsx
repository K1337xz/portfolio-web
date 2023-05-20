import space from "../assets/k1337xz.github.io_Space-tourism-multi-page-website_.png";
import space2 from "../assets/k1337xz.github.io_Space-sec.png";
import space3 from "../assets/k1337xz.github.io_Space-thir.png";
import space4 from "../assets/k1337xz.github.io_Space-four.png";
import urlShortening from "../assets/k1337xz.github.io_URL-shortening-API-landing-page_.png";
import bookmark from "../assets/k1337xz.github.io_Bookmark-landing-page_.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Projectcard() {
	return (
		<>
			<div className="portfolio__card">
				<div className="portfolio__img">
					<div className="elo">
						<img
							src={space}
							alt="space image"
							className="portfolio__img--space"
						/>
						<img
							src={space2}
							alt="space image secondpage"
							className="portfolio__img--space"
						/>
						<img
							src={space3}
							alt="space image thirdpage"
							className="portfolio__img--space"
						/>
						<img
							src={space4}
							alt="space image fourth"
							className="portfolio__img--space"
						/>
					</div>
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
							Live{" "}
							<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
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
							Live{" "}
							<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
						</a>
					</div>
				</div>
			</div>
			<div className="portfolio__card">
				<div className="portfolio__imgLast">
					<img
						src={bookmark}
						alt="space image"
						className="portfolio__img--last"
					/>
				</div>
				<div className="portfolio__text">
					<h4>Bookmark</h4>
					<p>Bookmark landing page</p>
					<div className="stack">
						<p>SCSS</p>
						<p>JS/HTML5</p>
					</div>
					<div className="socials">
						<a
							href="https://github.com/K1337xz/Bookmark-landing-page"
							target="_blank"
							className="socials__link"
						>
							Code <FontAwesomeIcon icon={faGithub} />
						</a>
						<a
							href="https://k1337xz.github.io/Bookmark-landing-page/"
							target="_blank"
							className="socials__link"
						>
							Live{" "}
							<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
