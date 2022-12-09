import "./edit-profile.css";
import Topbar from "../../components/topbar/Topbar";
import { useContext, useEffect, useRef } from "react";
import axios from "axios";
import { Label } from "@material-ui/icons";
import {updateUser} from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";


export default function EditProfile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);

  //create new input field ref
  const usernameInput = useRef();
  const emailInput = useRef();
  const passwordInput = useRef();
  const genderInput = useRef();

  // show the initial value of the user information
  // useEffect(() => {
  //   usernameInput.current.value = user.username;
  //   emailInput.current.value = user.email;
  //   passwordInput.current.value = user.password;
  //   genderInput.current.value = user.gender;
  // }, [user]);


  // update the user information on click
  const handleSubmit = (event) => {
    event.preventDefault();
    updateUser(user._id, {
        userId:user._id,
        username:usernameInput.current.value,
        email:emailInput.current.value,
        passwordInput:passwordInput.current.value,
        genderInput:genderInput.current.value,
      });
  }


  return (
    <>
      <Topbar />
      <div className="main-content">
        {/* Top navbar */}
        <nav
          className="navbar navbar-top navbar-expand-md navbar-dark"
          id="navbar-main"
        >
          <div className="container-fluid">
            {/* Brand */}


            {/* Form */}
            <form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
              <div className="form-group mb-0">
                <div className="input-group input-group-alternative">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-search" />
                    </span>
                  </div>
                  <input className="form-control" placeholder="Search" type="text" />
                </div>
              </div>
            </form>
            {/* User */}
            <ul className="navbar-nav align-items-center d-none d-md-flex">
              <li className="nav-item dropdown">
                <a
                  className="nav-link pr-0"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div className="media align-items-center">
                    <span className="avatar avatar-sm rounded-circle">
                      <img
                        alt="Image placeholder"
                        src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg"
                      />
                    </span>
                    <div className="media-body ml-2 d-none d-lg-block">
                      <span className="mb-0 text-sm  font-weight-bold">
                        Jessica Jones
                      </span>
                    </div>
                  </div>
                </a>
                <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
                  <div className=" dropdown-header noti-title">
                    <h6 className="text-overflow m-0">Welcome!</h6>
                  </div>
                  <a href="../examples/profile.html" className="dropdown-item">
                    <i className="ni ni-single-02" />
                    <span>My profile</span>
                  </a>
                  <a href="../examples/profile.html" className="dropdown-item">
                    <i className="ni ni-settings-gear-65" />
                    <span>Settings</span>
                  </a>
                  <a href="../examples/profile.html" className="dropdown-item">
                    <i className="ni ni-calendar-grid-58" />
                    <span>Activity</span>
                  </a>
                  <a href="../examples/profile.html" className="dropdown-item">
                    <i className="ni ni-support-16" />
                    <span>Support</span>
                  </a>
                  <div className="dropdown-divider" />
                  <a href="#!" className="dropdown-item">
                    <i className="ni ni-user-run" />
                    <span>Logout</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
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
                <a href="#!" className="btn btn-info">
                  Save profile waited to be changed as a button
                </a>
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
                          src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg"
                          className="rounded-circle"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                  <div className="d-flex justify-content-between">
                    <a href="#" className="btn btn-sm btn-info mr-4">
                      Connect
                    </a>
                    <a href="#" className="btn btn-sm btn-default float-right">
                      Message
                    </a>
                  </div>
                </div>
                <div className="card-body pt-0 pt-md-4">
                  <div className="row">
                    <div className="col">
                      <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                        <div>
                          <span className="heading">22</span>
                          <span className="description">Friends</span>
                        </div>
                        <div>
                          <span className="heading">10</span>
                          <span className="description">Photos</span>
                        </div>
                        <div>
                          <span className="heading">89</span>
                          <span className="description">Comments</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3>
                      Jessica Jones<span className="font-weight-light">, 27</span>
                    </h3>
                    <div className="h5 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Bucharest, Romania
                    </div>
                    <div className="h5 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Solution Manager - Creative Tim Officer
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      University of Computer Science
                    </div>
                    <hr className="my-4" />
                    <p>
                      Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick
                      Murphy — writes, performs and records all of his own music.
                    </p>
                    <a href="#">Show more</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 order-xl-1">
              <div className="card bg-secondary shadow">
                <div className="card-header bg-white border-0">
                  <div className="row align-items-center">
                    <div className="col-8">
                      <h3 className="mb-0">My account</h3>
                    </div>
                    <div className="col-4 text-right">
                      <a href="#!" className="btn btn-sm btn-primary">
                        Settings
                      </a>
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
                            <input
                              type="text"
                              id="input-username"
                              className="form-control form-control-alternative"
                              placeholder="Username"
                              defaultValue="lucky.jesse"
                            />
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
                            <input
                              type="email"
                              id="input-email"
                              className="form-control form-control-alternative"
                              placeholder="jesse@example.com"
                            />
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
                              First name
                            </label>
                            <input
                              type="text"
                              id="input-first-name"
                              className="form-control form-control-alternative"
                              placeholder="First name"
                              defaultValue="Lucky"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group focused">
                            <label
                              className="form-control-label"
                              htmlFor="input-last-name"
                            >
                              Last name
                            </label>
                            <input
                              type="text"
                              id="input-last-name"
                              className="form-control form-control-alternative"
                              placeholder="Last name"
                              defaultValue="Jesse"
                            />
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
                            <input
                              id="input-address"
                              className="form-control form-control-alternative"
                              placeholder="Home Address"
                              defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                              type="text"
                            />
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
                            <input
                              type="text"
                              id="input-city"
                              className="form-control form-control-alternative"
                              placeholder="City"
                              defaultValue="New York"
                            />
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
                            <input
                              type="text"
                              id="input-country"
                              className="form-control form-control-alternative"
                              placeholder="Country"
                              defaultValue="United States"
                            />
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
                            <input
                              type="number"
                              id="input-postal-code"
                              className="form-control form-control-alternative"
                              placeholder="Postal code"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="my-4" />
                    {/* Description */}
                    <h6 className="heading-small text-muted mb-4">About me</h6>
                    <div className="pl-lg-4">
                      <div className="form-group focused">
                        <label>About Me</label>
                        <textarea
                          rows={4}
                          className="form-control form-control-alternative"
                          placeholder="A few words about you ..."
                          defaultValue={
                            "A beautiful Dashboard for Bootstrap 4. It is Free and Open Source."
                          }
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
  
}















