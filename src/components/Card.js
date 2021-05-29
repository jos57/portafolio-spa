import React from 'react';
import head from '/home/joss/my-landingPage/my-app01/src/images/head(phone).jpg';
import s425 from '../styles/s425.css';



const Card = () => {
    return  <div className=" row col-lg-3 bg-dark shadow-lg p-0 d-flex d-lg-inline mb-md-2 margin-card">

                   
                        
        <div className="card-header m-0 col-lg-12 col-md-6 col-sm-6">
            <img src={head} className=" mt-2 img-fluid"></img>
        </div>


    <div className="card-body d-flex flex-column col-sm-6 col-md-6 col-lg-12">

        <div className="card-title h3 text-center pb-3">Landing Page</div>
        
        <div className="btn btn-info text-white btn-block">Ver Página</div>

        <div className="card-link text-center pt-3">
            <a href="#" className="text-white">Ver Repositorio</a>
        </div>
    </div>

</div>
}

export default Card;