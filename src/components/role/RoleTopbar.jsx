import React from "react";
import { useNavigate } from "react-router-dom";

const RoleTopbar = ({ config }) => {
  const navigate = useNavigate();
  const fullName = localStorage.getItem("fullName");
  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");
  const email = localStorage.getItem("email");

  const displayName =
    fullName || `${firstName || ""} ${lastName || ""}`.trim() || config.shortTitle;

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <header className="role-topbar">
      <div>
        <h1>{config.topbarTitle}</h1>
        <p>{config.topbarSubtitle}</p>
      </div>

      <div className="role-user-area">
        <div className="role-user-details">
          <strong>{displayName}</strong>
          <span>{email || "user@crm.com"}</span>
        </div>
        <button type="button" onClick={handleLogout}>Logout</button>
      </div>
    </header>
  );
};

export default RoleTopbar;
