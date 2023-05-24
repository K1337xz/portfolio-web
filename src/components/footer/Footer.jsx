import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./_Footer.scss";

export default function Footer() {
	return (
		<footer className="footer">
			<div className="footer__content">
				<a
					href="https://github.com/K1337xz"
					target="_blank"
					className="footer__link"
				>
					<FontAwesomeIcon icon={faGithub} />
				</a>
				<a
					href="https://www.linkedin.com/in/jakub-buksa-673051257/"
					target="_blank"
					className="footer__link"
				>
					<FontAwesomeIcon icon={faLinkedin} />
				</a>

				<a
					href="mailto:jakubbuksa3@gmail.com?subject=Contact from portfolio web"
					className="footer__link"
				>
					<FontAwesomeIcon icon={faEnvelope} />
				</a>
			</div>
			<div className="footer__copy">
				<p>
					&copy;{" "}
					<a
						href="https://github.com/K1337xz"
						className="footer__link--copy"
					>
						Jakub Buksa
					</a>
				</p>
			</div>
		</footer>
	);
}
