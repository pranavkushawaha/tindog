import React from "react"

function Coloured(props) {
  return (
    <section className={`colored-section ${props.className}`} id="title">{props.child}</section>
  );
}

export default Coloured