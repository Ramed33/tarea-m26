import "./styles.css";
import useAxios from "../hooks/useAxios";
import Product from "./Product";

const ProductMain = () => {
    const { response, loading, error } = useAxios("https://fakestoreapi.com/products");

    return (
        <>
        <article className="title">
            <h1>Products</h1>
        </article>
        <article className="products-container">
                {
                    response !== null && !loading ?
                    response.map( product => {
                        const { title, price, description, category, image, id } = product;
                        return <Product title={title} price={price} description={description} category={category} image={image} key={id}/>;
                    }) : <p>Loading...</p>
                }
        </article>
        </>
    )
}

export default ProductMain;