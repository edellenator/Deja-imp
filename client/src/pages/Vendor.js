import React, {useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import ProductList from "../components/ProductList";
// import QUERY_VENDOR from
const Vendor = () => {
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
    ]

    const {id: id} = useParams();
    // temp find in array to test useParams data
    const vendor = vendors.find(vendor => {
        return vendor.id === id
    });
    
    // const { loading, data } = useQuery(QUERY_VENDOR)
    return (
        <section className="container">

            <div className="flex-row col-9">
                <h1 className="col-3">{vendor.name}</h1>
                <button className="btn col-3">Edit Vendor</button>
            </div>
            <div className="flex-row">
                <div className="flex-column col-8">
                    <h3>Vendor Contacts</h3>
                    <div className="card col-9">
                        <div className="card-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Phone</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {vendor.contacts.map((contact) => 
                                        <tr key={contact.id}>
                                            <td>{contact.name}</td>
                                            <td>{contact.title}</td>
                                            <td>{contact.email}</td>
                                            <td>{contact.phone}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="flex-column col-4 ml-2">
                    <h3>Notes</h3>
                    {vendor.notes.map((note) => 
                    <div key={note.id} className="card mb-2">
                        <div className="card-body">
                            {note.text}
                        </div>
                        <div className="card-sub">
                            Submitted by: {note.author} on {note.dateCreated}
                        </div>
                    </div>
                    )}
                    <button className="btn">Add Note</button>
                </div>
                <div className="flex-column col-12">
                    <h3 className="mb-1">Address: {vendor.street}</h3>
                    <h3 className="mb-1">City: {vendor.city}</h3>
                    <h3 className="mb-1">State: {vendor.state}</h3>
                    <h3 className="mb-1">Zip: {vendor.zip}</h3>
                </div>
                <hr className="solid col-12" />
                <div className="flex-column col-12">
                    <h3 className="my-2">Products</h3>
                    <ProductList products={vendor.products} />
                </div>
            </div>

        </section>
    )
}

export default Vendor;