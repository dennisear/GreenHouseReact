import React from "react"
import {Header, BodyAU} from "../../components"
import '../../utils/css/bodyAUStyles.css'
import image1 from '../../utils/images/user1.png'
import image2 from '../../utils/images/user2.jpg'
import image3 from '../../utils/images/user2.png'
const AboutUs = () =>{
	return(
	<>
	  <Header/>
      <BodyAU/>
	  <div className="objetivos">
	  <h3>Green house es un sitio web creado con el fin de poder brindarles el reconocimiento adecuado a los horticultores y destacar la biodiversidad de árboles y plantas que estos emplean.</h3>
	  </div>
	  <div className="integrantes">
	  <div className="persona">
	  <img id="image2" src={image1} alt="Cargando..."/>
		 <h2>Katerin Torres</h2>
		 <p>Estudiante de desarrollo Front-End en el programa Techpower, Kuepa. Me considero una persona de rapido aprendizaje, dispuesta a nuevas experiencias tanto academicas como laborales. A traves de mis habilidades y conocimientos busco generar mas proyectos que contribuyan al desarrollo social de la comunidad.</p>
	  </div>
	  <div className="persona">
	  <img id="image2" src={image3} alt="Cargando..."/>
	  <h2>Dennis Arango</h2>
	  <p>Estudiante de desarrollo Front-End en el programa Techpower, Kuepa. Me considero una persona muy creativa de rapido aprendizaje, dispuesta a las nuevas experiencias tanto academicas como laborales. A traves de mis habilidades y conocimientos busco generar mas proyectos que contribuyan al desarrollo social de la comunidad.</p>
	  </div>
	  <div className="persona1">
	  <img id="image0" src={image2} alt="Cargando.."/>
	  <h2>Paula Ochoa</h2>
	  <p>Estudiante de desarrollo Front-End en el programa Techpower, Kuepa. Me considero una persona muy creativa de rapido aprendizaje, dispuesta a las nuevas experiencias tanto academicas como laborales. A traves de mis habilidades y conocimientos busco generar mas proyectos que contribuyan al desarrollo social de la comunidad.</p>
	  </div>
	  </div>
	</>
	)
}
export default AboutUs