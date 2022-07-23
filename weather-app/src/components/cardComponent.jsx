import '../styles/cards.css';

export const CardComponent = (props) => {
    let conditional;
    let icon; 
    let clicked = 0;
    if (props.time === 'snow') {
        conditional = <h1> It's snowing. </h1>
        icon = "snowing"
    }
    if (props.time === 'sunny') {
        conditional = <h1> It's sunny. </h1>
        icon = "sunny"
    }
    if (props.time === 'rain') {
        conditional = <h1> It's raining. </h1>
        icon = "water_drop"
    }
    if (props.time === 'fire') {
        conditional = <h1> Chill in Fire. </h1>
        icon = "local_fire_department"
    }
    return(
        <div className="cardComponent" >
            <span className="material-icons" tabIndex="0" onClick={() => {
                clicked++;
                if (clicked % 2 === 0) {
                    props.setPause(false)
                } else {
                    props.setPause(true)
                }
                console.log(props.pause)
                if (props.pause === true) {
                    document.getElementById("soundComponent").pause();
                } else {
                    document.getElementById("soundComponent").play();
                }
                

            }}> {icon}</span>
 
            {conditional}
        </div>
 )
}
export default CardComponent;