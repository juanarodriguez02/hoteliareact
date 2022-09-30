
function Form() {
    return (
        <form class="conte2">
            
            <h1>Registrate</h1>

            <div class="conte3" />
                <div class="camposform">
                    <label for="tipodoc">Tipo de documento</label> <br />
	                <select>
                        <option></option>
	                    <option>Tarjeta de Identidad</option>
	                    <option>Cédula Ciudadania</option>
	                    <option>Cédula Extrangera</option>
	                    <option>Pasaporte</option>
	                </select> <br />
                </div>

                <div class="camposform">
                    <label for="numdoc">Número de documento</label> <br />
                    <input type="number" id="numdoc" /> <br />
                </div>

                <div class="camposform">
                    <label for="nombre">Nombres</label> <br />
                    <input type="text" id="nombre" /> <br />
                </div>

                <div class="camposform">
                    <label for="apellidos">Apellidos</label> <br />
                    <input type="text" id="apellidos" /> <br />
                </div>

                <div class="camposform">
                    <label for="fechana">Fecha nacimiento</label> <br />
                    <input type="date" id="fechana" /> <br />
                </div>
 
                <div class="camposform">
                    <label for="genero">Género</label> <br />
                    
                    <div class="camposformg">
                        <input type="radio" id="genero" />Mujer
                        <input type="radio" id="genero" />Hombre
                        <input type="radio" id="genero">Otro <br />
                    <div />
                    </input>
                </div>

                <div class="camposform">
                    <label for="correo">Email</label> <br />
                    <input type="email" id="correo" /> <br />
                </div>

                <div class="camposform">
                    <label for="telefono">Teléfono de contacto</label> <br />
                    <input type="number" id="telefono" /> <br />
                </div>

                <div class="camposform">
                    <label for="pais">País de origen</label> <br />
                    <select>
                        <option>Colombia</option>
                        <option>Ecuador</option>
                        <option>Peru</option>
                        <option>Brasil</option>
                        <option>Argentina</option>
                        <option>Chile</option>
                    </select> <br />
                </div>

                <div class="camposform">
                    <label for="foto">Foto</label> <br />
                    <input type="file" id="foto" /> <br />
                </div>

                <div class="camposform">
                    <label for="contraseña">Contraseña</label> <br />
                    <input type="password" id="contraseña" /> 
                </div>

                <div class="camposform">
                    <label for="confirmarcon">Confirmar contraseña</label> <br />
                    <input type="password" id="confirmarcon" /> <br />
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

export default Form;