import foto from './foto1.jpg'

function Cards() {
    return (
        <section class="ContainerCartas">
            <div class="tituloUsuarios">
                <h1>Nuestros usuarios dicen...</h1>
            </div>
            
            <div class="cartascontenedorcajas">
                <div class="persona1">
            
                    <img src={foto} class="imgP1"/>
                    <h4 class="nombre1">Diego Rodriguez</h4>
                    
                    <br/>
                    
                    <div class="start">
                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                    </div> 
                    
                    <br/>        
                    <span class="textoCarta">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </span>
                </div>
                
                <div class="persona2">
            
                    <img src={foto} class="imgP1"/>
                    <h4 class="nombre1">Diego Rodriguez</h4>
                    
                    <br/>
                    
                    <div class="start">
                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                    </div> 
                    
                    <br/>            
                    
                    <span class="textoCarta">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </span>
                </div>

                <div class="persona3">
            
                    <img src={foto} class="imgP1"/>
                    <h4 class="nombre1">Diego Rodriguez</h4>
                    
                    <br/>
                    
                    <div class="start">
                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                    </div> 
                    
                    <br/>
            
                    <span class="textoCarta">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </span>
                </div>   
            </div> 
        </section>
    );
}

export default Cards;