import React, { useState } from "react";
import VendorForm from "../components/VendorForm";

const AddVendor = () => {
  const [vendorFormData, setVendorFormData] = useState({
    vendorName: "",
    vendorContact: "",
    title: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    notes: "",
  });
  return (
    <VendorForm
      vendorFormData={vendorFormData}
      setVendorFormData={setVendorFormData}
    />
  );
};

export default AddVendor;
