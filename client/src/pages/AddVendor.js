import React, { useState } from "react";
import VendorForm from "../components/VendorForm";

const AddVendor = () => {
  const emptyVendorForm = {
    vendorName: "",
    street: "",
    city: "",
    state: "",
    zip: "",
  };

  const emptyContactForm = {
    contactName: "",
    title: "",
    email: "",
    phoneNumber: "",
  };

  const [contactFormData, setContactFormData] = useState(emptyContactForm);
  const [vendorFormData, setVendorFormData] = useState(emptyVendorForm);
  return (
    <VendorForm
      vendorFormData={vendorFormData}
      setVendorFormData={setVendorFormData}
      contactFormData={contactFormData}
      setContactFormData={setContactFormData}
      emptyContactForm={emptyContactForm}
      emptyVendorForm={emptyVendorForm}
    />
  );
};

export default AddVendor;
