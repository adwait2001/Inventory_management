import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import CreateProduct from "./components/create-product.component";
import ViewProduct from "./components/view-product.component";
import ProductsList from "./components/products-list.component";
import Deleteproduct from "./components/DeleteProduct";

import logo from "./logo.png";
import Signin from "./components/Signin";
import Signup from "./components/SignUp";

import { AuthProvider,useAuth } from "./components/AuthContext"
import Header from "./components/Header";


const App = () => {
  return (
    <Router>
    <AuthProvider>
    <div className="container">
      <Header/>
      <br/>
      <Route path="/" exact component={ProductsList} />
      <Route path="/viewProduct/:id" component={ViewProduct} />
      <Route path="/create" component={CreateProduct} />
      <Route path="/Delete/:id" component={Deleteproduct} />
      <Route path="/Signin" component={Signin} />
      <Route path="/Signup" component={Signup} />
    </div>
    </AuthProvider>
  </Router>
  );
}

export default App;

// class App extends Component {
//   render() {
//     return (
     
//     );
//   }
// }

// export default App;
