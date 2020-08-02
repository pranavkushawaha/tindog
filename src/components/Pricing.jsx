import React, { useState } from "react"
import {useTrail, animated,config } from "react-spring";
import {withRouter, useHistory } from "react-router-dom";
import { trailImg } from "./trail";

function Pricing() {
  let proceed1 = 0;
	const [bbye, setbye] = useState(false);
	const trailanim = useTrail(100, trailImg);
    const bye = useTrail(1, {
      from:{opacity:1, height:'0vh'},
      opacity : bbye ? 0 : 1,
      to:{opacity:1,height:'100vh'},
      config: config.molasses
    })
    const history = useHistory();
    window.addEventListener('scroll', () => {
      if((document.body.clientHeight-10) <= (window.innerHeight + window.scrollY) && (document.body.clientHeight+10) >= (window.innerHeight + window.scrollY)){
        proceed1++;
        console.log('increased pro1 '+ proceed1);
      }
    });
    setTimeout(() => {
      window.onscroll = function() {
        if(proceed1 >= 5){
          setbye(true);
          setTimeout(() => {
          history.push('/cta');
          },800);}
        console.log('scroll started');
        };
    },400);
  return (
    <animated.section className="white-section" id="pricing" style={bye[0]}>

    <h2 className="section-heading">A Plan for Every Dog's Needs</h2>
    <p>Simple and affordable price plans for your and your dog.</p>

    <div className="row" style={{width:'100%'}}>

      <animated.div className="pricing-column col-lg-4 col-md-6" style={trailanim[0]}>
        <div className="card">
          <div className="card-header">
            <h3>Chihuahua</h3>
          </div>
          <div className="card-body">
            <h2 className="price-text">Free</h2>
            <p>No Pirority Listing</p>
            <p>5 Matches Per Day</p>
            <p>10 Messages Per Day</p>
            <p>Unlimited App Usage</p>
            <button className="btn btn-lg btn-block btn-outline-dark" type="button">Sign Up</button>
          </div>
        </div>
      </animated.div>

      <animated.div className="pricing-column col-lg-4 col-md-6" style={trailanim[0]}>
        <div className="card">
          <div className="card-header">
            <h3>Labrador</h3>
          </div>
          <div className="card-body">
            <h2 className="price-text">$49 / mo</h2>
            <p>No Pirority Listing</p>
            <p>Unlimited Matches</p>
            <p>Unlimited Messages</p>
            <p>Unlimited App Usage</p>
            <button className="btn btn-lg btn-block btn-dark" type="button">Sign Up</button>
          </div>
        </div>
      </animated.div>

      <animated.div className="pricing-column col-lg-4" style={trailanim[0]}>
        <div className="card">
          <div className="card-header">
            <h3>Mastiff</h3>
          </div>
          <div className="card-body">
            <h2 className="price-text">$99 / mo</h2>
            <p>Pirority Listing</p>
            <p>Unlimited Matches</p>
            <p>Unlimited Messages</p>
            <p>Unlimited App Usage</p>
            <button className="btn btn-lg btn-block btn-dark" type="button">Sign Up</button>

          </div>
        </div>
      </animated.div>



    </div>

  </animated.section>
  )
}

export default Pricing