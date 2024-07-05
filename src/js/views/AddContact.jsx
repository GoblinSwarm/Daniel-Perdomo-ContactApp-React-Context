import React, { useContext } from "react";
import { Context } from "../store/appContext";

import { NavLink} from "react-router-dom";


/*
    COMO USAR EL STORE
    1.- Importar el hook que manejara el store (useContext)
    2.- Importar el contexto (AppContext)
    3.- implementarlo en el componente (con useContext)
    4.- usar el store o actions
*/

export const AddContact = () => {
    const { store, actions } = useContext(Context)
    const { user } = store

    //console.log(user.name)

    return (
            <>
            <div className="row">
                <div className="mb-3 container col-6">
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
                        <br />
                        <button type="button" class="btn btn-primary col-12">Save</button>
                        <NavLink className={({ isActive }) => isActive ? "nav-link text-danger" : "nav-link"} to="/Contact">Go Back to Contacts</NavLink>
                    </div>
                </div>
            </>
    )
    
};

export default AddContact