import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./_Navbar.scss";
export default function Navbar() {
	return (
		<header>
			<nav className="nav">
				<ul className="nav__list">
					<li className="nav__item">
						<a href="#" className="nav__link nav__link--active">
							About me
						</a>
					</li>
					<li className="nav__item">
						<a href="#" className="nav__link">
							Skills
						</a>
					</li>
					<li className="nav__item">
						<a href="#" className="nav__link">
							My projects
						</a>
					</li>
					<li className="nav__item">
						<a href="#" className="nav__link ">
							Contact
						</a>
					</li>
				</ul>
				<div className="nav__mobile">
					<FontAwesomeIcon icon={faBars} size="xl" color="#f0e3ca" />
				</div>
			</nav>
		</header>
	);
}
