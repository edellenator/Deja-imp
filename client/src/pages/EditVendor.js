import React, { useState } from "react";
import VendorForm from "../components/VendorForm";
import { useParams } from "react-router-dom";

const EditVendor = () => {
  const emptyVendorForm = {
    vendorName: "",
    street: "",
    city: "",
    state: "",
    zip: "",
  };

  const [vendorFormData, setVendorFormData] = useState(emptyVendorForm);

  const { id: idParam } = useParams();
  console.log(idParam);

  return (
    <VendorForm
      emptyVendorForm={emptyVendorForm}
      setVendorFormData={setVendorFormData}
      vendorFormData={vendorFormData}
      id={idParam}
    />
  );
};
export default EditVendor;
