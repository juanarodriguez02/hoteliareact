import fondo from './fondo.jpg';
import logob from './hoteliahorizontal.svg';

function Barra() {
    return (
        <div>
            <img class="bodyformreu" src={fondo}/>
            
            <div class="conte1">
                <img src={logob} />
                <h2>Eres más que <br/> bienvenido</h2>
                
            </div>
        </div>
    );
}
export default Barra;