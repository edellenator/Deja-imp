import ProductList from "../components/ProductList";
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from "../utils/queries";


const Products = () => {
    const { data } = useQuery(QUERY_PRODUCTS);
    const products = data?.products || [];

    return (
        <div>
            <ProductList
                products={products}
            />
        </div>
    );
}

export default Products;