import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.png";
import "./_Navbar.scss";

export default function Navbar() {
	const [openMobile, setOpenMoble] = useState(false);

	const toggleOpen = () => {
		setOpenMoble((prev) => !prev);
	};
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
						<a href="#abt" className="nav__link nav__link--active">
							About me
						</a>
					</li>
					<li className="nav__item">
						<a href="#tech" className="nav__link">
							Tech Stack
						</a>
					</li>
					<li className="nav__item">
						<a href="#proj" className="nav__link">
							My projects
						</a>
					</li>
					<li className="nav__item">
						<a href="#con" className="nav__link ">
							Contact
						</a>
					</li>
				</ul>
				<div className="nav__mobile" onClick={toggleOpen}>
					<FontAwesomeIcon icon={faBars} size="xl" color="#f0e3ca" />
				</div>
			</nav>
			<div className={openMobile ? "mobile--open" : "mobile"}>
				<div className="mobile__closebtn" onClick={toggleOpen}>
					<FontAwesomeIcon icon={faXmark} size="xl" color="#f0e3ca" />
				</div>
				<ul className="mobile__list">
					<li className="mobile__item">
						<a
							href="#abt"
							className="mobile__link mobile__link--active"
							onClick={() => setOpenMoble(false)}
						>
							About me
						</a>
					</li>
					<li className="mobile__item">
						<a
							href="#tech"
							className="mobile__link"
							onClick={() => setOpenMoble(false)}
						>
							Skills
						</a>
					</li>
					<li className="mobile__item">
						<a
							href="#proj"
							className="mobile__link"
							onClick={() => setOpenMoble(false)}
						>
							My projects
						</a>
					</li>
					<li className="nav__item">
						<a
							href="#con"
							className="mobile__link "
							onClick={() => setOpenMoble(false)}
						>
							Contact
						</a>
					</li>
				</ul>
			</div>
		</header>
	);
}
