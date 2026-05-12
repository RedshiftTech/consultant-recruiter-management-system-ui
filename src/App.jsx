import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import RoleLayout from "./components/role/RoleLayout";
import RoleDashboardPage from "./pages/role/RoleDashboardPage";
import RolePlaceholderPage from "./pages/role/RolePlaceholderPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import "./styles/index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />

        <Route path="/admin" element={<RoleLayout roleKey="ADMIN" />}>
        <Route index element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="dashboard" element={<RoleDashboardPage roleKey="ADMIN" />} />
          <Route
            path="users"
            element={
              <RolePlaceholderPage
                roleKey="ADMIN"
                title="User Management"
                description="Create internal accounts for Admin, Manager, Recruiter, and HR/Operations users."
              />
            }
          />
          <Route
            path="roles"
            element={
              <RolePlaceholderPage
                roleKey="ADMIN"
                title="Role Management"
                description="Assign and maintain system roles such as Admin, Manager, Recruiter, and HR/Operations."
              />
            }
          />
          <Route
            path="teams"
            element={
              <RolePlaceholderPage
                roleKey="ADMIN"
                title="Team Management"
                description="Create recruiting teams and assign recruiters or managers to those teams."
              />
            }
          />
          <Route
            path="recruiters"
            element={
              <RolePlaceholderPage
                roleKey="ADMIN"
                title="Recruiter Management"
                description="Add, edit, activate, and deactivate recruiter records."
              />
            }
          />
          <Route
            path="consultants"
            element={
              <RolePlaceholderPage
                roleKey="ADMIN"
                title="Consultant Management"
                description="View and manage consultant profiles, readiness, visa details, and skills."
              />
            }
          />
          <Route
            path="marketing"
            element={
              <RolePlaceholderPage
                roleKey="ADMIN"
                title="Marketing Assignments"
                description="Monitor consultant marketing assignments across all recruiters and teams."
              />
            }
          />
          <Route
            path="submissions"
            element={
              <RolePlaceholderPage
                roleKey="ADMIN"
                title="Submissions"
                description="View consultant submissions, duplicate warnings, and submission status history."
              />
            }
          />
          <Route
            path="placements"
            element={
              <RolePlaceholderPage
                roleKey="ADMIN"
                title="Placements"
                description="Track confirmed placements, contract dates, rates, and linked incentives."
              />
            }
          />
          <Route
            path="incentives"
            element={
              <RolePlaceholderPage
                roleKey="ADMIN"
                title="Incentives"
                description="Review system-generated recruiter incentives and approved adjustments."
              />
            }
          />
          <Route
            path="reports"
            element={
              <RolePlaceholderPage
                roleKey="ADMIN"
                title="Reports"
                description="Access recruiter, consultant, vendor, placement, and incentive reports."
              />
            }
          />
          <Route
            path="audit-logs"
            element={
              <RolePlaceholderPage
                roleKey="ADMIN"
                title="Audit Logs"
                description="Check who changed what, when, and why across the CRM system."
              />
            }
          />
          <Route
            path="master-data"
            element={
              <RolePlaceholderPage
                roleKey="ADMIN"
                title="Master Data"
                description="Configure skills, visa types, clients, vendors, locations, statuses, and contract types."
              />
            }
          />
          <Route
            path="permissions"
            element={
              <RolePlaceholderPage
                roleKey="ADMIN"
                title="Permissions"
                description="Decide which roles can access specific screens and actions."
              />
            }
          />
        </Route>

        <Route path="/hr" element={<RoleLayout roleKey="HR_OPERATIONS" />}>
          <Route index element={<Navigate to="/hr/dashboard" replace />} />
          <Route path="dashboard" element={<RoleDashboardPage roleKey="HR_OPERATIONS" />} />
          <Route
            path="consultants"
            element={
              <RolePlaceholderPage
                roleKey="HR_OPERATIONS"
                title="Consultant Management"
                description="Create and maintain consultant personal, contact, technology, visa, availability, and Ready for Marketing details."
                items={[
                  { title: "Main action", description: "Add consultant profile and update non-marketing consultant information." },
                  { title: "Important rule", description: "HR/Ops prepares consultants but usually does not submit them to vendors or clients." }
                ]}
              />
            }
          />
          <Route
            path="resume-upload"
            element={
              <RolePlaceholderPage
                roleKey="HR_OPERATIONS"
                title="Resume Upload"
                description="Upload and maintain the latest resume for each consultant before marketing starts."
              />
            }
          />
          <Route
            path="documents"
            element={
              <RolePlaceholderPage
                roleKey="HR_OPERATIONS"
                title="Documents"
                description="Maintain resume, ID documents, agreements, compliance files, and onboarding documents."
              />
            }
          />
          <Route
            path="skills-visa"
            element={
              <RolePlaceholderPage
                roleKey="HR_OPERATIONS"
                title="Skills / Visa Update"
                description="Update consultant skills, technology stack, visa status, experience, and profile completeness."
              />
            }
          />
          <Route
            path="marketing"
            element={
              <RolePlaceholderPage
                roleKey="HR_OPERATIONS"
                title="Marketing Assignments"
                description="View or limitedly review marketing assignments after consultants are prepared and marked ready."
              />
            }
          />
          <Route
            path="submissions"
            element={
              <RolePlaceholderPage
                roleKey="HR_OPERATIONS"
                title="Submissions"
                description="View submission records only. Recruiters are responsible for creating vendor/client submissions."
              />
            }
          />
          <Route
            path="placements"
            element={
              <RolePlaceholderPage
                roleKey="HR_OPERATIONS"
                title="Placements"
                description="View or limitedly review consultant placement details related to HR/Operations."
              />
            }
          />
          <Route
            path="reports"
            element={
              <RolePlaceholderPage
                roleKey="HR_OPERATIONS"
                title="Reports"
                description="View limited consultant profile, readiness, document, and compliance reports."
              />
            }
          />
        </Route>

        <Route path="/manager" element={<RoleLayout roleKey="MANAGER" />}>
          <Route index element={<Navigate to="/manager/dashboard" replace />} />
          <Route path="dashboard" element={<RoleDashboardPage roleKey="MANAGER" />} />
          <Route
            path="recruiter-workload"
            element={
              <RolePlaceholderPage
                roleKey="MANAGER"
                title="Recruiter Workload"
                description="Review how many consultants, submissions, interviews, and placements each recruiter has."
                items={[
                  { title: "Manager decision", description: "Use this screen to balance workload across recruiters." },
                  { title: "Example", description: "Move consultants from an overloaded recruiter to another available recruiter." }
                ]}
              />
            }
          />
          <Route
            path="consultants"
            element={
              <RolePlaceholderPage
                roleKey="MANAGER"
                title="Consultant List"
                description="View consultants across the manager's team and monitor readiness, ownership, and pipeline status."
              />
            }
          />
          <Route
            path="assignments"
            element={
              <RolePlaceholderPage
                roleKey="MANAGER"
                title="Assign / Reassign Consultant"
                description="Assign bench consultants to recruiters or reassign consultants from one recruiter to another."
              />
            }
          />
          <Route
            path="marketing"
            element={
              <RolePlaceholderPage
                roleKey="MANAGER"
                title="Marketing Assignments"
                description="Monitor marketing assignments across recruiters and approve hold, reopen, or special workflow changes."
              />
            }
          />
          <Route
            path="submissions"
            element={
              <RolePlaceholderPage
                roleKey="MANAGER"
                title="Submissions"
                description="Monitor team submissions, submission counts, interviews, duplicate conflicts, and status progress."
              />
            }
          />
          <Route
            path="placements"
            element={
              <RolePlaceholderPage
                roleKey="MANAGER"
                title="Placements"
                description="Review which consultants are placed and track contract, rate, and recruiter ownership details."
              />
            }
          />
          <Route
            path="reports"
            element={
              <RolePlaceholderPage
                roleKey="MANAGER"
                title="Reports"
                description="Review recruiter performance, consultant pipeline, placement, and team activity reports."
              />
            }
          />
          <Route
            path="incentives"
            element={
              <RolePlaceholderPage
                roleKey="MANAGER"
                title="Incentives"
                description="View or approve incentives based on configured manager workflow permissions."
              />
            }
          />
          <Route
            path="audit-activity"
            element={
              <RolePlaceholderPage
                roleKey="MANAGER"
                title="Audit Activity"
                description="View important team activity such as assignment, reassignment, hold, reopen, and status changes."
              />
            }
          />
        </Route>

        <Route path="/recruiter" element={<RoleLayout roleKey="RECRUITER" />}>
          <Route index element={<Navigate to="/recruiter/dashboard" replace />} />
          <Route path="dashboard" element={<RoleDashboardPage roleKey="RECRUITER" />} />
          <Route
            path="assigned-consultants"
            element={
              <RolePlaceholderPage
                roleKey="RECRUITER"
                title="Assigned Consultants"
                description="View consultants assigned to this recruiter and check status, readiness, technology, visa, and contact details."
                items={[
                  { title: "Access rule", description: "Recruiter works only on consultants assigned to them." },
                  { title: "Readiness rule", description: "Recruiter should not submit consultants who are not Ready for Marketing." }
                ]}
              />
            }
          />
          <Route
            path="marketing"
            element={
              <RolePlaceholderPage
                roleKey="RECRUITER"
                title="Marketing Assignments"
                description="Start and maintain marketing assignments for assigned consultants who are ready for marketing."
              />
            }
          />
          <Route
            path="submissions"
            element={
              <RolePlaceholderPage
                roleKey="RECRUITER"
                title="Submissions"
                description="Create submissions and update statuses from Submitted to Interview, Offer, Rejected, or Placed."
              />
            }
          />
          <Route
            path="vendor-client-details"
            element={
              <RolePlaceholderPage
                roleKey="RECRUITER"
                title="Vendor / Client Details"
                description="Capture vendor name, client name, job title, bill rate, location, contact details, and communication notes."
              />
            }
          />
          <Route
            path="placement-status"
            element={
              <RolePlaceholderPage
                roleKey="RECRUITER"
                title="Placement Status"
                description="Update placement-related workflow status when a consultant moves from offer to placed."
              />
            }
          />
          <Route
            path="incentives"
            element={
              <RolePlaceholderPage
                roleKey="RECRUITER"
                title="Incentives"
                description="View own recruiter incentives generated from confirmed placements."
              />
            }
          />
          <Route
            path="reports"
            element={
              <RolePlaceholderPage
                roleKey="RECRUITER"
                title="Reports"
                description="View own performance reports such as assigned consultants, marketing activity, submissions, and placements."
              />
            }
          />
        </Route>

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
