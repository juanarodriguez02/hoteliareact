import'./Header.css'
import habitacion from'./habitacion.jpg';
import FondoBlanco from'./FondoBlanco.png';
/*import hotelianegro from './hotelianegro.svg';*/
 


function Header() {
    return (
      <body class="body">

        <div class="habitacion">
          <img src={habitacion}/>
        </div>

      <div class="containerL">
            <div class="FondoBlanco">
              <img src={FondoBlanco}/>
            </div>

          <div class="icon">
            <i class="fa-solid fa-circle-user"></i>
          </div>
          
          <label for="type" >Usuario</label>
          <input type="text"></input>
  
          <label for="type">Contraseña</label>
          <input type="text"></input>
  
          <button  class="botonL"><a class="botonLTexto" href="/Dashboard">Ingresar</a></button>
          <span class="cuentaL">¿No tienes una cuenta?</span>
          <a href="" class="textL">Registrate aqui</a>
      </div>
  </body>
  
    );
  }
  
  export default Header;