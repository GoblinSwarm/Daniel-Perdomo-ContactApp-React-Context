import React, { useContext } from "react";
import { Context } from "../store/appContext";

//import { NavLink} from "react-router-dom";


export const Contact = () => {
    const { store, actions } = useContext(Context)
    const { user } = store

    //console.log(user.name)

    return (
            <>
                <h1>Welcome to Contact MF!</h1>
            </>
    )
    
};

export default Contact