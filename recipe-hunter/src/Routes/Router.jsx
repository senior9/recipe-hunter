import React from 'react';
import { Navigate, createBrowserRouter} from "react-router-dom";
import Main from '../Layout/Main';
import Login from '../Pages/Login/Login/Login';
import Register from '../Pages/Register/Register';
import LoginLayout from '../Layout/LoginLayout';
import Chief from '../Pages/Home/Chiefs/Chief';
import ChiefLayout from '../Layout/ChiefLayout';
import Recipe from '../Pages/Home/Recipe/Recipe';
import RecipeLayout from '../Layout/RecipeLayout';
import NotFound from '../Pages/Home/NotFound/NotFound';
import Blog from '../Pages/Blog/Blog';
import PrivateRoute from '../Shared/Private/PrivateRoute/PrivateRoute';

const Router = createBrowserRouter([

    {
        path:'/',
        element:<LoginLayout></LoginLayout>,
        children:[
            {
                path:'/',
                element: <Navigate to="/home"></Navigate>
            }
            ,
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element: <Register></Register>
            },
        ]
    },
    {
       path:'home',
       element:<Main></Main>,
       children:[
        {
            path:'chief',
            element: <Chief></Chief>,
            loader: ()=>fetch("https://client-server-senior9.vercel.app/chief")
        },

       ]
    },
    {
        path:'recipe',
        element: <RecipeLayout></RecipeLayout>,
        children:[
            {
                path:":id",
                element:<PrivateRoute><Recipe></Recipe></PrivateRoute>,
                loader: ({params})=>fetch(`https://client-server-senior9.vercel.app/recipe/${params.id}`)
            },
        ],
    },
    {
        path:"blog",
        element:<Blog></Blog>
    },
    {
        path: '*',
        element: <NotFound></NotFound>,
    }

    

])

export default Router;