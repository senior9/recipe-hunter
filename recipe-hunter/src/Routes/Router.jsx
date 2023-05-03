import React from 'react';
import { createBrowserRouter} from "react-router-dom";
import Main from '../Layout/Main';
import Login from '../Pages/Login/Login/Login';
import Register from '../Pages/Register/Register';
import LoginLayout from '../Layout/LoginLayout';

const Router = createBrowserRouter([

    {
        path:'/',
        element:<LoginLayout></LoginLayout>,
        children:[
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element: <Register></Register>
            }
        ]
    }
    

])

export default Router;