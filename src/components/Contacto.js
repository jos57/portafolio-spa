import React from 'react';
import contacto1 from '../styles/contacto1.css';


const Contacto = () => {
    return <div className="altura1 altura2 mar" id="contacto">

                <h1 className="text-center text-dark p-lg-4 pt-md-5 mt-md-5 shadow-lg">Contacto</h1>

                <form className=" py-5">
                        <div className="container">
                                <div className="offset-lg-2 col-lg-8 offset-lg-2">
                                <div className="row ">
                                            <div className="form-group col-lg-6">
                                                <input placeholder="Nombre" name="name" type="text" className="form-control" />
                                            </div>
                                            <div className="form-group col-lg-6 ">
                                                <input placeholder="Email" name="email" type="email" className="form-control"/>
                                            </div>
                                </div>
                                <div className=" form-group">
                                        <textarea placeholder="Escribe tu mensaje, por favor" className="col-lg-12 form-control" rows="8"></textarea>
                                </div>
                                <div className="row d-flex justify-content-center">
                                    <div className="btn btn-primary col-lg-6 py-3">Enviar</div>
                                </div>
                            </div>
                        </div>


                </form>

    </div>
}

export default Contacto;