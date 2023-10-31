import React from "react";
import { useSelector } from "react-redux";
import "./UserProfile.css";

function ProfilePage() {
  const user = useSelector((state) => state.allCart.user[0]);
  //   const favProduct = useSelector((state) => state.items);
  //   const wishlist = useSelector((state) => state.allCart.wishlist);

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <>
      <div className="page-content page-container" id="page-content">
        <div className="padding">
          <div className="row container d-flex justify-content-center">
            <div className="col-xl-6 col-md-12">
              <div className="card user-card-full">
                <div className="row m-l-0 m-r-0">
                  <div className="col-sm-4 bg-c-lite-green user-profile">
                    <div className="card-block text-center text-white">
                      <div className="m-b-25">
                        <img
                          src="https://img.icons8.com/bubbles/100/000000/user.png"
                          className="img-radius"
                          alt="User-Profile-Image"
                        />
                      </div>
                      <h6 className="f-w-600">{user.name}</h6>
                      <p>Web Designer</p>
                      <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="card-block">
                      <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                        Information
                      </h6>
                      <div className="row">
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Email</p>
                          <h6 className="text-muted f-w-400">
                            {user.username}
                          </h6>
                          {/* {console.log(user[0])} */}
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Phone</p>
                          <h6 className="text-muted f-w-400">{user.contact}</h6>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Address</p>
                          <h6 className="text-muted f-w-400">{user.address}</h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Date of birth</p>
                          <h6 className="text-muted f-w-400">{user.birth}</h6>

                          {/* {wishlist.map((data) => (
                            <div key={data.id}>
                              <h6 className="text-muted f-w-400">
                                {data.title}
                              </h6>
                            </div>
                          ))} */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;

// <div >
//   <hr/>

//   <h2>User Details</h2>
//   <hr/>
//   <div >
//     <p>
//       <p>
//         <h1>Name : {user.name}</h1>
//       </p>
//       <p>
//         <h1>Username : {user.username}</h1>
//       </p>
//     </p>
//     <p>
//       <p>
//         <h1>Address : {user.address}</h1>
//       </p>
//       <p>
//         <h1>Phone : {user.contact}</h1>
//       </p>
//     </p>
//   </div>
//   <div classNameName="back-button">
//     <Link to="/product">
//       <button>Back to Products</button>
//     </Link>
//   </div>
// </div>
