import React, { useState } from "react";

const AddProduct = () => {
  // temp test data, update to query all vendors
  const vendors = [
    {
      id: 1,
      name: "vendor1",
    },
    {
      id: 2,
      name: "vendor2",
    },
    {
      id: 3,
      name: "vendor3",
    },
    {
      id: 4,
      name: "vendor4",
    },
    {
      id: 5,
      name: "vendor5",
    },
  ];

  const [productFormData, setProductFormData] = useState({
    productName: "",
    productSku: "",
    vendorName: "",
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

  const { productName, productSku, vendorName, description, colors } =
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
          <label className="form-label" htmlFor="vendorName">
            Vendor Name
          </label>
          <select
            className="form-input"
            name="vendorName"
            type="text"
            value={vendorName}
            onChange={handleChange}
          >
            <option value="" disabled hidden>
              Select a vendor...
            </option>
            {vendors.map((vendor) => (
              <option key={vendor.id} value={vendor.name}>
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
