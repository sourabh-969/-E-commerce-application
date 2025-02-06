import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import "./style.css";
import { HashRouter, Routes, Route } from 'react-router-dom'; // Import HashRouter, Routes, and Route

// Lazy-loaded components
const ProductDetail = lazy(() => import("./components/ProductDetail.jsx"));
const Cart = lazy(() => import("./components/Cart.jsx"));
const CheckOut = lazy(() => import("./components/CheckOut.jsx"));
const NotFound = lazy(() => import("./components/NotFound.jsx"));
const ProductList = lazy(() => import("./components/ProductList.jsx"));

// Create the root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app with HashRouter
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route
            index
            element={
              <Suspense fallback={<div className='loadingpage'>Loading..</div>}>
                <ProductList />
              </Suspense>
            }
          />
          <Route
            path="/cart"
            element={
              <Suspense fallback={<div className='loadingpage'>Loading..</div>}>
                <Cart />
              </Suspense>
            }
          />
          <Route
            path="/product/:productId" // Dynamic routing using productId
            element={
              <Suspense fallback={<div className='loadingpage'>Loading..</div>}>
                <ProductDetail />
              </Suspense>
            }
          />
          <Route
            path="/checkout"
            element={
              <Suspense fallback={<div className='loadingpage'>Loading..</div>}>
                <CheckOut />
              </Suspense>
            }
          />
          <Route
            path="*" // Catch-all route for 404 errors
            element={
              <Suspense fallback={<div className='loadingpage'>Loading..</div>}>
                <NotFound />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
