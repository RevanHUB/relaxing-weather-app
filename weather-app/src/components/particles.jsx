import { useEffect } from "react";
import "../styles/particles.css";

export const ParticlesComponent = (props) => {
 
 
  useEffect(() => {
  
  
    if (props.state === "rain") {
      let lluvia = setInterval(() => {
        if (props.state === "rain") {
          for (let index = 0; index < 5; index++) {
            let particleContainer = document.getElementById("particleContainer");
            let randomizer = Math.floor(Math.random() * 320);
            let gota = document.createElement("div");
            gota.setAttribute("class", "gota");
            particleContainer.appendChild(gota);
            gota.style.left = randomizer + "px";

          }
        }
       
        if (props.state != 'rain') {      clearInterval(lluvia)     }
      }, 1000);
      return () => clearInterval(lluvia);
    }


  if (props.state === "snow") {
    let nieve = setInterval(() => {
     if (props.state === "snow") {
       let randomizer = Math.floor(Math.random() * 320);
       let randomSize = Math.floor(Math.random() * 25);
       let particleContainer = document.getElementById("particleContainer");
       let copo = document.createElement("div");
       copo.setAttribute("class", "copo");
       particleContainer.appendChild(copo);
       copo.style.left = randomizer + "px";
       copo.style.width = randomSize + "px";
       copo.style.height = randomSize + "px";
     }

     if (props.state != 'snow') {   clearInterval(nieve)    }
    }, 1000);
    return () => clearInterval(nieve);
  }
  });

  return <div id="particleContainer" className="particleContainer">
    <div className="sun" id="sun" style={{ display : (props.state === "sunny")? "flex" : "none"}}></div>
    <div id="flame-1" style={{ display : (props.state === "fire")? "flex" : "none"}}></div>
    <div id="flame-2" style={{ display : (props.state === "fire")? "flex" : "none"}}></div>
    <div id="flame-3" style={{ display : (props.state === "fire")? "flex" : "none"}}></div>
  </div>;
};
export default ParticlesComponent;
