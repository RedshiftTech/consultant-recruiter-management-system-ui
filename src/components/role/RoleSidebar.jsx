import React from "react";
import { NavLink } from "react-router-dom";

const RoleSidebar = ({ config }) => {
  return (
    <aside className="role-sidebar">
      <div className="role-brand">
        <div className="role-brand-badge">{config.badge}</div>
        <div>
          <h2>{config.panelTitle}</h2>
          <p>{config.shortTitle} Workspace</p>
        </div>
      </div>

      <nav className="role-menu">
        {config.menuItems.map((item) => (
          <NavLink key={item.path} to={item.path}>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default RoleSidebar;
