import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";
import { ConstellationArray } from "../../context/Constellation";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./search.css";

export default function Search() {
  const history = useHistory();
  function handleOnSelect(item) {
    history.push("/search/" + item.name);
  }
  const items = [];
  ConstellationArray.forEach((e) => {
    items.push({ name: e });
  });
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <div className="topbarCenter">
          <div className="container" style={{ padding: "15px", width: "80%" }}>
            <ReactSearchAutocomplete
              items={items}
              onSelect={handleOnSelect}
              styling={{ zIndex: 1 }}
              autoFocus
            />
          </div>
        </div>
      </div>
    </>
  );
}
