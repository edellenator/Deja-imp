import React, { useState } from "react";
import VendorForm from "../components/VendorForm";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_VENDOR } from "../utils/queries";

const EditVendor = () => {
  const emptyVendorForm = {
    vendorName: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    notes: "",
  };

  const emptyContactForm = {
    contactName: "",
    title: "",
    email: "",
    phoneNumber: "",
  };

  const [contactFormData, setContactFormData] = useState(emptyContactForm);
  const [vendorFormData, setVendorFormData] = useState(emptyVendorForm);

  const { id: idParam } = useParams();
  console.log(idParam);

  const { loading, data } = useQuery(QUERY_VENDOR, {
    variables: { id: idParam },
  });
  const vendor = data?.vendor || [];

  const { vendorName, street, city, state, zip, notes } = vendor;

  if (data) {
    setVendorFormData({
      vendorName,
      street,
      city,
      state,
      zip,
      notes,
    });
    // setContactFormData({
    //   contactName,
    //   title,
    //   phoneNumber,
    //   email,
    // });
  }

  return (
    <VendorForm
      vendorFormData={vendorFormData}
      setVendorFormData={setVendorFormData}
      //   emptyVendorForm={emptyVendorForm}
      //   contactFormData={contactFormData}
      setContactFormData={setContactFormData}
      //   emptyContactForm={emptyContactForm}
      id={idParam}
    />
  );
};
export default EditVendor;
