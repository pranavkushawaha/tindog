import React from "react"
import {useTrail, animated } from "react-spring";
import trail from  './trail';


function Navbar() {
  const trailanim = useTrail(100,trail);
  return (
        <>
        <nav className="colored-section colored-section-heightless navbar navbar-expand-lg navbar-dark" >

<animated.a className="navbar-brand" style={{...trailanim[10], padding: '15px'} } href="/">tindog</animated.a>

<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
    <span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="navbarTogglerDemo02">

  <ul className="navbar-nav ml-auto">
    <li className="nav-item">
      <animated.a className="nav-link" style={trailanim[2]} href="/feature">Feature</animated.a>
    </li>
    <li className="nav-item">
      <animated.a className="nav-link" style={trailanim[4]} href="/testimonial">Testimonial</animated.a>
    </li>
    <li className="nav-item">
      <animated.a className="nav-link" style={trailanim[6]} href="/press">Press</animated.a>
    </li>
    <li className="nav-item">
      <animated.a className="nav-link" style={trailanim[8]} href="/pricing">Pricing</animated.a>
    </li>
    <li className="nav-item">
      <animated.a className="nav-link" style={trailanim[10]} href="/cta">Download</animated.a>
    </li>
  </ul>

  </div>
</nav>
        </>
  )
}

export default Navbar