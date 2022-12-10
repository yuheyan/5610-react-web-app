import "./sidebar.css";
import { RssFeed, Chat, SupervisorAccount, Add } from "@material-ui/icons";
import React, { useCallback } from "react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
import { Hidden } from "@material-ui/core";

export default function Sidebar() {
  const history = useHistory();
  const { user } = useContext(AuthContext);

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li
            onClick={useCallback(() => history.push("/"), [history])}
            className="sidebarListItem"
          >
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Home</span>
          </li>
          <li
            onClick={useCallback(() => history.push("/search"), [history])}
            className="sidebarListItem"
          >
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Search</span>
          </li>
          <li
            onClick={useCallback(() => history.push("/post"), [history])}
            className="sidebarListItem"
          >
            <Add className="sidebarIcon" />
            <span className="sidebarListItemText">Post</span>
          </li>
          <li
            onClick={useCallback(() => history.push("/admin"), [history])}
            className="sidebarListItem"
            hidden={user == null || !user.isAdmin}
          >
            <SupervisorAccount className="sidebarIcon" />
            <span className="sidebarListItemText">Admin</span>
          </li>
        </ul>
        <hr className="sidebarHr" />
        {user == null || user.isFree ? <label>ad fore free user</label> : ""}
      </div>
    </div>
  );
}
