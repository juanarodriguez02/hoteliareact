import logo from './Hotelia horizontal blanco.svg';
import'./nav.css';

function Nav() {
    return (
        <nav>
            <div class="logo">
                <img src={logo} />
            </div>

            <div class="menu">        
                <a class="item">Inicio</a>
                <a class="item">Ubicanos</a>
                <a class="item">Opiniones</a>
                <hr class="menu-hr" noshade=""></hr>
                <a href="/formusuario"><button class="navbar-button"><i class="fa-solid fa-user">
                </i>Iniciar Sesion</button></a>
            </div>
        </nav>
        );
    }
    
export default Nav;