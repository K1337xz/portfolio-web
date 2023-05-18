import React from "react";
import heroImg from "../../assets/heroimg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./_Mainsection.scss";

export default function Mainsection() {
	return (
		<div className="maincontent">
			<div className="leftWrapp">
				<div className="leftWrapp__content">
					<h1>Jakub Buksa</h1>
					<h2>Frontend Developer</h2>
					<p>
						Hi! I’m Kuba, a frontend developer based in Poland
						currently looking for a full-time job. Most of the
						projects in my portfolio are personal.
					</p>
					<div className="leftWrapp__socials">
						<a
							href="https://github.com/K1337xz"
							target="_blank"
							className="leftWrapp__link"
						>
							<FontAwesomeIcon icon={faGithub} />
						</a>
						<a
							href="https://www.linkedin.com/in/jakub-buksa-673051257/"
							target="_blank"
							className="leftWrapp__link"
						>
							<FontAwesomeIcon icon={faLinkedin} />
						</a>
					</div>
				</div>
			</div>
			<div className="rightWrapp">
				<div className="rightWrapp__content">
					<img src={heroImg} className="rightWrapp__image" alt="" />
				</div>
			</div>
		</div>
	);
}
