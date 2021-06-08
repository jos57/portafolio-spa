import React from 'react';








const Card = ({card}) => {

    const { img, title, copy, url, repo, desc } = card
    

    return  <div className=" row col-lg-3 m-lg-1 bg-dark shadow-lg p-0 d-flex d-lg-inline mb-md-2 mb-4">
                
        <div className="card-header m-0 col-lg-12 col-md-6 col-sm-6">
            <img src={ img }  alt= {copy} className=" mt-2 img-fluid"/>
        </div>


    <div className="card-body d-flex flex-column col-sm-6 col-md-6 col-lg-12">

        <div className="card-title h3 text-center pb-1">{title}</div>
        <p>{ desc }</p>
        
        <a className="btn btn-info text-white btn-block" href={ url } target="_blank">Ver Página</a>

        <div className="card-link text-center pt-3">
            <a href={ repo } target="_blank" className="text-white">Ver Repositorio</a>
        </div>
    </div>

</div>
}

export default Card;