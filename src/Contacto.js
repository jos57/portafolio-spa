import React from 'react';



const Contacto = () => {
    return <div className="altura1 altura2 col-sm-12" id="contacto">

                <h1 className="text-center text-dark p-lg-4 pt-md-5 mt-md-5 shadow-lg">Contacto</h1>

<<<<<<< HEAD
                <form className=" py-5 " name="contact" method="POST">
                <input type="hidden" name="form-name" value="contact" />
=======
                <form className="py-5" name="contacto" method="POST" netlify="true">
>>>>>>> cb8c5af048f7cd58b0b32be230e7cd28ded3bfa9
                        <div className="container">
                                <div className="offset-lg-2 col-lg-8 offset-lg-2">
                                <div className="row ">
                                            <div className="form-group col-lg-6">
                                                <input placeholder="Nombre" name="name" type="text" className="form-control" required />
                                            </div>
                                            <div className="form-group col-lg-6 ">
                                                <input placeholder="Email" name="email" type="email" className="form-control" required/>
                                            </div>
                                </div>
                                <div className=" form-group">
                                        <textarea name="textarea" type="textarea" placeholder="Escribe tu mensaje, por favor" className="col-lg-12 form-control" rows="8"></textarea>
                                </div>
                                <div className="row d-flex justify-content-center">
<<<<<<< HEAD
                                    <input className="btn btn-primary col-lg-6 py-3" type="submit" value="Enviar" />
=======
                                    <button className="btn btn-primary col-lg-6 py-3" type="submit" >Enviar</button>
>>>>>>> cb8c5af048f7cd58b0b32be230e7cd28ded3bfa9
                                </div>
                            </div>
                        </div>


                </form>

    </div>
}

export default Contacto;
