import React from "react";
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
			</nav>
		</header>
	);
}
