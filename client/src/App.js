import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import Login from "./components/Login/LoginMain";
import Signup from "./components/Sign-Up/SignupMain";
import Loading from "./components/Loading";
import Alert from "./components/Alert";
import Successful from "./components/Successful";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} /> {/* Login Route  */}
        <Route path="/signup" element={<Signup />} /> {/* Sign-Up Route */}
        <Route path="/loading" element={<Loading />} /> {/* Loading to see */}
        <Route path="/alert" element={<Alert />} /> {/* Loading to see */}
        <Route path="/success" element={<Successful />} /> {/* Loading to see */}
      </Routes>
    </Router>
  </ApolloProvider>
);

export default App;
