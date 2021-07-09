import React from 'react' // import ALWAYS react //
import '../utils/css/bodyTStyles.css' // Styles //
import asesora1 from '../utils/images/otrasesora.jpg'
import asesora2 from '../utils/images/asesora.jpg'
import asesores from '../utils/images/asesor.jpg'

const BodyT = () => {
    return (
        <div className="BodyT">
            <div className="acordeonvertical">
                <ul>
                    <li>
                        <h3>¿Cómo sembrar?</h3>
                        <div className="item-content">
                            <div className="text">
                                En este video podrás encontrar una serie de tips que te ayudaran a sembrar tus diferentes plantas o semillas y también te solucionaran dudas de estas, es muy corto, pero muy claro al explicar la manera correcta de sembrar.                    
                            </div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/h5VcsO5WeQc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </li>
                    <li>
                        <h3>Cuidados de un jardín en casa</h3>
                        <div className="item-content">
                            <div className="text">
                              En este vídeo podrás encontrar diferentes pasos para tener un cuidado de tu jardín en casa. Es necesario que tengas una agenda para que tomes nota de estas ya que te ayudarán a tener un mejor orden en el cuidado de ellas.
                            </div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/rzlgslVSNwQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </li>
                    <li>
                        <h3>¿Qué tener en cuenta a la hora de sembrar una planta?</h3>
                        <div className="item-content">
                            <div className="text">
                              En este vídeo podrás saber como puedes comprar una planta en buen estado o semilla de tu agrado ya que es importante vender a los clientes algo duradero y de agrado.
                            </div>
                            <iframe width="560" height="315" src=" https://www.youtube.com/embed/Wqoco0tCnAc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </li>
                    <li>
                        <h3>¿Cómo cuidar un bonsái?</h3>
                        <div className="item-content">
                            <div className="text">
                              Este vídeo es muy útil para las personas que tiene este tipo de planta, ya que, es de gran cuidado y de mucha riqueza , también es para que las personas sepan un pocomás de esta por lo que no es reconocida casi en ningun lugar.                            
                            </div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/yxeJwVdW0Hg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </li>
                    <li>
                        <h3>¡Decora con plantas! (ideas)</h3>
                        <div className="item-content">
                            <div className="text">
                              Este vídeo será un espacio muy agradable ya que encontraras diferentes maneras creativas de decorar lugares como: la casa, la empresa, el cuarto, la sala, un jardin demás lugares que querrás tener como una obra de arte y que no se requiere de dinero sino de cosas recicladas u objetos que no utilices en casa.
                            </div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/yxeJwVdW0Hg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </li>                
                </ul>
            </div>
            <div className="containerCard">
                <div className="card">
                    <figure>
                    <img src={asesora1} alt="Asesora Nini"/>
                    </figure>
                    <div className="contenido"><br />
                    <h3>Nini Vásquez</h3>
                    <p>Ha dedicado toda su vida a vigilar las cosechas durante todo el año, sobre todo las que tienen dificultades para sobrevivir al aire libre, cuidando el riego y condiciones como la luz, la temperatura y la humedad.</p>
                    <br /><h4><a href="https://wa.link/o3a1ut">CONTÁCTO</a></h4>
                    </div>
                </div>
                <div className="card">
                    <figure>
                    <img src={asesora2} alt="Asesora Juana"/>
                    </figure>
                    <div className="contenido"><br />
                    <h3>Juana Orduz</h3>
                    <p>Ha dedicado su vida a de producir nuevas plantas sembrando semillas y bulbos, cultivándolas mediante esquejes o injertos. La micropropagación es la producción de plantas a partir de células de plantas padres en un laboratorio.</p>
                    <br /><h4><a href="https://wa.link/ah2ufq">CONTÁCTO</a></h4>
                    </div>
                </div>
                <div className="card">
                    <figure>
                    <img src={asesores} alt="Asesores Ana y Gustavo"/>
                    </figure>
                    <div className="contenido"><br />
                    <h3>Gustavo y Ana Botía</h3>
                    <p>Han dedicado toda su vida a cultivar frutas, vegetales, flores, plantas ornamentales, árboles y arbustos para la venta. Trabajan en lugares como granjas frutícolas, huertas, viveros de plantas y centros de jardinería</p>
                    <br /><h4><a href="https://wa.link/zqt7ae">CONTÁCTO</a></h4>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default BodyT