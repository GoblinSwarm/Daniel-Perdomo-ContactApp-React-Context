import React, { useContext } from "react";
import { Context } from "../store/appContext";
import person from "../../img/Specter.jpg";
//import { NavLink} from "react-router-dom";


export const Contact = () => {
    const { store, actions } = useContext(Context)
    const { user } = store

    //console.log(user.name)

    return (
            <div>
                <div className="container justify-content-center">
                    <h1>Welcome to Contacts</h1>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">                                
                                <img src={person} className="img-fluid rounded-start"/>
                            </div>
                            <div className="col-md-8">
                                {/*Aca se mapea a las personas agregadas.*/}
                                <div className="card-body">
                                    <h5 className="card-title">Full Name</h5>
                                    <p className="card-text">Phone Number</p>
                                    <p className="card-text">Email</p>
                                    <p className="card-text">Address</p>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
    )
    
};

export default Contact