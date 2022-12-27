import React from 'react'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
// import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import appContext from '../context/appContext';
import useInitialState from '../hooks/useInitialState';
import { Home, Checkout, Information, Payment, Success, NotFound } from "../containers"
import Layout from '../components/Layout';
import Spinner from '../components/Spinner';

function app() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout><Home /></Layout>,
    },
    {
      path: "checkout",
      element: <Layout><Checkout /></Layout>,
    },
    {
      path: "checkout/information",
      element: <Layout><Information /></Layout>,
    },
    {
      path: "checkout/payment",
      element: <Layout><Payment /></Layout>,
    },
    {
      path: "checkout/success",
      element: <Layout><Success /></Layout>,
    },
    {
      path: "",
      element: <Layout><NotFound /></Layout>,
    }
  ]);

  const initialState = useInitialState();
  
  return (
    <appContext.Provider value={initialState}>
        <RouterProvider router={router} fallbackElement={<Spinner />}/>
    </appContext.Provider>
  )
}

export default app