import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_VENDOR, UPDATE_VENDOR } from "../utils/mutations";
import { capitalizeFirstLetter } from "../utils/helpers";

const VendorForm = (props) => {
  const {
    vendorFormData,
    setVendorFormData,
    contactFormData,
    setContactFormData,
    emptyContactForm,
    emptyVendorForm,
    id,
  } = props;

  const [showModal, setShowModal] = useState(false);
  const [addVendor, { loading: addLoading, error: addError }] =
    useMutation(ADD_VENDOR);
  //   const [updateVendor, { loading: updateLoading, error: updateError }] =
  //     useMutation(UPDATE_VENDOR);
  //   const [updateContact, { loading: contactLoading, error: contactError }] = useMutation(UPDATE_CONTACT);

  const handleReset = () => {
    setContactFormData(emptyContactForm);
    setVendorFormData(emptyVendorForm);
  };
  const handleChangeVendor = (event) => {
    const { name, value } = event.target;
    if (name === "zip") {
      setVendorFormData({
        ...vendorFormData,
        zip: parseInt(value),
      });
    } else {
      setVendorFormData({
        ...vendorFormData,
        [name]: value,
      });
    }
    console.log(vendorFormData);
  };

  const handleChangeContact = (event) => {
    const { name, value } = event.target;
    setContactFormData({
      ...contactFormData,
      [name]: value,
    });
    console.log(contactFormData);
  };

  const handleAddVendor = async (event) => {
    event.preventDefault();
    console.log(vendorFormData, contactFormData);
    const { contactName, title, email, phoneNumber } = contactFormData;
    try {
      await addVendor({
        variables: {
          input: vendorFormData,
          contactName,
          title,
          email,
          phoneNumber,
        },
      });
      setShowModal(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateVendor = async (event) => {
    event.preventDefault();
    try {
      await updateVendor({
        variables: { input: vendorFormData },
      });
      await updateContact({ variables: { input: contactFormData } });
      setShowModal(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setVendorFormData(emptyVendorForm);
    setContactFormData(emptyContactForm);
  };

  const { vendorName, street, city, state, zip, notes } = vendorFormData;

  const { contactName, title, email, phoneNumber } = contactFormData;

  return (
    <div className="container">
      {showModal ? (
        <div className="flex-row justify-center my-custom">
          <div className="card w-50 py-5 text-center ">
            <p>
              {capitalizeFirstLetter(vendorName)} has been{" "}
              {id ? "updated" : "added"}!
            </p>
            <button className="btn w-25" onClick={handleCloseModal}>
              close
            </button>
          </div>
        </div>
      ) : (
        <form
          onSubmit={id ? handleUpdateVendor : handleAddVendor}
          onReset={handleReset}
        >
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
                onChange={handleChangeVendor}
              />
              <label className="form-label" htmlFor="contactName">
                Vendor Contact
              </label>
              <input
                className="form-input"
                name="contactName"
                type="text"
                value={contactName}
                onChange={handleChangeContact}
              />
              <label className="form-label" htmlFor="title">
                Title
              </label>
              <input
                className="form-input"
                name="title"
                type="text"
                value={title}
                onChange={handleChangeContact}
              />
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                className="form-input"
                name="email"
                type="email"
                value={email}
                onChange={handleChangeContact}
              />
              <label className="form-label" htmlFor="phoneNumber">
                Phone
              </label>
              <input
                className="form-input"
                name="phoneNumber"
                type="tel"
                value={phoneNumber}
                onChange={handleChangeContact}
              />
              <label className="form-label" htmlFor="street">
                Street
              </label>
              <input
                className="form-input"
                name="street"
                type="text"
                value={street}
                onChange={handleChangeVendor}
              />
              <label className="form-label" htmlFor="city">
                City
              </label>
              <input
                className="form-input"
                name="city"
                type="text"
                value={city}
                onChange={handleChangeVendor}
              />
              <label className="form-label" htmlFor="state">
                State
              </label>
              <input
                className="form-input"
                name="state"
                type="text"
                value={state}
                onChange={handleChangeVendor}
              />
              <label className="form-label" htmlFor="zip">
                Zip Code
              </label>
              <input
                className="form-input"
                name="zip"
                type="text"
                value={zip}
                onChange={handleChangeVendor}
              />
            </div>
            <div className="col-4">
              {/* <label className="form-label" htmlFor="notes">
                Notes
              </label>
              <textarea
                className="form-textarea"
                rows="12"
                value={notes}
                onChange={handleChangeVendor}
              /> */}
              <button type="reset" className="btn">
                {id ? "Reset Form" : "Clear Form"}
              </button>
              {/* {addLoading || updateLoading ? ( */}
              {addLoading ? (
                <button className="btn">Submitting...</button>
              ) : (
                <button type="submit" className="btn">
                  {id ? "Edit Vendor" : "Add Vendor"}
                </button>
              )}
              {/* {addError ||
                (updateError && ( */}
              {addError && (
                <p className="text-tertiary">Something went wrong!</p>
              )}
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default VendorForm;
