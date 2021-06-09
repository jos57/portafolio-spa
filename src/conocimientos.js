import proyectos from './proyectos.js';
import Card from './Card.js'; 






const CardDiv = () => {


        return <div id="proyectos" className="alturita">

        <div className="container-fluid row align-items-start justify-content-around m-0" style={{ paddingTop:100, paddingBottom:100}}>
            { 
            proyectos.map((card, index) => (<Card key= { index } card = { card }/> ))
            }
        </div>
    </div>
  
    
  

}

export default CardDiv;
        
  

        

    
