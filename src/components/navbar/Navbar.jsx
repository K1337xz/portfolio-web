import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.png";
import "./_Navbar.scss";

export default function Navbar() {
	return (
		<header>
			<nav className="nav">
				<div className="nav__logo">
					<a href="#" className="nav__link">
						<img src={logo} className="nav__image" />
					</a>
				</div>
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
			<div className="mobile">
				<div className="mobile__closebtn">
					<FontAwesomeIcon icon={faXmark} size="xl" color="#f0e3ca" />
				</div>
				<ul className="mobile__list">
					<li className="mobile__item">
						<a
							href="#"
							className="mobile__link mobile__link--active"
						>
							About me
						</a>
					</li>
					<li className="mobile__item">
						<a href="#" className="mobile__link">
							Skills
						</a>
					</li>
					<li className="mobile__item">
						<a href="#" className="mobile__link">
							My projects
						</a>
					</li>
					<li className="nav__item">
						<a href="#" className="mobile__link ">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</header>
	);
}
