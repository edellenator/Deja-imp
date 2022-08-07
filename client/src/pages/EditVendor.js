import React, { useState, useEffect } from "react";
import VendorForm from "../components/VendorForm";
import { useParams } from "react-router-dom";

const EditVendor = () => {
    // temp vendor data
    const vendors = [
        {
            id: "1",
            name: "Vendor 1",
            contacts: [
                {
                    id: "1",
                    name:"Erik Dell",
                    title: "Da Baby",
                    email: "edellenator@gmail.com",
                    phone: "555-555-5555",
                },
                {
                    id: "2",
                    name:"Joel Abankwah",
                    title: "Da Ba-ba-ba-b0ss",
                    email: "daBoss@gmail.com",
                    phone: "555-555-5555",
                }
            ],
            street: "1234 vendor street",
            city: "Vendorville",
            state: "Vendorginia",
            zip: "12345",
            notes: [
                {
                    id: '1',
                    text:"This vendor has a note",
                    dateCreated:"10/10/2020 6:00pm",
                    author: "User 1"
                },
                {
                    id: '2',
                    text:"This vendor has another note",
                    dateCreated:"10/10/2020 6:00pm",
                    author: "User 2"
                }
            ],
            products: [
                {
                    id: '1',
                    name: 'item 1',
                    stock: 100
                },
                {
                    id: '2',
                    name: 'item 2',
                    stock: 50
                }
            ]
        },
        {
            id: "2",
            name: "Vendor 2",
            contacts: [
                {
                    id: "1",
                    name:"Debbie Neflas",
                    title: "The Don",
                    email: "TheDon@gmail.com",
                    phone: "555-555-5555",
                },
                {
                    id: "2",
                    name:"Akeva Melchor",
                    title: "El Jefe",
                    email: "ElJefe@gmail.com",
                    phone: "555-555-5555",
                }
            ],
            street: "1234 vendor street",
            city: "Vendorville",
            state: "Vendorginia",
            zip: "12345",
            notes: [
                {
                    id: '1',
                    text:"This vendor has a note",
                    dateCreated:"10/10/2020 6:00pm",
                    author: "User 1"
                },
                {
                    id: '2',
                    text:"This vendor has another note",
                    dateCreated:"10/10/2020 6:00pm",
                    author: "User 2"
                }
            ],
            products: [
                {
                    id: '1',
                    name: 'item 1',
                    stock: 100
                },
                {
                    id: '2',
                    name: 'item 2',
                    stock: 50
                }
            ]
        },
    ];

    

    const {id: idParam} = useParams();

    const vendor = vendors.find((vendor) => {
        return vendor.id === idParam
    });

    const [vendorFormData, setVendorFormData] = useState({
        vendorName: vendor.name,
        vendorContact: "",
        title: "",
        email: "",
        phone: "",
        street: vendor.street,
        city: vendor.city,
        state: vendor.state,
        zip: vendor.zip,
        notes: "",
    });



    return (
        <VendorForm 
            vendorFormData={vendorFormData} 
            setVendorFormData={setVendorFormData} 
        />
    )
}

export default EditVendor;