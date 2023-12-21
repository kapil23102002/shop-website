import React from "react";
import "./wishlist.css";
import { useSelector, useDispatch } from "react-redux";
import { removeItemWish, addToCart } from "../features/cartSlice";

const WishlistPage = () => {
  const wishlist = useSelector((state) => state.allCart.wishlist);

  const dispatch = useDispatch();
  return (
    <>
      <div className="cart-wrap">
        <div className="container">
          <div className="row">
            {/* <div className="col-md-12"> */}
            <h1
              className="main-heading "
              style={{ textAlign: "center", color: "red" }}
            >
              My wishlist - {wishlist.length} items
            </h1>
            <div className="table-wishlist">
              <table border="0" width="100%">
                <thead>
                  <tr>
                    <th width="45%">Product Name</th>
                    <th width="15%">Unit Price</th>
                    <th width="15%"></th>
                    <th width="10%"></th>
                  </tr>
                </thead>
                <tbody>
                  {wishlist.map((data) => (
                    <tr key={data.id}>
                      <td width="45%">
                        <div className="display-flex align-center">
                          <div className="img-product">
                            <img src={data.img} alt="wish Product" />
                          </div>
                          <div className="name-product">{data.title}</div>
                        </div>
                      </td>
                      <td width="15%" className="price">
                        {data.price}
                      </td>

                      <td width="15%">
                        <button
                          className="round-black-btn small-btn"
                          onClick={() => dispatch(addToCart(data))}
                        >
                          Add to Cart
                        </button>
                      </td>
                      <td width="10%" className="text-center">
                        <button
                          onClick={() => dispatch(removeItemWish(data.id))}
                          className="trash-icon far fa-trash-alt"
                        ></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default WishlistPage;
