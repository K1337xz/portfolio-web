import "./_Myskils.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHtml5,
	faCss3Alt,
	faJs,
	faSass,
} from "@fortawesome/free-brands-svg-icons";
export default function Myskils() {
	return (
		<div className="skils">
			<h3>My skills</h3>
			<div className="skils__content">
				<div className="skils__cardContent">
					<div className="skils__card--html">
						<FontAwesomeIcon icon={faHtml5} size="xl" />
						<p>HTML5</p>
					</div>
				</div>
				<div className="skils__cardContent">
					<div className="skils__card--css">
						<FontAwesomeIcon icon={faCss3Alt} size="xl" />
						<p>CSS3</p>
					</div>
				</div>
				<div className="skils__cardContent">
					<div className="skils__card--js">
						<FontAwesomeIcon icon={faJs} size="xl" />
						<p>JavaScript</p>
					</div>
				</div>
				<div className="skils__cardContent">
					<div className="skils__card--html">
						<FontAwesomeIcon icon={faSass} size="xl" />
						<p>SASS</p>
					</div>
				</div>
			</div>
		</div>
	);
}
