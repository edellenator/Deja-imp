import React, {useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import ProductList from "../components/ProductList";
import { QUERY_VENDOR, QUERY_ME } from "../utils/queries"
import { ADD_NOTE, ADD_CONTACT } from "../utils/mutations"

const Vendor = () => {
    // temporary test data
    // const vendors = [
    //     {
    //         id: "1",
    //         name: "Vendor 1",
    //         contacts: [
    //             {
    //                 id: "1",
    //                 name:"Erik Dell",
    //                 title: "Da Baby",
    //                 email: "edellenator@gmail.com",
    //                 phone: "555-555-5555",
    //             },
    //             {
    //                 id: "2",
    //                 name:"Joel Abankwah",
    //                 title: "Da Ba-ba-ba-b0ss",
    //                 email: "daBoss@gmail.com",
    //                 phone: "555-555-5555",
    //             }
    //         ],
    //         street: "1234 vendor street",
    //         city: "Vendorville",
    //         state: "Vendorginia",
    //         zip: "12345",
    //         notes: [
    //             {
    //                 id: '1',
    //                 text:"This vendor has a note",
    //                 dateCreated:"10/10/2020 6:00pm",
    //                 author: "User 1"
    //             },
    //             {
    //                 id: '2',
    //                 text:"This vendor has another note",
    //                 dateCreated:"10/10/2020 6:00pm",
    //                 author: "User 2"
    //             }
    //         ],
    //         products: [
    //             {
    //                 id: '1',
    //                 name: 'item 1',
    //                 stock: 100
    //             },
    //             {
    //                 id: '2',
    //                 name: 'item 2',
    //                 stock: 50
    //             }
    //         ]
    //     },
    //     {
    //         id: "2",
    //         name: "Vendor 2",
    //         contacts: [
    //             {
    //                 id: "1",
    //                 name:"Debbie Neflas",
    //                 title: "The Don",
    //                 email: "TheDon@gmail.com",
    //                 phone: "555-555-5555",
    //             },
    //             {
    //                 id: "2",
    //                 name:"Akeva Melchor",
    //                 title: "El Jefe",
    //                 email: "ElJefe@gmail.com",
    //                 phone: "555-555-5555",
    //             }
    //         ],
    //         street: "1234 vendor street",
    //         city: "Vendorville",
    //         state: "Vendorginia",
    //         zip: "12345",
    //         notes: [
    //             {
    //                 id: '1',
    //                 text:"This vendor has a note",
    //                 dateCreated:"10/10/2020 6:00pm",
    //                 author: "User 1"
    //             },
    //             {
    //                 id: '2',
    //                 text:"This vendor has another note",
    //                 dateCreated:"10/10/2020 6:00pm",
    //                 author: "User 2"
    //             }
    //         ],
    //         products: [
    //             {
    //                 id: '1',
    //                 name: 'item 1',
    //                 stock: 100
    //             },
    //             {
    //                 id: '2',
    //                 name: 'item 2',
    //                 stock: 50
    //             }
    //         ]
    //     },
    // ]
    const {id: vendorId} = useParams();
    // console.log(_id)

    const { loading, data } = useQuery(QUERY_VENDOR, {
        variables:{ id: vendorId }
    })

    const { loading: loadMe, data: myData } = useQuery(QUERY_ME);


    // Add note and Add contact mutations
    const [addContact, {error: contactErr}] = useMutation(ADD_CONTACT)
    const [addNote, {error: noteErr}] = useMutation(ADD_NOTE)

    const vendor = data?.vendor || {};
    const me = data?.myData || {};
    
    // temp find in array to test useParams data
    // const vendor = vendors.find(vendor => {
    //     return vendor.id === id
    // });

    const [contactFormData, setContactFormData] = useState({
        contactName: "",
        title: "",
        email: "",
        phoneNumber: ""
    })
    const [noteFormData, setNoteFormData] = useState({
        noteBody:""
    })

    const {
        contactName,
        title,
        email,
        phoneNumber
    } = contactFormData

    const {
        noteBody
    } = noteFormData
    
    const handleContactFormChange = (e) => {
        const {name, value} = e.target;
        setContactFormData({
            ...contactFormData,
            [name]: value
        });
        console.log(contactFormData);
    };

    const handleContactFormSubmit = async (e) => {
        e.preventDefault();

        try {
            await addContact({
                variables: {
                    input: contactFormData, 
                    vendorId: vendorId
                }
            })
        } catch (contactErr) {
            console.error(contactErr);
        };

        setContactFormData({
            contactName: "",
            title: "",
            email: "",
            phoneNumber: ""
        });
    };

    const handleNoteFormChange = (e) => {
        const {name, value} = e.target;
        setNoteFormData({
            ...noteFormData,
            [name]: value
        });
        console.log(noteFormData);
    };

    const handleNoteFormSubmit = async (e) => {
        e.preventDefault();

        try {
            await addNote({
                variables: {
                    noteBody: noteBody,
                    vendorId: vendorId,
                }
            })
        } catch (noteErr) {
            console.error(noteErr)
        }

        setNoteFormData({noteBody: ""})
    };
    
    if (loading) {
        return <h1 className="justify-center">Loading...</h1>
    }
    
    return (
        <section className="container">
            <div className="flex-row col-9">
                <h1 className="col-3">{vendor.name}</h1>
                <Link to={`/editVendor/${vendor._id}`}>
                    <button className="btn col-3">Edit Vendor</button>
                </Link>
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
                                    {vendor.contact.map((contact) => 
                                        <tr key={contact._id}>
                                            <td>{contact.contactName}</td>
                                            <td>{contact.title}</td>
                                            <td>{contact.email}</td>
                                            <td>{contact.phoneNumber}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                            <form className="flex-row" onSubmit={handleContactFormSubmit}>
                                <div className="col-auto mr-2">
                                    <label className="form-label" htmlFor="contactName">Name</label>
                                    <input className="form-input" type="text" name="contactName" value={contactName} onChange={handleContactFormChange}></input>
                                </div>
                                <div className="col-auto mr-2">
                                    <label className="form-label" htmlFor="title">Title</label>
                                    <input className="form-input" type="text" name="title" value={title} onChange={handleContactFormChange}></input>
                                </div>
                                <div className="col-auto mr-2">
                                    <label className="form-label" htmlFor="email">Email</label>
                                    <input className="form-input" type="email" name="email" value={email} onChange={handleContactFormChange}></input>
                                </div>
                                <div className="col-auto mr-2">
                                    <label className="form-label" htmlFor="phoneNumber">
                                        Phone
                                    </label>
                                    <input className="form-input" type="tel" name="phoneNumber" value={phoneNumber} onChange={handleContactFormChange}></input>
                                </div>
                                <button className="btn col-auto" type="submit">Add Contact</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="flex-column col-4 ml-2">
                    <h3>Notes</h3>
                    {vendor.notes.map((note) => 
                    <div key={note._id} className="card mb-2">
                        <div className="card-body">
                            {note.notesBody}
                        </div>
                        <div className="card-sub">
                            Submitted by: {note.author} on {note.createdAt}
                        </div>
                    </div>
                    )}
                    <form onSubmit={handleNoteFormSubmit}>
                        <textarea 
                            className="form-textarea" 
                            placeholder="Add a note" 
                            name="noteBody" 
                            id="noteBody"
                            value={noteBody}
                            onChange={handleNoteFormChange}
                        />
                        <button className="btn">Add Note</button>
                    </form>
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