

function App() {
  return (
    <h1 className="text-3xl font-bold underline text-green-500">
      Hello Project3!
    </h1>
  )
}



export default App;


// USE FOR LATER
//

// import React from 'react';
// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import SingleThought from './pages/SingleThought';
// import Header from './components/Header';
// import Footer from './components/Footer';
// const client = new ApolloClient({
//   uri: '/graphql',
//   cache: new InMemoryCache(),
// });
// function App() {
//   return (
//     <ApolloProvider client={client}>
//       <Router>
//         <div className="flex-column justify-flex-start min-100-vh">
//           <Header />
//           <div className="container">
//             <Routes>
//               <Route
//                 path="/"
//                 element={<Home />}
//               />
//               </Routes >
//               </div >
//   <Footer />
//             </div >
//           </Router >
//         </ApolloProvider >
//       );
//     }
// export default App;
//