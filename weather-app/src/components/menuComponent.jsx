import '../styles/menu.css'
import { buttons } from './resources/buttons'
export const MenuComponent = (props) => {

    return(
    <div className="menuComponent">
        {
            
            buttons.map((button) => /*console.log(button), */ 
            <button 
               
                onClick={(event) => {
                    props.changeTime(button.action);
                    buttons.map(({action, icon}) => document.getElementById(action).classList.remove("selected"))
                    event.target.classList.add("selected");
                }}
            >
                <span 
                    id={button.action}
                    className={(button.action === props.time)? "material-icons selected" : "material-icons"}
                >{button.icon}</span>
            </button>)
        }
    </div>
    )
}
export default MenuComponent;