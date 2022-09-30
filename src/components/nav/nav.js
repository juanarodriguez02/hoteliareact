import logo from './Hotelia horizontal blanco.svg';
//import { useHistory } from "react-router-dom"

function Nav() {
    /*let form = useHistory()
    /function formClick() {
        form.push("/formusu")
        <span onClick={() => formClick()}>
                Formre Usuario
            </span>
    }*/
    return (
        <nav>
        <div class="logo">
            <img src={logo} />
        </div>

        <div class="menu">        
            <a class="item">Inicio</a>
            <a href="ubicanos.html" class="item">Ubicanos</a>
            <a href="opiniones.html" class="item">Opiniones</a>
            <hr class="menu-hr" noshade=""></hr>
            <a href="login.html" class="item"><button class="navbar-button"><i class="fa-solid fa-user">
            </i>Iniciar Sesion</button></a>
        </div>
    </nav>
    );
  }
  
  export default Nav;
  