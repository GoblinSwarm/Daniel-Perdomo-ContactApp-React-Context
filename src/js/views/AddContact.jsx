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
    const { store, actions } = useContext(Context);
    const [ contact, setContact ] = useState(initialContact);
    
    const handleChange = ({target}) => {
        setContact({
            ...contact,
            [target.name]: target.value
         })
    }

    const handleSubmit = async () => {
        // Call the action to save the contact
        await actions.createContact(contact);
        // Reset the form
        setContact(initialContact);
    }

    return (
            <>
            <div className="row">
                <div className="mb-3 container col-6">
                    <h1>Add a new contact</h1>
                        <form>
                            <div>
                                <label for="fullNameForm" className="form-label">Full Name</label>
                                <input  className="form-control"
                                        type="text" 
                                        placeholder="Full Name" 
                                        name="name"
                                        onChange={handleChange}/>
                            </div>
                            <div>
                                <label for="emailForm" className="form-label">Email</label>
                                <input  className="form-control" 
                                        type="text" 
                                        placeholder="Enter Email" 
                                        name="email"
                                        onChange={handleChange}/>    
                            </div>
                            <div>
                                <label for="phoneForm" className="form-label">Phone</label>
                                <input  className="form-control" 
                                        type="text" 
                                        placeholder="Phone" 
                                        name="phone"
                                        onChange={handleChange} />    
                            </div>
                            <div>
                                <label for="addressForm" className="form-label">Address</label>
                                <input  className="form-control" 
                                        type="text" 
                                        placeholder="Address" 
                                        name="address" 
                                        onChange={handleChange}/>    
                            </div>
                            <br />

                            <button type="button" className="btn btn-primary col-12" onClick={handleSubmit}>Save</button>
                            <NavLink className={({ isActive }) => isActive ? "nav-link text-danger" : "nav-link"} to="/Contact">Go Back to Contacts</NavLink>

                        </form>
                    </div>
                </div>
            </>
    )
    
};

/* 
    1.- Tomar los datos del formulario (handleChange) **Se guarda en el estado**
    2.-
*/

export default AddContact;