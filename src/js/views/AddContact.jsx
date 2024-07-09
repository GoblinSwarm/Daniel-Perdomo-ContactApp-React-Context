import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { NavLink} from "react-router-dom";

/*
    COMO USAR EL STORE
    1.- Importar el hook que manejara el store (useContext)
    2.- Importar el contexto (AppContext)
    3.- implementarlo en el componente (con useContext)
    4.- usar el store o actions
*/

const initialContact = {
    name: "",
    phone: "",
    email: "",
    address: ""
}

export const AddContact = () => {
    const { actions } = useContext(Context);
    const [ contact, setContact ] = useState(initialContact);

    const handleChange = ({ target }) => {
        setContact({
            ...contact,
            [target.name]: target.value
         })
    }

    const handleSubmit = async (event) => {
        // Call the action to save the contact
        event.preventDefault();
        await actions.createContact(contact);        
        setContact(initialContact);
    }



    return (
            <>
            <div className="row">
                <div className="mb-3 container col-6">
                    <h1>Add a new contact</h1>
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

                            <button type="submit" className="btn btn-primary col-12">Save</button>
                            <NavLink className={({ isActive }) => isActive ? "nav-link text-danger" : "nav-link"} to="/contact">Go Back to Contacts</NavLink>

                        </form>
                    </div>
                </div>
            </>
    )
    
};

export default AddContact;