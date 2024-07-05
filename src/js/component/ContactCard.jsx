import React, { useContext } from "react";
import { Context } from "../store/appContext";

//import { NavLink, Link } from "react-router-dom" This is to import a link to the next page, I am leaving it as a comment for now


/*
    COMO USAR EL STORE
    1.- Importar el hook que manejara el store (useContext)
    2.- Importar el contexto (AppContext)
    3.- implementarlo en el componente (con useContext)
    4.- usar el store o actions
*/

export const ContactCard = () => {
    const { store, actions } = useContext(Context)
    const { user } = store

    console.log(user.name)

    return (
            <>
                <div className="mb-3">
                    <h1>Add a new contact</h1>
                    <div>
                        <label for="fullNameForm" class="form-label">Full Name</label>
                        <input type="text" class="form-control" id="fullNameForm" placeholder="Full Name" />    
                    </div>
                    <div>
                        <label for="emailForm" class="form-label">Email</label>
                        <input type="text" class="form-control" id="emailForm" placeholder="Enter Email" />    
                    </div>
                    <div>
                        <label for="phoneForm" class="form-label">Phone</label>
                        <input type="text" class="form-control" id="phoneForm" placeholder="Phone" />    
                    </div>
                    <div>
                        <label for="addressForm" class="form-label">Address</label>
                        <input type="text" class="form-control" id="addressForm" placeholder="Address" />    
                    </div>
                    <button type="button" class="btn btn-primary">Save</button>
                    <NavLink className={({ isActive }) => isActive ? "nav-link text-danger" : "nav-link"} to="/contact">Contact</NavLink>
                </div>
            </>
    )
    
};

export default ContactCard;