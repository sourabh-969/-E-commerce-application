import React, { Suspense, lazy }from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import "./style.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const ProductDetail =lazy(()=> import("./components/ProductDetail.jsx"));
const Cart =lazy(()=> import("./components/Cart.jsx"));
const CheckOut =lazy(()=> import("./components/CheckOut.jsx"));
const NotFound =lazy(()=> import("./components/NotFound.jsx"));
const ProductList =lazy(()=> import("./components/ProductList.jsx"));

//creating Routing Configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Suspense fallback={<div>Loading..</div>}><ProductList /></Suspense>,
      },
      {
        path: "/cart",
        element: <Suspense fallback={<div>Loading..</div>}><Cart /></Suspense>,
      },
      {
        path: "/product/:productId",   // dynamic parameter as id
        element: <Suspense fallback={<div>Loading..</div>}><ProductDetail /></Suspense>,
      },
      {
        path: "/checkout",
        element: <Suspense fallback={<div>Loading..</div>}><CheckOut /></Suspense>,
      },
    ],
    errorElement: <Suspense fallback={<div>Loading..</div>}><NotFound /></Suspense>,
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>,
);
