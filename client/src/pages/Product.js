import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Product = () => {
    // Sample product data
    const products = [
        {
            id: "1",
            name: "product 1",
            sku: "ABC123-1",
            vendor: "Vendor 1",
            description: "red rum",
            colors: ["Red"],
            stock: 10
        },    
        {
            id: "2",
            name: "product 2",
            sku: "ABC123-2",
            vendor: "Vendor 1",
            description: "monkeys on a bed",
            colors: ["Red", "Beige"],
            stock: 79
        },    
        {
            id: "3",
            name: "product 3",
            sku: "ABC123-3",
            vendor: "Vendor 3",
            description: "Floral Damask",
            colors: ["Purple", "Yellow", "Green"],
            stock: 105
        },    
        {
            id: "4",
            name: "product 4",
            sku: "ABC123-4",
            vendor: "Vendor 4",
            description: "City Scape at Night",
            colors: ["Gray", "Yellow", "Navy"],
            stock: 84
        },    
    ]

    const {id: id} = useParams();

    const data = products.find(data => {
        return data.id === id
    });

    const [currentStock, setStock] = useState( () => {
        if(data) {
           return data.stock
        }
        else {
            return "...loading"
        }
    }
        
    )

    const [adjustStock, setAdjustStock] = useState(0)

    const handleFormChange = (event) => {
        event.preventDefault();
        setAdjustStock(parseInt(event.target.value));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        setStock(currentStock + adjustStock);
       
    };

    return (
        <section className="container">
            <div className="flex-row">
                <div className="flex-column col-6">
                    <h2>{data.name}</h2>
                    <div className="card my-2 ml-5">
                        <h4>SKU: <span>{data.sku}</span></h4>
                        <h4>Vendor: <span>{data.vendor}</span></h4>
                        <h4>Description: <span>{data.description}</span></h4>
                        <h4>Colors: {data.colors.map((color, i, arr) =>
                        i < arr.length - 1 ? <span>{color}, </span> : <span>{color}</span>
                        )}
                        </h4>
                    </div>
                </div>
                <div className="flex-column col-6 ml-2">
                    <h2>Stock: {currentStock}</h2>
                    <form className="form flex-row" onSubmit={handleSubmit}>
                        <label htmlFor="stock" className="form-label">Adjust stock by: </label>
                        <input className="form-input" name="stock" id="stock" type="number" onChange={handleFormChange} />
                        <button className="btn" type="submit">Submit</button>
                    </form>
                    
                    

                </div>
            </div>
        </section>
    )
}

export default Product;