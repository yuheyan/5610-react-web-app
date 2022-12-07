import axios from "axios";
import { useRef } from "react";
import "./register.css";
import { useHistory } from "react-router";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();
  const isFree = useRef();
  const isVip = useRef();
  const isAdmin = useRef();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
        isFree: isFree.current.checked,
        isVip: isVip.current.checked,
        isAdmin: isAdmin.current.checked,


      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              required
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Password"
              required
              ref={password}
              className="loginInput"
              type="password"
              minLength="6"
            />
            <input
              placeholder="Password Again"
              required
              ref={passwordAgain}
              className="loginInput"
              type="password"
            />
            <div>
              <input type="radio" id="free_user" name="user_role" value="free" ref={isFree} defaultChecked/>
              <label htmlFor="free_user">Free User</label><br/>
              <input type="radio" id="vip_user" name="user_role" value="vip" ref={isVip}/>
              <label htmlFor="vip_user">VIP User</label><br/>
              <input type="radio" id="admin" name="user_role" value="admin" ref={isAdmin}/>
              <label htmlFor="admin">Administer</label><br/>
            </div>
            <br/>
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            {/*<button className="loginRegisterButton">Log into Account</button>*/}
          </form>
        </div>
      </div>
    </div>
  );
}
