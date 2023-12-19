// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart, addWishlist } from "../features/cartSlice";

// const ProductProfile = () => {
//   const items = useSelector((state) => state.allCart.items);
//   const dispatch = useDispatch();

//   return (
//     <>
//       <div className="container5 mt-5">
//         <div className="row d-flex justify-content-center">
//           <div className="col-md-7">
//             <div className="card p-3 py-4">
//               <div className="text-center">
//                 <img src={items.img} alt="pic" />
//               </div>
//               <div className="text-center mt-3">
//                 <span className="bg-secondary p-1 px-4 rounded text-white">
//                   {items.shippingDetails}
//                 </span>
//                 <h1 className="mt-2 mb-0">{items.title}</h1>
//                 <span>${items.price}</span>

//                 <div className="px-4 mt-1">
//                   <p className="fonts">{items.description}</p>
//                 </div>

//                 <div className="buttons">
//                   <button
//                     className="btn btn-primary px-4"
//                     onClick={() => dispatch(addToCart(items))}
//                   >
//                     Add to Cart
//                   </button>
//                   <button
//                     className="btn btn-outline-primary px-4 ms-3"
//                     onClick={() => dispatch(addWishlist(items))}
//                   >
//                     Wishlist
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* ))} */}
//         </div>
//       </div>
//     </>
//   );
// };
// export default ProductProfile;
