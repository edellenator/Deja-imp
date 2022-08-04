import React, {useEffect} from "react";


const Vendors = () => {
    // temporary test data
    const vendors = [
        {
            name: "vendor1",
            productCount: "10"
        },
        {
            name: "vendor2",
            productCount: "200"
        },
        {
            name: "vendor3",
            productCount: "15"
        },
        {
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
                        <tr className="text-center">
                            <td>{vendor.name}</td>
                            <td>{vendor.productCount}</td>
                        </tr>
                        )}
                    </tbody>
                </table>

            </div>
        </section>
    );
    
}

export default Vendors;