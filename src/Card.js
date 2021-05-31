import React from 'react';







const Card = (props) => {

    const  { card } = props;


    return  <div className=" row col-lg-3 m-lg-1 bg-dark shadow-lg p-0 d-flex d-lg-inline mb-md-2 mb-4">
                
        <div className="card-header m-0 col-lg-12 col-md-6 col-sm-6">
            <img src={ card.img }  alt= {card.copy} className=" mt-2 img-fluid"/>
        </div>


    <div className="card-body d-flex flex-column col-sm-6 col-md-6 col-lg-12">

        <div className="card-title h3 text-center pb-3">{card.title}</div>
        
        <div className="btn btn-info text-white btn-block">Ver Página</div>

        <div className="card-link text-center pt-3">
            <a href="#repo" className="text-white">Ver Repositorio</a>
        </div>
    </div>

</div>
}

export default Card;