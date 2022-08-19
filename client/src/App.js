import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar"
import CategoryPage from "./components/Category/Category";
import ServicePage from "./components/ServicePage/ServicePage"
import Footer from "./components/Footer"

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
        <Route path="/category/:serviceType" element={<CategoryPage />} />
        <Route path="/service/:serviceUserId" element={<ServicePage />} />
      </Routes >
      <Footer />
    </Router >
  </ApolloProvider >
);

export default App;
