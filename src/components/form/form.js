
function Form() {
    return (
        <form class="conte2">
            
            <h1>Registrate</h1>

            <div class="conte3">
                <div class="camposform">
                    <label for="tipodoc">Tipo de documento
                        <select>
                            <option></option>
	                        <option>Tarjeta de Identidad</option>
	                        <option>Cédula Ciudadania</option>
	                        <option>Cédula Extrangera</option>
	                        <option>Pasaporte</option>
	                    </select> 
                    </label> 
                </div>

                <div class="camposform">
                    <label for="numdoc">Número de documento 
                        <input type="number" id="numdoc" /> 
                    </label> <br />
                </div>

                <div class="camposform">
                    <label for="nombre">Nombres 
                        <input type="text" id="nombre" /> 
                    </label> <br />
                </div>

                <div class="camposform">
                    <label for="apellidos">Apellidos 
                        <input type="text" id="apellidos" /> 
                    </label> <br />
                </div>

                <div class="camposform">
                    <label for="fechana">Fecha nacimiento
                        <input type="date" id="fechana" /> 
                    </label>
                </div>
 
                <div class="camposform">
                    <label for="genero">Género
                        <div>
                            <input type="radio" id="genero" />Mujer
                            <input type="radio" id="genero" />Hombre
                            <input type="radio" id="genero" />Otro 
                        </div>
                    </label> 
                </div>

                <div class="camposform">
                    <label for="correo">Email
                        <input type="email" id="correo" />
                    </label> <br />
                </div>

                <div class="camposform">
                    <label for="telefono">Teléfono de contacto
                        <input type="number" id="telefono" /> 
                    </label> 
                </div>

                <div class="camposform">
                    <label for="pais">País de origen
                        <select>
                            <option>Colombia</option>
                            <option>Ecuador</option>
                            <option>Peru</option>
                            <option>Brasil</option>
                            <option>Argentina</option>
                            <option>Chile</option>
                        </select> 
                    </label>
                </div>

                <div class="camposform">
                    <label for="foto">Foto
                        <input type="file" id="foto" />
                    </label> 
                </div>

                <div class="camposform">
                    <label for="contraseña">Contraseña
                        <input type="password" id="contraseña" />
                    </label>
                </div>

                <div class="camposform">
                    <label for="confirmarcon">Confirmar contraseña
                        <input type="password" id="confirmarcon" /> 
                    </label> 
                </div>
            </div>
            
            <div class="conte4">
                <input type="checkbox" id="abrir" /><a>Acepto Terminos y condiciones</a>
            </div>

            <div class="modal-container" id="modal_container">
                <div class="modal">
                    <div class="modaltitulo">
                        <h2>Términos y Condiciones</h2>
                    </div>

                    <p>Estos Términos del Servicio reflejan la forma 
                        de trabajar de Google como empresa, las 
                        leyes por las que nos regimos y determinados 
                        aspectos que siempre hemos creído que son 
                        ciertos. Por ello, estos Términos del Servicio 
                        ayudan a definir la relación que tiene Google
                        contigo cuando interactúas con nuestros
                        servicios. Por ejemplo, estos términos 
                        incluyen las seguientes secciones:

                        <br />

                        Qué puedes esperar de nosotros, donde se
                        describe cómo proporcionamos y 
                        desarrollamos nuestros servicios.
                        Lo que esperamos de ti, donde se establecen 
                        ciertas reglas para utilizar nuestros servicios.
                    </p>

                    <button id="cerrar">Aceptar</button>
                </div>
            </div>

            <script src="js/modal.js"></script>

            <button class="botonform">Ingresar</button>
        </form>
    );
}

const abrir = document.getElementById('abrir');
const modal_container = document.getElementById('modal_container');
const cerrar = document.getElementById('cerrar');

abrir.addEventListener('click', () => {
    modal_container.classList.add('show');
});

cerrar.addEventListener('click', () => {
    modal_container.classList.remove('show');
});

export default Form;