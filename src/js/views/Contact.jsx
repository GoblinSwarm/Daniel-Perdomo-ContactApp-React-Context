import React, { useContext } from "react";
import { Context } from "../store/appContext";

//import { NavLink} from "react-router-dom";


export const Contact = () => {
    const { store, actions } = useContext(Context)
    const { user } = store

    console.log(user.name)

    return (
            <>

            </>
    )
    
};

export default Contact