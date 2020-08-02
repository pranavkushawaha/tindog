import { config } from "react-spring";

const trail = {
    from: {transform: 'translate3d(0px, -10px, 0)', opacity: 1},
    to: {transform: 'translate3d(0px, 0px, 0)', opacity: 1},
    config: config.gentle,
  }

export const trailHeading = {
    from: {transform: 'translate3d(0px, 20px, 0)', opacity: 1, height: 0},
    to: {transform: 'translate3d(0px, 0px, 0)', opacity: 1, height: 'auto'},
    config: config.gentle,
  }
  
export const trailDog = {
  from: {transform: 'translate3d(-1000px, 0px, 0) rotate(-90deg)', opacity: 1},
  to: {transform: 'translate3d(0px, 0px, 0) rotate(25deg)', opacity: 1},
  
  config: config.molasses,
}

export const trailImg = {
  from : {transform: 'translate3d(0px, -120px, 0)', height: '0px'},
  to:{transform: 'translate3d(0px, 0px, 0)', height: 'auto'},
  config : config.molasses
}

export const trailCta = {
  from : {transform: 'translate3d(-200px, 0px, 0)', height: '0vh', opacity: 0},
  to:{transform: 'translate3d(0px, 0px, 0)', height: '40vh', opacity: 1},
  config : config.gentle
}

export default trail;