import React from 'react'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
// import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import appContext from '../context/appContext';
import useInitialState from '../hooks/useInitialState';
import { Home, Checkout, Information, Payment, Success, NotFound } from "../containers"
import Layout from '../components/Layout';

function app() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "checkout",
      element: <Checkout />,
    },
    {
      path: "checkout/information",
      element: <Information />,
    },
    {
      path: "checkout/payment",
      element: <Payment />,
    },
    {
      path: "checkout/success",
      element: <Success />,
    },
    {
      path: "",
      element: <NotFound />,
    }
  ]);

  const initialState = useInitialState();
  
  return (
      <appContext.Provider value={initialState}>
        <Layout>
          <React.StrictMode>
            <RouterProvider router={router} />
          </React.StrictMode>
        </Layout>
      </appContext.Provider>
  )
}

export default app