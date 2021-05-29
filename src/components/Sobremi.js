import React from 'react';
import img from '/home/joss/my-landingPage/my-app01/src/images/head(phone).jpg';
import sobremi1 from '../styles/sobremi1.css';



const Sobremi = () => {
    return <div className="vw-100  container-fluid text-dark margen-out row d-flex pb-lg-5" id="sobremi">

                

        
                <div className="row forma shadow-lg">
                    <div className="col-lg-6">
                        <img src={img} className="img-fluid rounded"></img>
                    </div>

                
                    <div className="col-lg-6">
                        <div className="row">
                            <p className=" pt-lg-5 col-md-6 col-md-12 pt-md-3 col-lg-12 text-muted"><em>Proident proident sint non duis incididunt excepteur. Consequat mollit commodo qui eu proident eu officia occaecat incididunt. Sit aliquip enim nostrud esse consequat labore pariatur commodo commodo laboris tempor. Nisi minim est veniam ea do esse.
                                Cillum cillum aliqua quis adipisicing. Ullamco nostrud ipsum veniam elit exercitation Lorem excepteur deserunt sint duis magna incididunt. Anim sunt tempor sint incididunt consequat ullamco. Fugiat commodo proident nostrud esse mollit pariatur duis nostrud. 
                                Laborum incididunt ullamco eu sint pariatur.
                                </em></p>

                            <a className="btn btn-primary text-dark btn-lg offset-lg-3 col-lg-6 offset-lg-3 mt-lg-5" href="#proyectos">Ver Portafolio</a>
                        </div>
                    </div>
                </div>
                
                
            </div>





    
}

export default Sobremi;