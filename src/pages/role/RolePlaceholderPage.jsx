import React from "react";
import { roleConfigs } from "../../config/roleConfig";

const RolePlaceholderPage = ({ roleKey, title, description, items = [] }) => {
  const config = roleConfigs[roleKey];

  return (
    <div className="role-placeholder-page">
      <div className="role-placeholder-card">
        <span className="role-chip">{config.shortTitle} Module</span>
        <h2>{title}</h2>
        <p>{description}</p>

        {items.length > 0 && (
          <div className="role-module-list">
            {items.map((item) => (
              <div className="role-module-item" key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.description}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RolePlaceholderPage;
