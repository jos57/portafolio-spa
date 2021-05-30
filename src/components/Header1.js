import React from 'react';

import image from "/home/joss/my-landingPage/my-app01/src/images/head2.jpg"








const Header1 = ()=> {

    
   

  
      
    return <div className="container-fluid jumbotron vw-xl-100 row mx-0 mt-1" id="home" 
    style={{ 
        backgroundImage: `url(${image})` ,
        backgroundRepeat: 'no-repeat',
        backgroundSize:'100%',
        backgroundPosition: 'center',
        maxHeight: '800px'
        
    
        
      }}>

       
                    
                    
                        <div className=" col-12 col-lg-12 shadow-lg justify-content-center">
                            <h1 className="h1 col-12 text-center text-dark  font-weight-light font-italic d-lg-none">Josué Ojeda</h1>
                            <h1 className="d-none display-2 d-lg-block text-dark text-center font-italic    ">josue ojeda</h1>
                            <p className=" col-12 text-center text-white ">Diseño & Desarrollo web</p>
                        </div>
                        <div className=" col-12 col-lg-12 col-md-6 offset-md-3 offset-lg-0 d-flex justify-content-center ">
                            <a className="btn justify-content-center col-lg-6" href="#contacto">
                                <p className="h3 text-dark text-uppercase rounded px-4 p-lg-2 border">Contactar</p>
                            </a>
                        </div>
                    


                    
                           
                                
                           
                   



                
               

            </div>


    
}

export default Header1;