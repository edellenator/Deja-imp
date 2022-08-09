import React, {useEffect} from "react";
import { Link } from "react-router-dom";

const ProductList = ({products}) => {
    return (
    <section className="container">
            <div className="row">
                <table className="table m-5">
                    <thead>
                        <tr className="text-center">
                            <th className="m-5" scope="col"><h3>Products</h3></th>
                            <th className="m-5" scope="col"><h3>SKU</h3></th>
                            <th className="m-5" scope="col"><h3>Stock</h3></th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => 
                        <tr key={product.id} className="text-center">
                            <td><Link to={`/product/${product.id}`}>{product.name}</Link></td>
                            <td>{product.SKU}</td>
                            <td>{product.stock}</td>
                        </tr>
                        )}
                    </tbody>
                </table>

            </div>
            <Link to="/product" className="ml-2 my-1 px-3 mx-5 py-2 " >
                <button className="btn"><h3>ADD PRODUCT</h3></button>
            </Link>
    </section>
    )

}

export default ProductList;