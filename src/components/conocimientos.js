import React from 'react';
import Card from './Card.js';




const CardDiv = () => {
    return <div id="proyectos" className="alturita">

        
        <div className="container-fluid row align-items-start justify-content-around m-0" style={{ paddingTop:100, paddingBottom:100}}>
            <Card />
            <Card />
            <Card />
        </div>



    </div>
}

export default CardDiv;