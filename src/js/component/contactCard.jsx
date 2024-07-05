import React, { useContext } from "react";
import { Context } from "../store/appContext";

/*
    COMO USAR EL STORE
    1.- Importar el hook que manejara el store (useContext)
    2.- Importar el contexto (AppContext)
    3.- implementarlo en el componente (con useContext)
    4.- usar el store o actions
*/

export const contactCard = () => {
    const { store, actions } = useContext(Context)
    const { user } = store

    console.log(user.name)

    return (
            <div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
    )
    
};

export default contactCard;