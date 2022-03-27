import React, { useState, useEffect } from "react";
import { Navigate } from 'react-router';
import { deleteCookie, getCookie } from "../../utils/cookie"

export const Dashboard = () => {
    const clearMe = () => {
        deleteCookie('access_token');
    }
    const [count, setCount] = useState(0);
    const userAccessToken = getCookie('access_token');

    const checkState = () => {
        if (!userAccessToken) {
            return <Navigate to='/' />;
        }
    }


    useEffect(() => {
        checkState();
    });


    return (

        <div>
            <h1>Hello World!!</h1>
            <button onClick={clearMe()} >clear cookie</button>
        </div>

    )
}