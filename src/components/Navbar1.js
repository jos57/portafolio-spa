import React from 'react';


//import Navbar1s from './styles/Navbar1s.css';

const Navbar1 = ()=>{
 
  let item_1 = 'Home';
  let item_2 = 'Proyectos';
  let item_3 = 'Sobre mí';
  let item_4 = 'Contactos';

     const [ est, setEst ] = React.useState();
    

  
 
    const func = (e) => setEst(e.target.id)
          

 


 return <div className="shadow-lg navbar-dark bg-dark sticky-top row">
            <nav className="navbar navbar-expand-sm vw-100" aria-label="Third navbar example" >
              <div className="container-fluid">
            
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse collapse row" id="navbarsExample03" >
                  <ul className=" active-page text-uppercase navbar-nav  mb-2 mb-sm-0 mx-3 col-md-12 offset-md-2 col-md-8 offset-md-2 justify-content-around "
                   onClick={ func }> 
                    <li className="nav-item ">
                      <a className= { est === "1" ? "nav-link text-primary" : "nav-link" }  id="1" aria-current="page" href="#home">{item_1}</a>
                        
                    </li>
                    <li className="nav-item">
                      <a className= { est === "2" ? "nav-link text-primary" : "nav-link" }   id="2" href="#proyectos">{item_2}</a>
                    </li>
                    <li className="nav-item">
                      <a className={ est === "3" ? "nav-link text-primary" : "nav-link" } id="3" href="#sobremi">{item_3}</a>
                    </li>
                    <li className="nav-item">
                      <a className={ est === "4" ? "nav-link text-primary" : "nav-link" }  id="4"  href="#contacto" tabIndex="-1" aria-disabled="true">{item_4}</a>
                    </li>
                  
                  </ul>
                  
                </div>
              </div>
            </nav>       
</div>
}
  
export default Navbar1;
 


  
        

    
          




      
    

