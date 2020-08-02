import React, { useState , useEffect } from "react"
import ContainerFluid from "./Container-fluid.jsx";
import Colorless from "./Colorless.jsx";
import {useTrail, animated,config } from "react-spring";
import {withRouter, useHistory } from "react-router-dom";
function Feature() {
	useEffect(() => {
		window.scrollTo(0,0);
	}, [])
	let proceed = 0;
	const [bbye, setbye] = useState(false);
	const anim = true;
	const trailanim = useTrail(100, {
		from: {transform: 'translate3d(0px, 20px, 0)', opacity: 0},
		opacity: anim ? 1 : 0,
		transform: anim ? 'translate3d(0px 0px 0)' : 'translate3d(0px, 20px, 0)',
		config: config.gentle,
	  });
	  const bye = useTrail(1, {
		from:{opacity:1, height:'0vh'},
		opacity : bbye ? 0 : 1,
		to:{height: '100vh'},
		config: config.gentle
	})
	const history = useHistory();
	window.addEventListener('scroll', () => {
		if((document.body.clientHeight-10) <= (window.innerHeight + window.scrollY)){
			proceed++;
			console.log('increased pro '+ proceed);
		}
	});
	setTimeout(() => {
		window.onscroll = function() {
			if(proceed >= 2){
				setbye(true);
				setTimeout(() => {
				history.push('/testimonial');
				},450);}
			console.log('scroll started');
			};
	},400);
	
	return (
		<Colorless 
			child={<ContainerFluid
					child={<center>
						<animated.div className="row" style={bye[0]}>
							<animated.div className="feature-box col-lg-4 col-sm-12" style={anim ? trailanim[0] : {}}>
								<i className="icon fas fa-check-circle fa-4x"></i>
								<h3 className="feature-title">Easy to use.</h3>
								<p>So easy to use, even your dog could do it.</p>
							</animated.div>
			
							<animated.div className="feature-box col-lg-4 col-sm-12" style={anim ?trailanim[2] : {}}>
								<i className="icon fas fa-bullseye fa-4x"></i>
								<h3 className="feature-title">Elite Clientele</h3>
								<p>We have all the dogs, the greatest dogs.</p>
							</animated.div>
			
							<animated.div className="feature-box col-lg-4 col-sm-12" style={anim ? trailanim[4] : {}}>
								<i className="icon fas fa-heart fa-4x"></i>
								<h3 className="feature-title">Guaranteed to work.</h3>
								<p>Find the love of your dog's life or your money back.</p>
							</animated.div>
						</animated.div>
					</center>}
			/>}
		/>
  	)
}

export default withRouter( Feature )