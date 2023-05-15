import React from "react";
import heroImg from "../../assets/heroimg.png";
import "./_Mainsection.scss";

export default function Mainsection() {
	return (
		<div className="maincontent">
			<div className="leftWrapp">
				<div className="leftWrapp__content">
					<h1>Jakub Buksa</h1>
					<h2>Frontend Developer</h2>
					<p>
						Welcome! My name is Jakub, I’m front-end developer
						living in Poland.
					</p>
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
