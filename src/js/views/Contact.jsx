import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { NavLink} from "react-router-dom";
//Archivos Adicionales
import person from "../../img/Specter.jpg";



export const Contact = () => {
    const { store, actions } = useContext(Context);
    const { contacts } = store;

    const initialContact = {
        name: "",
        email: "",
        phone: "",
        address: ""
    }
    
    useEffect(() => {
        actions.getAllContacts();
    }, [])


    return (
            <div>
                <div className="container col-6 justify-content-center">
                    <h1>Welcome to Contacts</h1>
                    <NavLink to="/addcontact">
                        <button type="button" className="btn btn-primary col-2">Add Contact</button>
                    </NavLink>
                    {contacts.map((contact, index) => (
                    <div className="card mb-3 mt-3" key={index}>
                        <div className="row g-0">
                            <div className="col-md-4">                                
                                <img src={person} className="img-fluid rounded-start" alt="Contact"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Full Name: {contact.name}</h5>
                                    <hr />
                                    <p className="card-text">Phone Number: {contact.phone}</p>
                                    <p className="card-text">Email: {contact.email}</p>
                                    <p className="card-text">Address: {contact.address}</p>
                                </div>
                            </div>
                        </div>
                    </div>    
                    ))}
                </div>
            </div>
    )
    
};

export default Contact