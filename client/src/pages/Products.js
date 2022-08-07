import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import ProductList from "../components/ProductList";


const Products = () => {
    // temporary test data
    const products = [
        {
            id: "1",
            name: "product 1",
            sku: 'abc123',
            stock: "10"
        },
        {
            id: "2",
            name: "product 2",
            sku: 'abc123',
            stock: "20"
        },
        {
            id: "3",
            name: "product 3",
            sku: 'abc123',
            stock: "30"
        },
        {
            id: "4",
            name: "product 4",
            sku: 'abc123',
            stock: "40"
        },
        
    ]
    return (
        <ProductList products={products} />
    );
    
}

export default Products;