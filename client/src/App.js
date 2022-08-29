import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
// import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import "./index.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import CategoryPage from "./components/Category/Category";
import ServicePage from "./components/ServicePage/ServicePage";
import Footer from "./components/Footer";
import Login from "./components/Login/Login";
import LoginClient from "./components/Login/pages/ClientLogin";
import LoginProvider from "./components/Login/pages/ProviderLogin";
import Signup from "./components/Signup/SignUp";
import SignupClient from "./components/Signup/pages/ClientSignup";
import SignupProvider from "./components/Signup/pages/ProviderSignup";
<<<<<<< HEAD
import UserProfilePage from "./components/UserProfilePage/UserProfilePage";
import TimeSlot from "./components/TimeSlot";
=======
import UserAccount from "./components/UserAccount/UserAccount";
import ServiceAccount from "./components/ServiceAccount/ServiceAccount";
>>>>>>> 0e70b0ed48e532eef0e661188fd5e69905c82308

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <Toaster position="bottom-center" reverseOrder={false} />
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service/:serviceUserId" element={<ServicePage />} />
        <Route path="/category/:categoryId" element={<CategoryPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/client" element={<LoginClient />} />
        <Route path="/login/provider" element={<LoginProvider />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup/client" element={<SignupClient />} />
        <Route path="/signup/provider" element={<SignupProvider />} />

<<<<<<< HEAD
        {/* TEST ROUTE */}
        <Route path="/test" element={<TimeSlot />} />
        {/* TEST ROUTE */}

        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/profile/:loggedInUserId" element={<UserProfilePage />} />
=======
        <Route path="/nuser/:loggedInUserId" element={<UserAccount />} />
        <Route path="/suser/:loggedInUserId" element={<ServiceAccount />} />
>>>>>>> 0e70b0ed48e532eef0e661188fd5e69905c82308
      </Routes>
      <Footer />
    </Router>
  </ApolloProvider>
);

export default App;
