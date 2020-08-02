import React from "react"
import {useTrail, animated,config } from "react-spring";
import { trailCta } from "./trail";

function Cta() {
  const bbye = false;
	const trailanim = useTrail(100, trailCta);
    const bye = useTrail(1, {
      from:{opacity:0, height:'0vh'},
      opacity : bbye ? 0 : 1,
      to:{opacity:1,height:'100vh'},
      config: config.gentle
    })
  return (
    <animated.section className="colored-section colored-section-heightless" id="cta" style={bye[0]}>

    <div className="container-fluid">

      <div><animated.h3 className="big-heading" style={trailanim[0]}>Find the True Love of Your Dog's Life Today.</animated.h3></div>
      <button className="download-button btn btn-lg btn-dark" type="button"><i className="fab fa-apple"></i> Download</button>
      <button className="download-button btn btn-lg brn-light" type="button"><i className="fab fa-google-play"></i> Download</button>
    </div>
  </animated.section>
  )
}

export default Cta