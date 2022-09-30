import logo from './Hotelia horizontal blanco.svg';
import fondo from './fondo.jpg';
function Barra() {
    return (

        <div>
            <img class="bodyformreu" src={fondo}/>
            
            <div class="conte1">
                <img src={logo} />
                <h2>Eres más que <br/> bienvenido</h2>
                <h3>Un lugar en tu corazón</h3>
            </div>
        </div>
    );
}

export default Barra;