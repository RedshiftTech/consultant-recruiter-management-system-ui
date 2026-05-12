import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import RoleSidebar from "./RoleSidebar";
import RoleTopbar from "./RoleTopbar";
import { roleConfigs } from "../../config/roleConfig";

const RoleLayout = ({ roleKey }) => {
  const config = roleConfigs[roleKey];
  const role = localStorage.getItem("role");

  if (!config) {
    return <Navigate to="/login" replace />;
  }

  if (role && role !== config.storageRole) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="role-layout">
      <RoleSidebar config={config} />
      <main className="role-main">
        <RoleTopbar config={config} />
        <section className="role-content">
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default RoleLayout;
