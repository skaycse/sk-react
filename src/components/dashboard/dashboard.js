import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { deleteCookie, getCookie } from "../../utils/cookie"

export const Dashboard = () => {
    const navigate = useNavigate();
    const clearMe = () => {
        deleteCookie('access_token');
        navigate('/');
    }
    const userAccessToken = getCookie('access_token');

    const checkState = () => {
        if (!userAccessToken) {
            navigate('/');
        }
    }

    useEffect(() => {
        checkState();
    }, []);


    return (

        <div>
            <h1>Hello World!!</h1>
            <button onClick={() => clearMe()} >Logout</button>
        </div>

    )
}