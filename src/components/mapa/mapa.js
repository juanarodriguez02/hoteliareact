import './mapa.css'
import mapa from './mapa.jpg';

function Mapa() {
    return (
        <div>
            <h1 class="titulomapa">Ubícanos</h1>

            <div class="mapa">
                <img src={mapa}/>
            </div>

            <h2 class="direccion">AVENIDA CARRERA 8, #12A-42, BOGOTA DC, COLOMBIA 
                <hr class="hr"/>
                +57 601 4567899 
            </h2>
        </div>
    );
}

export default Mapa;