import React from "react";

const DashboardCard = ({ title, value, description }) => {
  return (
    <div className="admin-dashboard-card">
      <p>{title}</p>
      <h3>{value}</h3>
      <span>{description}</span>
    </div>
  );
};

export default DashboardCard;
