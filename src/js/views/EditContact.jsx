import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams} from "react-router-dom";
import { Context } from "../store/appContext";


// The idea is to bring a contact (just one) 
// Fill the data in the fields 
// Update the old contact for the new one

//getContactById(id)
//updateContact(id, contact)

const initialContact = {
    name: "",
    phone: "",
    email: "",
    address: ""
}

export const EditContact = () => {
    const { actions } = useContext(Context);
    const [ contact, setContact ] = useState(initialContact);
    const { id } = useParams();

    useEffect(() => {
        const fetchContact = async () => {
            //Traigo todos los contactos y busco el contacto que estoy por editar para que se guarden en el formulario
            const allContacts = await actions.getAllContacts();
            const contactData = allContacts.find(contact => contact.id ===parseInt(id))
            if(contactData) {
                setContact(contactData);
            }
        };
        fetchContact();
    }, [id, actions]);


    const handleChange = ({ target }) => {
        setContact({
            ...contact,
            [target.name]: target.value
         })
    }

    const handleSubmit = async (event) => {
        // Call the action to save the contact
        event.preventDefault();
        await actions.updateContact(id, contact);        
    }


    return (
        <>
        <div className="row">
            <div className="mb-3 container col-6">
                <h1>Edit contact</h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="fullNameForm" className="form-label">Full Name</label>
                            <input  className="form-control"
                                    type="text" 
                                    placeholder="Full Name" 
                                    name="name"
                                    value={contact.name}
                                    onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="emailForm" className="form-label">Email</label>
                            <input  className="form-control" 
                                    type="text" 
                                    placeholder="Enter Email" 
                                    name="email"
                                    value={contact.email}
                                    onChange={handleChange}/>    
                        </div>
                        <div>
                            <label htmlFor="phoneForm" className="form-label">Phone</label>
                            <input  className="form-control" 
                                    type="text" 
                                    placeholder="Phone" 
                                    name="phone"
                                    value={contact.phone}
                                    onChange={handleChange} />    
                        </div>
                        <div>
                            <label htmlFor="addressForm" className="form-label">Address</label>
                            <input  className="form-control" 
                                    type="text" 
                                    placeholder="Address" 
                                    name="address" 
                                    value={contact.address}
                                    onChange={handleChange}/>    
                        </div>
                        <br />

                        <button type="submit" className="btn btn-primary col-12">Edit</button>
                        <NavLink className={({ isActive }) => isActive ? "nav-link text-danger" : "nav-link"} to="/contact">Go Back to Contacts</NavLink>

                    </form>
                </div>
            </div>
        </>
)

};

export default EditContact;