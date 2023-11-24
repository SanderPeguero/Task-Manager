import React, { useEffect } from "react";
import {
    Navigate
} from "react-router-dom";
import { useAuth } from '../Context';

const Logout = () => {
    const { logout } = useAuth()

    useEffect(() => {
        logout()
        localStorage.clear();
        window.location.reload();
        
    });


    return (
        <Navigate to='/' replace />
    )

}

export default Logout