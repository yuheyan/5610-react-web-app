import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
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
      <div className="profile">
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={
                  PF + "person/star-sign-cover.png"
                }
                alt="profileCover image not found"
              />
              <img
                className="profileUserImg"
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "person/noAvatar.png"
                }
                alt="profileUser image not found"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">user name: {user.username}</h4>
              <button onClick={() => history.push(`/edit-profile/${username}`)}>Edit Profile</button>
              <span className="profileInfoDesc">Unknown State: user.desc {user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <h1> original Feed component place</h1>
          </div>
        </div>
      </div>
    </>
  );
  
}


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

//   return (
//     <>
//       <Topbar />
//       <div className="profile">
//         <Sidebar />
//         <div className="profileRight">
//           <div className="profileRightTop">
//             <div className="profileCover">
//               <img
//                 className="profileCoverImg"
//                 src={
//                   user.coverPicture
//                     ? PF + user.coverPicture
//                     : PF + "person/noCover.png"
//                 }
//                 alt=""
//               />
//               <img
//                 className="profileUserImg"
//                 src={
//                   user.profilePicture
//                     ? PF + user.profilePicture
//                     : PF + "person/noAvatar.png"
//                 }
//                 alt=""
//               />
//             </div>
//             <div className="profileInfo">
//               <h4 className="profileInfoName">{user.username}</h4>
//               <span className="profileInfoDesc">{user.desc}</span>
//             </div>
//           </div>
//           <div className="profileRightBottom">
//             <Feed username={username} />
//           </div>
//         </div>
//       </div>
//     </>
//   );
  
// }
