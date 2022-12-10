import "./edit-profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useContext, useEffect, useRef } from "react";
import axios from "axios";
import { Label } from "@material-ui/icons";
import { updateUser } from "../../apiCalls";
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
  useEffect(() => {
    usernameInput.current.value = user.username;
    emailInput.current.value = user.email;
    passwordInput.current.value = user.password;
    genderInput.current.value = user.gender;
  }, [user]);

  // update the user information on click
  const handleSubmit = (event) => {
    event.preventDefault();
    updateUser(user._id, {
      userId: user._id,
      username: usernameInput.current.value,
      email: emailInput.current.value,
      passwordInput: passwordInput.current.value,
      genderInput: genderInput.current.value,
    });
  };

  return (
    <>
      <Topbar />
      <div className="edit-profile">
        <Sidebar />
        <div className="edit-profileRight">
          <div className="edit-profileRightTop">
            <div className="edit-profileCover">
              <img
                className="edit-profileCoverImg"
                src={PF + "person/star-sign-cover.png"}
                alt="profileCover image not found"
              />
              <img
                className="edit-profileUserImg"
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "person/noAvatar.png"
                }
                alt="profileUser image not found"
              />
            </div>
          </div>
          <div className="edit-profileRightBottom">
            <div className="edit-profile-form">
              <form onSubmit={handleSubmit}>
                <label>
                  Update your username:
                  <input
                    type="text"
                    // link the input field to ref
                    ref={usernameInput}
                  />
                </label>

                <br></br>
                <br></br>

                <label>
                  Update your email:
                  <input type="text" ref={emailInput} />
                </label>

                <br></br>
                <br></br>
                <label>
                  Update your password:
                  <input type="text" ref={passwordInput} />
                </label>
                <br></br>
                <br></br>

                <label for="gender">
                  {" "}
                  Update your gender
                  <select name="gener" id="gener" ref={genderInput}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="transgender">Transgender</option>
                    <option value="hide">Prefer not to respond</option>
                  </select>
                </label>
                <br></br>
                <br></br>
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
