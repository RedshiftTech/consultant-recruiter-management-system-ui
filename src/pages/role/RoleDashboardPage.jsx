import React from "react";
import DashboardCard from "../../components/common/DashboardCard";
import { roleConfigs } from "../../config/roleConfig";

const RoleDashboardPage = ({ roleKey }) => {
  const config = roleConfigs[roleKey];

  return (
    <div className="role-dashboard-page">
      <div className="role-hero-card">
        <span className="role-chip">{config.roleLabel}</span>
        <h2>{config.dashboardTitle}</h2>
        <p>{config.heroDescription}</p>
      </div>

      <div className="role-dashboard-grid">
        {config.cards.map((card) => (
          <DashboardCard
            key={card.title}
            title={card.title}
            value={card.value}
            description={card.description}
          />
        ))}
      </div>

      <div className="role-info-grid">
        <div className="role-info-card">
          <h3>{config.shortTitle} Responsibilities</h3>
          <ul>
            {config.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="role-info-card">
          <h3>{config.shortTitle} Screen Access</h3>
          <div className="role-access-list">
            {config.accessItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleDashboardPage;
