import './dashboard.css';
import fondodash from'./fondodash.jpg';
import fondoAzul from'./fondoAzul.jpeg';
import persona2 from'./persona2.png';
import hotelialogo from './Hoteliahorizontalblanco.svg';

function Dashboard() {
    return(
        <body class="bodydash">

            <div class="fondodash">
            <img src={fondodash}/>
            </div>
    
        <div class="menulateralD">

            <div class="menuL1">

                    <div class="fondoAzul">
                        <img src={fondoAzul}/>
                    </div>

                    <div class="Hoteliahorizontalblnaco">
                        <img src={hotelialogo}/>
                    </div>
                    
                    <p class="Textodash">
                        Angie Vargas 
                        angievargas2@gmail.com
                    </p>
            </div>

            <div class="menuL2">
                    <p class="opcionesD"><i class="fa-solid fa-bed"></i>Habitaciones</p> 
                    <p class="opcionesD"><i class="fa-solid fa-dumbbell"></i>  Reservas</p>
                    <p class="opcionesD"><i class="fa-solid fa-bed"></i>  Habitaciones</p>
                    <p class="opcionesD"><i class="fa-solid fa-dumbbell"></i>  Habitaciones</p>
                    <p class="opD"><i class="fa-solid fa-arrow-right-from-bracket"></i>
                    <a href="/" class="enlaceDash">Cerrar Sesion</a></p>
            </div>
    </div>

    <div class="FormD">
            <h1 class="titulodash">Bienvenido,Angie Vargas</h1>
            <div class="caja1D">
        
                    <div>
                        <img src={persona2}/>
                    </div>
                <div class="dashAzulcaja">
                    <i class="fa-solid fa-file-arrow-up"></i>
                    <i class="fa-thin fa-arrow-up-from-bracket"></i>
                </div>
                <button class="btnD">CambiarContraseña</button>
            </div>
        </div>

        <div class="caja1Dash">
                    <label class="TdD" for="text">Tipo de Documento
                        <input type="text" value="Cedula de Ciudadania" class="inputDash"/>
                    </label>

                    <label class="TdD" for="text">Nombres
                        <input type="text" value="Angie Camila" class="inputDash"/>
                    </label>    

                    <label class="TdD" for="text">Fecha de Nacimiento
                        <input type="text" value="10/08/1976" class="inputDash"/>
                    </label>

                    <label class="TdD">Genero
                        <span class="cajasexodash">
                            <input type="radio" name="genero" value="mujer" checked/>Mujer
                            <input type="radio" name="genero" value="hombre" checked/>Hombre
                            <input type="radio" name="genero" value="Otro" checked/>Otro
                        </span>    
                    </label>  

                    <label class="TdD" for="text">Email
                        <input type="text" value="angievargas2@gmail.com" class="inputDash"/>
                    </label>

                    <button class="btn2D">Actualizar</button>

                    <label class="TdD" for="password">Contraseña
                        <input type="password" class="inputDash"/> 
                    </label>    
                        
                    <button class="btn2D">Cambiar</button>
                </div>   

            <div class="caja2dash">

                <label class="TdD" for="text">Numero de Documento
                    <input type="text" class="inputFR" value="1025417456"/>
                </label>    

                <label class="TdD" for="text">Apellido
                    <input type="text" class="inputFR" value="Vargas Pinzon"/>
                </label>     

                    <label class="TdD" for="text">Pais de Origen
                        <input type="text" class="inputFR" value="Colombia"/>
                    </label>

                    <label class="TdD" for="text">Telefono de Contacto
                        <input type="text" class="inputFR" value="3135207460"/>
                    </label>


                    <label class="TdDCon" for="text">Confirmar Contraseña
                        <input type="password" class="inputFR"/>
                    </label>
            </div>
    
   
</body>
    );
}
export default Dashboard;