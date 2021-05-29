import React from 'react';
import Card from './Card.js';
import conocimientos from '/home/joss/my-landingPage/my-app01/src/styles/conocimientos.css';



const CardDiv = () => {
    return <div id="proyectos" className="alturita">

        
        <div className="container-fluid row align-items-start justify-content-around m-0">
            <Card />
            <Card />
            <Card />
        </div>



    </div>
}

export default CardDiv;