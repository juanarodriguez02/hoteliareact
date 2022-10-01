import imagendesc from './Hotelia negro vertical.svg'
import './descripcion.css'
function Descripcion() {
    return (
        <> 
            <div class="contedesc">

                <img src={imagendesc} />

                <p>Estamos ubicados en el barrio La Cabrera al norte de Bogotá, en un contexto de <br />
                    lujo donde interactúan los negocios, el ocio y el descanso, gracias a su <br />
                    estratégica ubicación rodeada de bancos, restaurantes de alta cocina, centros <br />
                    comerciales, almacenes de lujo y emblemáticos parques para aprovechar la <br /> 
                    naturaleza entre la ciudad, caminar y hacer un poco de deporte al aire libre están <br />
                    el parque del Virrey y El Parque de la 93. Además de nuestro exclusivo diseño, <br />
                    ponemos a tu disposición una oferta gastronómica tan sotisficada como <br />
                    saludable a base de productos locales, cargados de lo mejor de la tradición <br />
                    colombiana.
                </p>
            </div>
        </>
    );
}

export default Descripcion;