import React from "react";
import { ApolloClient, 
  InMemoryCache,
  ApolloProvider } from "@apollo/client";
// import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

  
const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
  cache: new InMemoryCache(),
});

// // Construct our main GraphQL API endpoint
// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

// // Construct request middleware that will attach the JWT token to every request as an `authorization` header
// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem('id_token');
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

// const client = new ApolloClient({
//   // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });


const App = () => (
  <ApolloProvider client={client}>
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
      </Routes>
      <Footer />
    </Router>
  </ApolloProvider>
);

export default App;
