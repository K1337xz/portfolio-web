import "./_Current.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faNodeJs } from "@fortawesome/free-brands-svg-icons";
export default function Current() {
	return (
		<div className="learning">
			<div className="learning__top">
				<h3>Current Learning</h3>
			</div>
			<div className="learning__content">
				<div className="learning__cardContent">
					<div className="learning__card learning__card--react">
						<FontAwesomeIcon icon={faReact} size="xl" />
						<p>React</p>
					</div>
				</div>
				<div className="learning__cardContent">
					<div className="learning__card learning__card--node">
						<FontAwesomeIcon icon={faNodeJs} size="xl" />
						<p>Node.js</p>
					</div>
				</div>
			</div>
		</div>
	);
}
