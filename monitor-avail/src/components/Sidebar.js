import React from "react";
import { Link } from "react-router-dom";
import "./side-bar.css";

const Sidebar = () => {

  return (
    <div className="sidebar">
      <div className="sidebar-options">
        {menuElements.map((item) => (
          <Link key={item.name} to={"/"} className="sidebar-link">
            <span className="sidebar-link-wrap">{item.name}</span>
          </Link>
        ))}
      </div>
      <div className="sidebar-profile-button-container">
        <button
          type="button"
          className="sidebar-profile-button"
          onClick={() => {}}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

const menuElements = [
  {
    name: "analytics",
  },
  {
    name: "admins",
  },
  {
    name: "users",
  },
  {
    name: "numbers",
  },
  {
    name: "registration",
  },
  {
    name: "contact",
  },
  {
    name: "demo",
  },
];
