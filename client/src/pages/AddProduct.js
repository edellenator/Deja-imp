import React, { useState } from "react";
import { capitalizeFirstLetter } from "../utils/helpers";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_PRODUCT } from "../utils/mutations";
import { QUERY_VENDORS } from "../utils/queries";

const AddProduct = () => {
  const emptyForm = {
    name: "",
    SKU: "",
    stock: "",
    vendorId: "",
    description: "",
    color: "",
  };
  const [productFormData, setProductFormData] = useState(emptyForm);
  const [productAdded, setProductAdded] = useState(false);
  const [addProduct, { loading, error }] = useMutation(ADD_PRODUCT);
  const { data } = useQuery(QUERY_VENDORS);
  const vendors = data?.vendors || [];

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "stock") {
      setProductFormData({
        ...productFormData,
        stock: parseInt(value),
      });
    } else {
      setProductFormData({
        ...productFormData,
        [name]: value,
      });
    }
    console.log(productFormData);
  };

  const handleFormSubmit = async (event) => {
    console.log(productFormData);
    event.preventDefault();

    try {
      await addProduct({
        variables: { input: productFormData },
      });
      setProductAdded(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCloseModal = () => {
    setProductAdded(false);
    setProductFormData(emptyForm);
  };

  const { name, SKU, stock, vendorId, description, color } = productFormData;

  return (
    <div className="container">
      {productAdded ? (
        <div className="flex-row justify-center my-custom">
          <div className="card w-50 py-5 text-center ">
            <p>{capitalizeFirstLetter(name)} has been added!</p>
            <button className="btn w-25" onClick={handleCloseModal}>
              close
            </button>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleFormSubmit}
          onReset={() => setProductFormData(emptyForm)}
        >
          <h3>Add a Product</h3>
          <div className="flex-row">
            <div className="col-7 mr-5">
              <label className="form-label" htmlFor="name">
                Product Name
              </label>
              <input
                className="form-input"
                name="name"
                type="text"
                value={name}
                onChange={handleChange}
              />
              <label className="form-label" htmlFor="SKU">
                Product SKU
              </label>
              <input
                className="form-input"
                name="SKU"
                type="text"
                value={SKU}
                onChange={handleChange}
                required
              />
              <label className="form-label" htmlFor="stock">
                Initial Stock
              </label>
              <input
                className="form-input"
                name="stock"
                type="number"
                value={stock}
                onChange={handleChange}
                required
              />
              <label className="form-label" htmlFor="vendorId">
                Vendor Name
              </label>
              <select
                className="form-input"
                name="vendorId"
                type="text"
                value={vendorId}
                onChange={handleChange}
              >
                <option value="" hidden>
                  Select a vendor...
                </option>
                {vendors.map((vendor) => (
                  <option key={vendor._id} value={vendor._id}>
                    {vendor.vendorName}
                  </option>
                ))}
              </select>
              <label className="form-label" htmlFor="description">
                Description
              </label>
              <textarea
                className="form-textarea"
                name="description"
                rows="3"
                value={description}
                onChange={handleChange}
              />
              <label className="form-label" htmlFor="color">
                Colors
              </label>
              <input
                className="form-input"
                name="color"
                type="text"
                value={color}
                onChange={handleChange}
              />
              <button type="reset" className="btn">
                Clear Form
              </button>
              {loading ? (
                <button className="btn">Submitting...</button>
              ) : (
                <button type="submit" className="btn">
                  Add Product
                </button>
              )}
              {error && <p className="text-tertiary">Something went wrong!</p>}
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddProduct;
