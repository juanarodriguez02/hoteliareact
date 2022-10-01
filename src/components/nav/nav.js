import logonav from './Hotelia horizontal blanco.svg';
import'./nav.css';

function Nav() {
    return (
        <nav>
            <div class="logo">
                <img src={logonav} />
            </div>

            <div class="menu">        
                <a class="item">Inicio</a>
                <a class="item">Ubicanos</a>
                <a class="item">Opiniones</a>
                <hr class="menu-hr" noshade=""></hr>
                <a href="/Login"><button class="navbar-button"><i class="fa-solid fa-user">
                </i>Iniciar Sesion</button></a>
            </div>
        </nav>
        );
    }
export default Nav;