// before styling, old code

// return (
//   <>
//     <Topbar />
//     <div className="edit-profile">
//       <h1>Replace Side bar with Ads Location</h1>
//       <div className="edit-profileRight">
//         <div className="edit-profileRightTop">
//           <div className="edit-profileCover">
//             <img
//               className="edit-profileCoverImg"
//               src={
//                 PF + "person/star-sign-cover.png"
//               }
//               alt="profileCover image not found"
//             />
//             <img
//               className="edit-profileUserImg"
//               src={
//                 user.profilePicture
//                   ? PF + user.profilePicture
//                   : PF + "person/noAvatar.png"
//               }
//               alt="profileUser image not found"
//             />
//           </div>

//         </div>
//         <div className="edit-profileRightBottom">
//           <div className="edit-profile-form">

//             <form onSubmit={handleSubmit}>
//               <label>Update your username: 
//                 <input 
//                   type="text" 
//                   // link the input field to ref
//                   ref={usernameInput}
//                 />
//               </label>

//               <br></br>
//               <br></br>

//               <label>Update your email: 
//                 <input 
//                   type="text" 
//                   ref={emailInput}
//                 />
//               </label>

//               <br></br>
//               <br></br>
//               <label>Update your password: 
//                 <input 
//                   type="text" 
//                   ref={passwordInput}
//                 />
//               </label>
//               <br></br>
//               <br></br>

//               <label for="gender"> Update your gender: 
//                 <select name="gener" id="gener" ref={genderInput}>
//                   <option value="male">Male</option>
//                   <option value="female">Female</option>
//                   <option value="transgender">Transgender</option>
//                   <option value="hide">Prefer not to respond</option>
//                 </select>
//               </label>
//               <br></br>
//               <br></br>
//               <input type="submit" value="Submit" />
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   </>
// );