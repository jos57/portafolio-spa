import React from 'react';
import Card from './Card.js'; 
import proyectos from '/home/joss/my-landingPage/my-app01/src/proyectos.json'




const CardDiv = () => {

    

    return <div id="proyectos" className="alturita">

        
        <div className="container-fluid row align-items-start justify-content-around m-0" style={{ paddingTop:100, paddingBottom:100}}>
            { 
               proyectos.map(card => (<Card key= { card.id } card = { card } />))
            }
           
        </div>
        

      

    </div>
}

export default CardDiv;