import'./error404.css';
import mike from './mike.jpg';
import perrito from './perrito.jpg'

function err404() {
    return(
        <body class="err">
            <h1>Lo sentimos tienes un error404</h1>

            <div class="imaguen">
            <img src={mike}/>
            </div>

            <div class="imagen1">
            <img src={perrito}/>
            </div>

         <p>Desarrollado por Juana Rodriguez y Yuliani Espitia :)</p>
        </body>
);
}
export default err404;        