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

    const handleDelete = async (event) => {
        // Call the action to save the contact
        await actions.deleteContact(id);        
    }

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
                                    <div className="d-flex justify-content-around">
                                        <h5 className="card-title">Full Name: {contact.name}</h5>
                                        <div className="justify-content-end">
                                            <button className="btn-edit"><i className="far fa-edit"></i></button>
                                            <button className="btn-delete" onClick={() => handleDelete(contact.id)}><i className="fas fa-window-close"></i></button>
                                        </div>
                                    </div>
                                    <hr />
                                    <p className="card-text"><b>Phone Number</b>: {contact.phone}</p>
                                    <p className="card-text"><b>Email:</b> {contact.email}</p>
                                    <p className="card-text"><b>Address:</b> {contact.address}</p>
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