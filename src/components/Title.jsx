import React, {useState} from "react"
import {useTrail, animated, config } from "react-spring";
import {trailHeading, trailDog} from  './trail';
import Coloured from "./Coloured";
import ContainerFluid from "./Container-fluid";
import { useHistory, withRouter } from "react-router-dom";


function Title() {
	const [bbye, setbye] = useState(false);
	const trailanim = useTrail(100, trailHeading);
	const trailImage = useTrail(1, trailDog);
	const bye = useTrail(1, {
		from:{opacity:1, height:'100vh'},
		opacity : bbye ? 0 :1,
		config: config.gentle
	})
	const history = useHistory();
	window.onscroll = function() {
		setbye(true);
		setTimeout(() => {
		history.push('/feature');
	},750);}
  return (
		<Coloured child={
			<ContainerFluid child={
				<animated.div className="row" style={bye[0]}>
			<div className="col-lg-6 col-sm-12">
				<animated.h1 className="big-heading" style={trailanim[1]}>Meet new and interesting dogs nearby.</animated.h1>
				<animated.button type="button" className="btn btn-dark btn-lg download-button" style={trailanim[2]}><i className="fab fa-apple"></i> Download</animated.button>
				<animated.button type="button" className="btn btn-outline-light btn-lg download-button" style={trailanim[2]}><i className="fab fa-google-play"></i> Download</animated.button>
			</div>

			<div className="col-lg-6 col-sm-12">
				<animated.img style={trailImage[0]} className="title-image" src="images/iphone6.png" alt="iphone-mockup"/>
			</div>
		</animated.div>
			}/>
		} />
  )
}

export default withRouter( Title )