import React, {useEffect,useState} from "react"
import {useTrail, animated,config } from "react-spring";
import {withRouter, useHistory } from "react-router-dom";
import { trailImg } from "./trail";

function Press() {
	let proceed = 0;
	const [bbye, setbye] = useState(false);
	const trailanim = useTrail(100, trailImg);
    const bye = useTrail(1, {
      from:{opacity:1, height:'0vh'},
      opacity : bbye ? 0 : 1,
      to:{height:'100vh'},
      config: config.gentle
    })
    const history = useHistory();
    window.addEventListener('scroll', () => {
      if((document.body.clientHeight) <= (window.innerHeight + window.scrollY)){
        proceed++;
        console.log('increased pro '+ proceed);
      }
    });
    setTimeout(() => {
      window.onscroll = function() {
        if(proceed >= 1){
          setbye(true);
          setTimeout(() => {
          history.push('/pricing');
          },450);}
        console.log('scroll started');
        };
    },400);
    
  return (
  <animated.section className="colored-section colored-section-heightless" id="press" style={bye[0]}>
    <animated.img className="press-logo" src="images/tnw.png" alt="tnw-logo" style={trailanim[0]}/>
    <animated.img className="press-logo" src="images/techcrunch.png" alt="tc-logo" style={trailanim[0]}/>
    <animated.img className="press-logo" src="images/bizinsider.png" alt="biz-insider-logo" style={trailanim[0]}/>
    <animated.img className="press-logo" src="images/mashable.png" alt="mashable-logo" style={trailanim[0]}/>

  </animated.section>
  )
}

export default withRouter(Press)