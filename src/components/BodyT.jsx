import React from 'react' // import ALWAYS react //
import '../utils/css/bodyTStyles.css' // Styles //
import Ejemplo from '../utils/images/ejemplo.jpg'

const BodyT = () => {
    return (
        <div className="InfoBody">
            <ul>
                <li>
                    <input type="checkbox" defaultChecked />
                    <i />
                    <h3> Pinos </h3>
                    <div className="boxes">
                        <div className="box"> <img src={Ejemplo} alt="Pino 1"/> <br />  <a href="#miModal1"> Pino 1 </a> </div>
                        <div className="box"> <img src={Ejemplo} alt="Pino 2"/> <br />  <a href="#miModal2"> Pino 2 </a>  </div>
                        <div className="box"> <img src={Ejemplo} alt="Pino 3"/> <br />  <a href="#miModal3"> Pino 3 </a>  </div>
                    </div>
                </li>
                <li>
                    <input type="checkbox" defaultChecked />
                    <i />
                    <h3> Nativos </h3>
                    <div className="boxes">
                        <div className="box"> <img src={Ejemplo} alt="Pino 1"/> <br />  <a href="#miModal4"> Nativo 1 </a> </div>
                        <div className="box"> <img src={Ejemplo} alt="Pino 2"/> <br />  <a href="#miModal5"> Nativo 2 </a>  </div>
                        <div className="box"> <img src={Ejemplo} alt="Pino 3"/> <br />  <a href="#miModal6"> Nativo 3 </a>  </div>
                    </div>
                </li>
                <li>
                    <input type="checkbox" defaultChecked />
                    <i />
                    <h3> Cáctus y bonsáis </h3>
                    <div className="boxes">
                        <div className="box"> <img src={Ejemplo} alt="Pino 1"/> <br />  <a href="#miModal7"> Cáctus 1 </a> </div>
                        <div className="box"> <img src={Ejemplo} alt="Pino 2"/> <br />  <a href="#miModal8"> Cáctus 2 </a>  </div>
                        <div className="box"> <img src={Ejemplo} alt="Pino 3"/> <br />  <a href="#miModal9"> Cáctus 3 </a>  </div>
                    </div>
                </li>
                <li>
                    <input type="checkbox" defaultChecked />
                    <i />
                    <h3> Introducidos </h3>
                    <div className="boxes">
                        <div className="box"> <img src={Ejemplo} alt="Pino 1"/> <br />  <a href="#miModal10"> Introducido 1 </a> </div>
                        <div className="box"> <img src={Ejemplo} alt="Pino 2"/> <br />  <a href="#miModal11"> Introducido 2 </a>  </div>
                        <div className="box"> <img src={Ejemplo} alt="Pino 3"/> <br />  <a href="#miModal12"> Introducido 3 </a>  </div>
                    </div>
                </li>
            </ul> 

                {/*} --------------  Modals  -------------- {*/}
                <div className="modals">
                    <div id="miModal1" className="modal">
                        <div className="modal-contenido">
                            <div className="Foot"><a href="#">X</a></div>
                            <h2>CREATIVIDAD</h2>
                            <p>     
                                <ul class="slider">
                                    <li id="slide1">En campusMVP</li>
                                    <li id="slide2">encontrarás los mejores</li>
                                    <li id="slide3">cursos online de programación</li>
                                </ul>
                                <nav>
                                    <ul class="menu">
                                        <li><a href="#slide1">Diapositiva 1</a></li>
                                        <li><a href="#slide2">Diapositiva 2</a></li>
                                        <li><a href="#slide3">Diapositiva 3</a></li>
                                    </ul>
                                </nav>
                            </p>
                        </div>  
                    </div>                 

                    <div id="miModal2" className="modal">
                        <div className="modal-contenido">
                            <div className="Foot"><a href="#">X</a></div>
                            <h2>CREATIVIDAD</h2>
                            <p>Soy una persona con sed constante de aprendizaje y descubrimiento. Mi mente está siempre en modo activo. No me conformo con lo existente, desafío las estructuras y rompo con el equilibrio de manera constante.</p>
                        </div>  
                    </div> 
                    <div id="miModal3" className="modal">
                        <div className="modal-contenido">
                            <div className="Foot"><a href="#">X</a></div>
                            <h2>CREATIVIDAD</h2>
                            <p>Soy una persona con sed constante de aprendizaje y descubrimiento. Mi mente está siempre en modo activo. No me conformo con lo existente, desafío las estructuras y rompo con el equilibrio de manera constante.</p>
                        </div>  
                    </div>  
                    <div id="miModal4" className="modal">
                        <div className="modal-contenido">
                            <div className="Foot"><a href="#">X</a></div>
                            <h2>CREATIVIDAD</h2>
                            <p>Soy una persona con sed constante de aprendizaje y descubrimiento. Mi mente está siempre en modo activo. No me conformo con lo existente, desafío las estructuras y rompo con el equilibrio de manera constante.</p>
                        </div>  
                    </div> 
                    <div id="miModal5" className="modal">
                        <div className="modal-contenido">
                            <div className="Foot"><a href="#">X</a></div>
                            <h2>CREATIVIDAD</h2>
                            <p>Soy una persona con sed constante de aprendizaje y descubrimiento. Mi mente está siempre en modo activo. No me conformo con lo existente, desafío las estructuras y rompo con el equilibrio de manera constante.</p>
                        </div>  
                    </div>  
                    <div id="miModal6" className="modal">
                        <div className="modal-contenido">
                            <div className="Foot"><a href="#">X</a></div>
                            <h2>CREATIVIDAD</h2>
                            <p>Soy una persona con sed constante de aprendizaje y descubrimiento. Mi mente está siempre en modo activo. No me conformo con lo existente, desafío las estructuras y rompo con el equilibrio de manera constante.</p>
                        </div>  
                    </div> 
                    <div id="miModal7" className="modal">
                        <div className="modal-contenido">
                            <div className="Foot"><a href="#">X</a></div>
                            <h2>CREATIVIDAD</h2>
                            <p>Soy una persona con sed constante de aprendizaje y descubrimiento. Mi mente está siempre en modo activo. No me conformo con lo existente, desafío las estructuras y rompo con el equilibrio de manera constante.</p>
                        </div>  
                    </div>  
                    <div id="miModal8" className="modal">
                        <div className="modal-contenido">
                            <div className="Foot"><a href="#">X</a></div>
                            <h2>CREATIVIDAD</h2>
                            <p>Soy una persona con sed constante de aprendizaje y descubrimiento. Mi mente está siempre en modo activo. No me conformo con lo existente, desafío las estructuras y rompo con el equilibrio de manera constante.</p>
                        </div>  
                    </div> 
                    <div id="miModal9" className="modal">
                        <div className="modal-contenido">
                            <div className="Foot"><a href="#">X</a></div>
                            <h2>CREATIVIDAD</h2>
                            <p>Soy una persona con sed constante de aprendizaje y descubrimiento. Mi mente está siempre en modo activo. No me conformo con lo existente, desafío las estructuras y rompo con el equilibrio de manera constante.</p>
                        </div>  
                    </div>  
                    <div id="miModal10" className="modal">
                        <div className="modal-contenido">
                            <div className="Foot"><a href="#">X</a></div>
                            <h2>CREATIVIDAD</h2>
                            <p>Soy una persona con sed constante de aprendizaje y descubrimiento. Mi mente está siempre en modo activo. No me conformo con lo existente, desafío las estructuras y rompo con el equilibrio de manera constante.</p>
                        </div>  
                    </div> 
                    <div id="miModal11" className="modal">
                        <div className="modal-contenido">
                            <div className="Foot"><a href="#">X</a></div>
                            <h2>CREATIVIDAD</h2>
                            <p>Soy una persona con sed constante de aprendizaje y descubrimiento. Mi mente está siempre en modo activo. No me conformo con lo existente, desafío las estructuras y rompo con el equilibrio de manera constante.</p>
                        </div>  
                    </div>  
                    <div id="miModal12" className="modal">
                        <div className="modal-contenido">
                            <div className="Foot"><a href="#">X</a></div>
                            <h2>CREATIVIDAD</h2>
                            <p>Soy una persona con sed constante de aprendizaje y descubrimiento. Mi mente está siempre en modo activo. No me conformo con lo existente, desafío las estructuras y rompo con el equilibrio de manera constante.</p>
                        </div>  
                    </div> 
                </div>
        </div>  
    )
}
export default BodyT