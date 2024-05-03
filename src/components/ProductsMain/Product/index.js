import "./styles.css";

const Product = ({ title, price, description, category, image, id }) => {
    return(
        <section className="product">
            <img src={image} alt={title}/>
            <h4>{title}</h4>
            <p>$ {price}</p>
            <button>Add to cart</button>
        </section>
    )
}

export default Product;