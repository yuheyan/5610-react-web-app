import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
// import Sidebar from "../../components/sidebar/Sidebar";
// import Feed from "../../components/feed/Feed";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const username = useParams().username;


  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [username]);

  const history = useHistory();

  return (
    <>
      <Topbar />
      <div className="main-content">
        {/* Header */}
        <div
          className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
          style={{
            minHeight: 600,
            backgroundImage:
              "url(https://cdn.mos.cms.futurecdn.net/TFWk6Zp8rvbYangVbtQ9ek.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center top"
          }}
        >
          {/* Mask */}
          <span className="mask bg-gradient-default opacity-8" />
          {/* Header container */}
          <div className="container-fluid d-flex align-items-center">
            <div className="row">
              <div className="col-lg-7 col-md-10">
                <button className="btn btn-info" onClick={() => history.push(`/edit-profile/${username}`)}>Edit Profile</button>
              </div>
            </div>
          </div>
        </div>
        {/* Page content */}
        <div className="container-fluid mt--7">
          <div className="row">
            <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
              <div className="card card-profile shadow">
                <div className="row justify-content-center">
                  <div className="col-lg-3 order-lg-2">
                    <div className="card-profile-image">
                      <a href="#">
                        <img
                          src={user.profilePicture
                            ? PF + user.profilePicture
                            : PF + "person/noAvatar.png"}
                          className="rounded-circle"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                  <div className="d-flex justify-content-between">
                    <a href="#" className="btn btn-sm btn-info mr-4">
                      follow & unfollow
                    </a>
                  </div>
                </div>
                <div className="card-body pt-0 pt-md-4">
                  <div className="row">
                    <div className="col">
                      <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                        <div>
                          <span className="heading">22</span>
                          <span className="description">Followers</span>
                        </div>
                        <div>
                          <span className="heading">10</span>
                          <span className="description">Following</span>
                        </div>
                        <div>
                          <span className="heading">100</span>
                          <span className="description">Reviews</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3>
                      preferred name or username<span className="font-weight-light">, Age</span>
                    </h3>
                    <div className="h5 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      City, State/Country
                    </div>

                    <hr className="my-4" />
                    <p>
                      About me information and wait to be updated
                    </p>

                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-8 order-xl-1">
                <form>
                  <div className="card bg-secondary shadow">
                    <div className="card-header bg-white border-0">
                      <div className="row align-items-center">
                        <div className="col-8">
                          <h3 className="mb-0">My account</h3>
                        </div>
                        
                      </div>
                    </div>
                    <div className="card-body">
                      <form>
                        <h6 className="heading-small text-muted mb-4">
                          User information
                        </h6>
                        <div className="pl-lg-4">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="form-group focused">
                                <label
                                  className="form-control-label"
                                  htmlFor="input-username"
                                >
                                  Username
                                </label>
                                <p
                                  id="input-username"
                                  className="form-control form-control-alternative">
                                  {user.username}
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label
                                  className="form-control-label"
                                  htmlFor="input-email"
                                >
                                  Email address
                                </label>
                                <p
                                  id="input-email"
                                  className="form-control form-control-alternative">
                                    {user.email}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="form-group focused">
                                <label
                                  className="form-control-label"
                                  htmlFor="input-first-name"
                                >
                                  Full name
                                </label>
                                <p
                                  id="input-first-name"
                                  className="form-control form-control-alternative">
                                    waiting to get user's full name
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group focused">
                                <label
                                  className="form-control-label"
                                  htmlFor="input-last-name"
                                >
                                  Age
                                </label>
                                <p
                                  id="input-first-name"
                                  className="form-control form-control-alternative">
                                    waiting to get user's age
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr className="my-4" />
                        {/* Address */}
                        <h6 className="heading-small text-muted mb-4">
                          Contact information
                        </h6>
                        <div className="pl-lg-4">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group focused">
                                <label
                                  className="form-control-label"
                                  htmlFor="input-address"
                                >
                                  Address
                                </label>
                                <p
                                  id="input-first-name"
                                  className="form-control form-control-alternative">
                                    waiting to get user's address
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-4">
                              <div className="form-group focused">
                                <label
                                  className="form-control-label"
                                  htmlFor="input-city"
                                >
                                  City
                                </label>
                                <p
                                  id="input-first-name"
                                  className="form-control form-control-alternative">
                                    waiting to get user's city
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="form-group focused">
                                <label
                                  className="form-control-label"
                                  htmlFor="input-country"
                                >
                                  Country
                                </label>
                                <p
                                  id="input-first-name"
                                  className="form-control form-control-alternative">
                                    waiting to get user's country
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="form-group">
                                <label
                                  className="form-control-label"
                                  htmlFor="input-country"
                                >
                                  Postal code
                                </label>
                                <p
                                  id="input-first-name"
                                  className="form-control form-control-alternative">
                                    waiting to get user's postal code
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                      </form>
                    </div>
                  </div>
                </form>
            </div>

          </div>
        </div>
      </div>
    </>
  );

}



// original code

// export default function Profile() {
//   const PF = process.env.REACT_APP_PUBLIC_FOLDER;
//   const [user, setUser] = useState({});
//   const username = useParams().username;

//   useEffect(() => {
//     const fetchUser = async () => {
//       const res = await axios.get(`/users?username=${username}`);
//       setUser(res.data);
//     };
//     fetchUser();
//   }, [username]);

//   const history = useHistory();

//   return (
//     <>
//       <Topbar />
//       <div className="profile">
//       <h1>Replace Side bar with Ads Location</h1>
//         <div className="profileRight">
//           <div className="profileRightTop">
//             <div className="profileCover">
//               <img
//                 className="profileCoverImg"
//                 src={
//                   PF + "person/star-sign-cover.png"
//                 }
//                 alt="profileCover image not found"
//               />
//               <img
//                 className="profileUserImg"
//                 src={
//                   user.profilePicture
//                     ? PF + user.profilePicture
//                     : PF + "person/noAvatar.png"
//                 }
//                 alt="profileUser image not found"
//               />
//             </div>
//             <div className="profileInfo">
//               <h4 className="profileName">user name: {user.username}</h4>
//               <button onClick={() => history.push(`/edit-profile/${username}`)}>Edit Profile</button>
//               <br></br>
//               <br></br>
//               <h4>General Information</h4>
//               <br></br>
//               <br></br>
//               <ul className="generalInfo"  style ={{listStyle:'none'}}>
//                 <li>Email: {user.email}</li>
//                 <li>Gender: </li>
//                 <li>More information to be displayed</li>
//               </ul>
//             </div>
//           </div>
          
//         </div>
//       </div>
//     </>
//   );
// }