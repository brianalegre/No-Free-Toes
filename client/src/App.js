import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import SingleServicePage from "./components/ServiceType/ServiceType";
import CategoryPage from "./components/Category/Category";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/" element={<CategoryPage />} />
        <Route path="/category/:servicetype" element={<SingleServicePage />} />
      </Routes>
    </Router>
  </ApolloProvider>
);

export default App;
