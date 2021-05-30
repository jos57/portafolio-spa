import React from 'react';
import img from './head(phone).jpg';




const Sobremi = () => {
    return <div className="container-fluid text-dark  margen-out row d-flex pb-lg-5" id="sobremi" style={{ width:1100 }}>

                

        
                <div className="row shadow-lg border vw-lg-100 py-lg-3">
                    <div className="col-lg-6 col-md-12">
                        <img src={img}  alt="imagen-perfil" className="img-fluid rounded-top offset-md-2 col-md-8 col-lg-11"></img>
                    </div>

                
                    <div className="col-lg-6">
                        <div className="row">
                            <p className=" pt-lg-5 p-md-5 col-md-6 col-md-12 pt-md-3 col-lg-12 text-muted"><em>Proident proident sint non duis incididunt excepteur. Consequat mollit commodo qui eu proident eu officia occaecat incididunt. Sit aliquip enim nostrud esse consequat labore pariatur commodo commodo laboris tempor. Nisi minim est veniam ea do esse.
                                Cillum cillum aliqua quis adipisicing. Ullamco nostrud ipsum veniam elit exercitation Lorem excepteur deserunt sint duis magna incididunt. Anim sunt tempor sint incididunt consequat ullamco. Fugiat commodo proident nostrud esse mollit pariatur duis nostrud. 
                                Laborum incididunt ullamco eu sint pariatur.
                                </em></p>

                            <a className="btn btn-primary text-dark btn-lg offset-md-2 col-md-8 offset-lg-3 col-lg-6 offset-lg-3 mt-lg-5" href="#proyectos">Ver Portafolio</a>
                        </div>
                    </div>
                </div>
                
                
            </div>





    
}

export default Sobremi;