import imagen from './slide1.jpg'
import './imgindex.css'

function Imagenindex() {
    return (
        <div class="conteimg">
            <img class="indexi" src={imagen} />
            
            <div class="contetexto">
                <h1>Lorem ipsum dolor sit ameteliter, consectetur adipisicing elit.</h1>
            </div>
        </div>
    );
}

 
export default Imagenindex;