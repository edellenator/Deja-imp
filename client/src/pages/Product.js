import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_PRODUCT } from "../utils/queries";
import { UPDATE_STOCK } from '../utils/mutations'

const Product = () => {
    const {id: id} = useParams();   
    const [adjustStock, setAdjustStock] = useState(0)

    const { loading, data } = useQuery(QUERY_PRODUCT, {
        variables: { id: id },
    });

    const [updateStock, {error}] = useMutation(UPDATE_STOCK);

    const product = data?.product || [];

        const [currentStock, setStock] = useState(product.stock || 0);

         if (currentStock === 0 && product.stock) {
            setStock(product.stock);
         };

        const handleFormChange = (event) => {
            event.preventDefault();
            setAdjustStock(event.target.value);
        };

        const handleSubmit = async event => {
            event.preventDefault();
            const newStock = parseInt(currentStock) + parseInt(adjustStock);

            try {
                  await updateStock({
                    variables: { id: product._id, stock: newStock }
                })
            } catch (err) {
                console.log(err)
            }
            window.location.reload();
        };

        return (
            <section className="container">
                {loading ? (
                    <div>loading</div>
                ) : (
                    <div className="flex-row mt-5">
                    <div className="card col-6 mr-1">
                        <h2 className="mb-3 card-header my-0 text-center">Product: {product.name}</h2>
                        <div className="card-body bg-primary">
                            <h4 className="bg-secondary mb-1 pl-2">SKU: {product.SKU}</h4>
                            <h4 className="bg-secondary mb-1 pl-2">Vendor: {product.vendor.vendorName}</h4>
                            <h4 className="bg-secondary mb-1 pl-2">Description: {product.description}</h4>
                            <h4 className="bg-secondary mb-1 pl-2">Colors: {product.color}</h4>
                        </div>
                    </div>
                    <div className="card col-6 ml-2">
                        <h2 className="card-header my-0 text-center">Stock: {currentStock}</h2>
                        <form className="form flex-row card-body mt-4" onChange={handleFormChange}>
                            <label htmlFor="stock" className="form-label">Adjust stock by: </label>
                            <input className="form-input" name="stock" id="stock" type="number"/>
                            <button className="btn" type="button" onClick={handleSubmit}>Submit</button>
                        </form>
                    </div>
                </div>
                )}
        </section>
       )
}

export default Product;