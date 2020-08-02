import React, {useEffect,useState} from "react"
import ContainerFluid from "./Container-fluid"
import {useTrail, animated,config } from "react-spring";
import {withRouter, useHistory } from "react-router-dom";
function Testimonial() {
  useEffect(() => {
		window.scrollTo(0,0);
	}, [])
	let proceed = 0;
	const [bbye, setbye] = useState(false);
  const anim = true;
	const trailanim = useTrail(100, {
		from: {transform: 'translate3d(0px, 50px, 0)', opacity: 0},
		opacity: anim ? 1 : 0,
		transform: anim ? 'translate3d(0px 0px 0)' : 'translate3d(0px, 50px, 0)',
		config: config.molasses,
    });
    const bye = useTrail(1, {
      from:{opacity:1, height:'0vh'},
      opacity : bbye ? 0 : 1,
      to:{height:'100vh'},
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
          history.push('/press');
          },450);}
        console.log('scroll started');
        };
    },400);
    
	
  return (
    <ContainerFluid child={
        <animated.div style={bye[0]}>
        <animated.div id="testimonial-carousel" className="carousel slide" data-ride="false" style={anim ? trailanim[0] : {}}>
            <div className="carousel-inner">
                <div className="carousel-item active container-fluid">
                    <h2 className="testimonial-text">I no longer have to sniff other dogs for love. I've found the hottest Corgi on TinDog. Woof.</h2>
                    <img className="testimonial-image" src="images/dog-img.jpg" alt="dog-profile"/>
                    <em>Pebbles, New York</em>
                </div>
                <div className="carousel-item container-fluid">
                    <h2 className="testimonial-text">My dog used to be so lonely, but with TinDog's help, they've found the love of their life. I think.</h2>
                    <img className="testimonial-image" src="images/lady-img.jpg" alt="lady-profile"/>
                    <em>Beverly, Illinois</em>
                </div>
            </div>
            <a className="carousel-control-prev" href="#testimonial-carousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#testimonial-carousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon"></span>
            </a>
        </animated.div>
        </animated.div>
    }/>
  )
}

export default withRouter(Testimonial)


// window.addEventListener('scroll', () => {
	// 	if(window.scrollY >= 850){
	// 		setAnim(true);
	// 		console.log("i called again");
	// 	}
	// });