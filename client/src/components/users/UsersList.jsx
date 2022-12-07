import "./usersList.css";
import { fetchAllUsers } from "../../apiCalls"

export default function UsersList() {
    let data = {};
    fetchAllUsers().then((res) => data = res)
    return (
        <div className="users">
            <div className="usersWrapper">
                {data}
            </div>
        </div>
    );
}