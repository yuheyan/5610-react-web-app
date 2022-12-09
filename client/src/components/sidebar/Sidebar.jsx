import "./sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons";
import React, {useCallback} from 'react';
import {useHistory} from 'react-router-dom';

export default function Sidebar() {
  const history = useHistory();

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li onClick={useCallback(() => history.push('/'), [history])} className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Home</span>
          </li>
          <li onClick={useCallback(() => history.push('/search'), [history])} className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Search</span>
          </li>
          <li onClick={useCallback(() => history.push('/admin'), [history])} className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Admin</span>
          </li>

        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
      </div>
    </div>
  );
}
