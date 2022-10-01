/*

                <div class="camposform">
                    <label for="contraseña">Contraseña
                        <input type="password" id="contraseña" />
                    </label>
                </div>

                <div class="camposform">
                    <label for="confirmarcon">Confirmar contraseña
                        <input type="password" id="confirmarcon" /> 
                    </label> 
                </div>*/
                
const abrir = document.getElementById('abrir');
const modal_container = document.getElementById('modal_container');
const cerrar = document.getElementById('cerrar');
                
abrir.addEventListener('click', () => {
    modal_container.classList.add('show');
});
                
cerrar.addEventListener('click', () => {
    modal_container.classList.remove('show');
});