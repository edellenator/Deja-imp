import React, { useState } from "react";

const AddProduct = () => {
  // temp test data, update to query all vendors
  const vendors = [
    {
      _id: 1,
      name: "vendor1",
    },
    {
      _id: 2,
      name: "vendor2",
    },
    {
      _id: 3,
      name: "vendor3",
    },
    {
      _id: 4,
      name: "vendor4",
    },
    {
      _id: 5,
      name: "vendor5",
    },
  ];

  const [productFormData, setProductFormData] = useState({
    productName: "",
    productSku: "",
    vendorId: "",
    description: "",
    colors: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProductFormData({
      ...productFormData,
      [name]: value,
    });
    console.log(productFormData);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
  };

  const { productName, productSku, vendorId, description, colors } =
    productFormData;

  return (
    <form className="container" onSubmit={handleFormSubmit}>
      <h3>Add a Product</h3>
      <div className="flex-row">
        <div className="col-7 mr-5">
          <label className="form-label" htmlFor="productName">
            Product Name
          </label>
          <input
            className="form-input"
            name="productName"
            type="text"
            value={productName}
            onChange={handleChange}
          />
          <label className="form-label" htmlFor="productSku">
            Product SKU
          </label>
          <input
            className="form-input"
            name="productSku"
            type="text"
            value={productSku}
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
            <option value="" disabled hidden>
              Select a vendor...
            </option>
            {vendors.map((vendor) => (
              <option key={vendor._id} value={vendor._id}>
                {vendor.name}
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
          <label className="form-label" htmlFor="colors">
            Colors
          </label>
          <input
            className="form-input"
            name="colors"
            type="text"
            value={colors}
            onChange={handleChange}
          />
          <button type="submit" className="btn">
            Add Product
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddProduct;
