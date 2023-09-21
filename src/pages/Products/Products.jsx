import { useLoaderData } from "react-router-dom";
import ProductsCart from "./ProductsCart";


const Products = () => {
    const { products } = useLoaderData()
    console.log(products)
    return (
        <div className=" mt-10 max-w-screen-2xl mx-auto grid grid-cols-3 gap-3">
            {
                products.map(product => <ProductsCart key={product.id} product={product}></ProductsCart>)
            }
        </div>
    );
};

export default Products;