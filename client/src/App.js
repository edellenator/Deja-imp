import React from "react";
import "./App.css";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Register from "./pages/Register";
import Users from "./pages/Users";
import AddVendor from "./pages/AddVendor";
import AddProduct from "./pages/AddProduct";
import Vendors from "./pages/Vendors"
import Vendor from "./pages/Vendor";
import Products from "./pages/Products";
import Product from "./pages/Product";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Register />} />
            <Route path="/users" element={<Users />} />
            <Route path="/vendor" element={<AddVendor />} />
            <Route path="/vendors" element={<Vendors />} />
            <Route path="/vendor/:id" element={<Vendor />} />
            <Route path="/product" element={<AddProduct />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
