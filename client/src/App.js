import Post from "./pages/post";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Register from "./pages/register";
import Search from "./pages/search";
import EditProfile from "./pages/edit-profile";
import Home from "./pages/home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Users from "./pages/users";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Register />}
        </Route>

        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/post">
          <Post />
        </Route>
        <Route path="/profile/:username">
          <Profile />
        </Route>
        <Route path="/edit-profile/:username">
          <EditProfile />
        </Route>
        <Route path="/admin">
          <Users />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
