import rain from './resources/rain.mp3'; 
import snow from './resources/snow.mp3'; 
import fire from './resources/fireplace.mp3'; 
import sunny from './resources/sunny.mp3'; 


export const SoundComponent = (props) => {
    let conditional;

    if (props.state === "snow") {
        conditional = snow;
    }
    if (props.state === "rain") {
        conditional = rain;
    }
    if (props.state === "sunny") {
        conditional = sunny;
    }
    if (props.state === "fire") {
        conditional = fire;
    }
    return(
        <audio id="soundComponent" autoPlay src={conditional}></audio>
    )
}
export default SoundComponent;