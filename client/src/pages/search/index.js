import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Constellation from "../../components/constellation";
import "./search.css";

export default function Search() {
  const [constellation, setConstellation] = useState("");

  function handleSearch(e) {
    e.preventDefault();
    setConstellation("");
    setConstellation(document.getElementById("search").value);
  }
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <div className="topbarCenter">
          <div className="searchbar">
            <div class="input-group rounded" style={{ padding: "15px" }}>
              <input
                type="search"
                id="search"
                class="form-control rounded"
                placeholder="Please enter a Constellation"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <span
                class="input-group-text border-0"
                id="search-addon"
                onClick={handleSearch}
              >
                <FontAwesomeIcon icon={faSearch} />
              </span>
            </div>
          </div>
          <div id="constellation">
            <Constellation constellation={constellation} />
          </div>
        </div>
      </div>
    </>
  );
}
