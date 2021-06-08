import React from 'react';
import img from '/home/joss/my-landingPage/my-app01/src/escalando.jpg';




const Sobremi = () => {
    return <div className="container-fluid text-dark  margen-out row d-flex pb-lg-5 pt-lg-5" id="sobremi" style={{ width:1100}}>

                

        
                <div className="row shadow-lg border vw-lg-100 py-lg-3">
                    <div className="col-lg-6 col-md-12 mt-3">
                        <img src={img}  alt="imagen-perfil" className="img-fluid px-0 rounded-top offset-md-2 col-md-8 col-lg-11 shadow-lg"></img>
                    </div>

                
                    <div className="col-lg-6">
                        <div className="row">
                            <p className=" pt-lg-5 p-md-5 col-md-6 col-md-12 pt-md-3 col-lg-12 text-muted"><em>
                                Hola espero que estes muy bien, quiero contarte un poco sobre mí, mi nombre es Josué 
                                Ojeda, tengo 32 años y vivo en la ciudad de Tigre, del gran Buenos Aires. Mi experiencia
                                laboral no es relevante por ser de otras áreas a la que pretendo insertarme actualmente, 
                                hace aproximadamente dos años, en la búsqueda de nuevos desafíos y aprendizaje, comienzo a 
                                interesarme en el área tecnológica y más especificamente en desarrollo web, y ese fué el comienzo 
                                de este camino en el que estoy dando mis primeros pasos. Espero formar parte de un equipo de trabajo
                                en el cual pueda crecer, pero no solo eso, de mi parte ofrezco compromiso y responsabilidad para 
                                adaptarme a los desafíos y espectativas esperadas, gracias por leerme.
                               
                                </em></p>

                            <a className="btn btn-primary text-dark btn-lg offset-md-2 col-md-8 offset-lg-3 col-lg-6 offset-lg-3 mt-lg-1 mb-lg-1" href="#proyectos">Ver Portafolio</a>
                        </div>
                    </div>
                </div>
                
                
            </div>





    
}

export default Sobremi;