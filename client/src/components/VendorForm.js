import React from "react";

const VendorForm = ({ vendorFormData, setVendorFormData }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setVendorFormData({
      ...vendorFormData,
      [name]: value,
    });
    console.log(vendorFormData);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  const {
    vendorName,
    vendorContact,
    title,
    email,
    phone,
    street,
    city,
    state,
    zip,
    notes,
  } = vendorFormData;

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h3>Add a Vendor</h3>
      <div className="flex-row">
        <div className="col-7 mr-5">
          <label className="form-label" htmlFor="vendorName">
            Vendor Name
          </label>
          <input
            className="form-input"
            name="vendorName"
            type="text"
            value={vendorName}
            onChange={handleChange}
          />
          <label className="form-label" htmlFor="vendorContact">
            Vendor Contact
          </label>
          <input
            className="form-input"
            name="vendorContact"
            type="text"
            value={vendorContact}
            onChange={handleChange}
          />
          <label className="form-label" htmlFor="title">
            Title
          </label>
          <input className="form-input" name="title" type="text" />
          <label className="form-label" htmlFor="email" value={title}>
            Email
          </label>
          <input
            className="form-input"
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
          />
          <label className="form-label" htmlFor="phone">
            Phone
          </label>
          <input
            className="form-input"
            name="phone"
            type="tel"
            value={phone}
            onChange={handleChange}
          />
          <label className="form-label" htmlFor="street">
            Street
          </label>
          <input
            className="form-input"
            name="street"
            type="text"
            value={street}
            onChange={handleChange}
          />
          <label className="form-label" htmlFor="city">
            City
          </label>
          <input
            className="form-input"
            name="city"
            type="text"
            value={city}
            onChange={handleChange}
          />
          <label className="form-label" htmlFor="state">
            State
          </label>
          <input
            className="form-input"
            name="state"
            type="text"
            value={state}
            onChange={handleChange}
          />
          <label className="form-label" htmlFor="zip">
            Zip Code
          </label>
          <input
            className="form-input"
            name="zip"
            type="text"
            value={zip}
            onChange={handleChange}
          />
        </div>
        <div className="col-4">
          <label className="form-label" htmlFor="notes">
            Notes
          </label>
          <textarea
            className="form-textarea"
            rows="12"
            value={notes}
            onChange={handleChange}
          />
          <button type="submit" className="btn">
            Add Vendor
          </button>
        </div>
      </div>
    </form>
  );
};

export default VendorForm;
