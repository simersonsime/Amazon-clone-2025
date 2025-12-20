import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "../Pages/Landing/Landing";
import Auth from "../Pages/Auth/Auth";
import Payment from "../Pages/Payment/Payment";
import Cart from "../Pages/Cart/Cart";
import Orders from "../Pages/Orders/Orders";
import Results from "../Pages/Results/Result";
import ProductDetail from "../Pages/ProductDetail/ProductDetail";
import Product from "../Components/Product/Product";

import PageNotFound from "../Pages/PageNotFound/PageNotFound";

// // For Stripe (backend needed, so commenting out)
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

// // ProtectedRoute requires backend/auth, so commenting out
// import ProtectedRoute from "../Components/ProtectedRoute/ProtectedRoute";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/payments" element={<Payment />} />{" "}
        {/* Removed ProtectedRoute & Stripe */}
        <Route path="/orders" element={<Orders />} />{" "}
        {/* Removed ProtectedRoute */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/products" element={<Product />} />
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default AppRouter;
