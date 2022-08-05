import React, {useEffect} from "react";
import { Link } from "react-router-dom";


const Vendors = () => {
    // temporary test data
    const vendors = [
        {
            id: "1",
            name: "vendor1",
            productCount: "10"
        },
        {
            id: "2",
            name: "vendor2",
            productCount: "200"
        },
        {
            id: "3",
            name: "vendor3",
            productCount: "15"
        },
        {
            id: "4",
            name: "vendor3",
            productCount: "69"
        }
    ]
    return (
        <section className="container">
            <div className="row">
                <table className="table m-5">
                    <thead>
                        <tr className="text-center">
                            <th className="m-5" scope="col"><h3>Vendors</h3></th>
                            <th className="m-5" scope="col"><h3>Product Count</h3></th>
                        </tr>
                    </thead>
                    <tbody>
                        {vendors.map((vendor) => 
                        <tr key={vendor.id} className="text-center">
                            <td><Link to={`/vendor/${vendor.id}`}>{vendor.name}</Link></td>
                            <td>{vendor.productCount}</td>
                        </tr>
                        )}
                    </tbody>
                </table>

            </div>
            <Link to="/vendor" className="ml-2 my-1 px-3 mx-5 py-2 " >
                <button className="btn"><h3>ADD VENDOR</h3></button>
            </Link>
        </section>
    );
    
}

export default Vendors;