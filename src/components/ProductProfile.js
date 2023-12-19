import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, addWishlist } from "../features/cartSlice";
import "./ProductProfile.css";

const ProductProfile = () => {
  const data = useSelector((state) => state.allCart.products);
  const dispatch = useDispatch();
  const { productId } = useParams();

  const product = data.find((product) => String(product.id) === productId);
  console.log(product);
  const { img, title, price, description, category } = product;

  return (
    <>
      <main className="container">
        <div className="left-column">
          <img data-image="red" class="active" src={img} alt="" />
        </div>

        <div className="right-column">
          <div className="product-description">
            <span>{category}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>

          <div className="product-price">
            <span>${price}</span>
            <button
              className="cart-btn"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </button>
            <button
              className="cart-btn"
              onClick={() => dispatch(addWishlist(product))}
            >
              Wishlist
            </button>
          </div>
        </div>
      </main>
    </>
  );
};
export default ProductProfile;
