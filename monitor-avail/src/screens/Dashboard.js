import React from "react";
import ShowGraph from "../components/ShowGraph";
import Sidebar from "../components/Sidebar";
import "../styles/login.css";

const Dashboard = () => {
  return (
    <div className="wrapper-main">
      <Sidebar />
      <ShowGraph />
    </div>
  );
};

export default Dashboard;
