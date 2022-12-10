import "./usersList.css";
import { fetchAllUsers } from "../../apiCalls";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { DeleteForever } from "@material-ui/icons";
import axios from "axios";

export default function UsersList() {
  const user = useContext(AuthContext);
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetchAllUsers();
      setUserData(res);
    };
    fetchUsers();
  }, [user]);

  const deleteHandler = (id) => {
    try {
      axios.delete("/users/" + id);
      window.location.reload();
    } catch (err) {}
  };

  return (
    <div className="users">
      <div className="usersWrapper">
        <table className="table">
          <tr>
            <th className="th td">username</th>
            <th className="th td">email</th>
            <th className="th td">delete</th>
          </tr>
          {userData.map((row) => (
            <tr>
              <td className="td">{row.username}</td>
              <td className="td">{row.email}</td>
              <td className="td">
                <DeleteForever
                  fontSize="large"
                  onClick={() => deleteHandler(row._id)}
                />
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
