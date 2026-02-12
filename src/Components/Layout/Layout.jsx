// src/components/Layout.js
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import TopNavbar from "../TopNavbar/TopNavbar";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="layout">
      <TopNavbar />
      <div className="layout-body">
        <aside className="sidebar">
          <Navbar />
        </aside>
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
