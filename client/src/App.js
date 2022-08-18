import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar"
import CategoryPage from "./components/Category/Category";
import Footer from "./components/Footer"
import Login from "./components/Login"
import LoginClient from "./components/Login/pages/ClientLogin"
import LoginProvider from "./components/Login/pages/ProviderLogin"

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:servicetype" element={<CategoryPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/client" element={<LoginClient />} />
        <Route path="/login/provider" element={<LoginProvider />} />
      </Routes >
      <Footer />
    </Router >
  </ApolloProvider >
);

export default App;
