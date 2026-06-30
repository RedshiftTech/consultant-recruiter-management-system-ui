export const roleConfigs = {
  HR_OPERATIONS: {
    basePath: "/hr",
    storageRole: "HR_OPERATIONS",
    panelTitle: "HR / Operations Panel",
    shortTitle: "HR/Ops",
    badge: "CRM",
    topbarTitle: "HR / Operations Dashboard",
    topbarSubtitle: "Prepare consultant profiles, documents, skills, visa details, and readiness for marketing",
    dashboardTitle: "Welcome to HR / Operations Workspace",
    roleLabel: "HR / Operations Role",
    heroDescription:
      "HR/Operations prepares and maintains consultant records before recruiters begin marketing. This role focuses on consultant setup, resume upload, documents, compliance, skills, visa details, availability, and Ready for Marketing status.",
    cards: [
      { title: "Total Consultants", value: "68", description: "Consultant profiles maintained by HR/Ops" },
      { title: "Ready for Marketing", value: "42", description: "Profiles completed and ready for recruiter assignment" },
      { title: "Pending Documents", value: "7", description: "Consultants needing resume or compliance documents" },
      { title: "Bench Consultants", value: "26", description: "Available consultants needing preparation or assignment" },
      { title: "Visa Updates", value: "5", description: "Consultants with visa details requiring review" },
      { title: "Profile Holds", value: "3", description: "Profiles temporarily on hold" }
    ],
    responsibilities: [
      "Add new consultant profiles",
      "Update consultant personal details such as name, email, phone, and location",
      "Upload latest resume and maintain documents",
      "Add skills, technology stack, visa details, and compliance data",
      "Update consultant availability such as Bench, Available, Hold, or Inactive",
      "Mark consultants Ready for Marketing after profile, resume, and skills are complete",
      "Maintain non-marketing HR-related consultant data"
    ],
    accessItems: [
      "Limited Dashboard",
      "Consultant Management",
      "Resume Upload",
      "Documents",
      "Skills/Visa Update",
      "Marketing Assignments - View/Limited",
      "Submissions - View Only",
      "Placements - View/Limited",
      "Reports - Limited"
    ],
    menuItems: [
      { label: "Dashboard", path: "/hr/dashboard" },
      { label: "Consultant Management", path: "/hr/consultants" },
      { label: "Resume Upload", path: "/hr/resume-upload" },
      { label: "Documents", path: "/hr/documents" },
      { label: "Skills / Visa Update", path: "/hr/skills-visa" },
      { label: "Marketing Assignments", path: "/hr/marketing" },
      { label: "Submissions", path: "/hr/submissions" },
      { label: "Placements", path: "/hr/placements" },
      { label: "Reports", path: "/hr/reports" }
    ]
  },
  MANAGER: {
    basePath: "/manager",
    storageRole: "MANAGER",
    panelTitle: "Manager Panel",
    shortTitle: "Manager",
    badge: "CRM",
    topbarTitle: "Manager Dashboard",
    topbarSubtitle: "Monitor recruiter workload, assignments, submissions, placements, approvals, and team reports",
    dashboardTitle: "Welcome to Manager Workspace",
    roleLabel: "Manager Role",
    heroDescription:
      "Manager monitors recruiter work, balances workload, assigns or reassigns consultants, tracks submissions/interviews/placements, approves workflow changes, and reviews team-level reports.",
    cards: [
      { title: "Team Recruiters", value: "12", description: "Recruiters under manager visibility" },
      { title: "Assigned Consultants", value: "53", description: "Consultants currently assigned to team recruiters" },
      { title: "Weekly Submissions", value: "38", description: "Submissions created by the team this week" },
      { title: "Interviews", value: "11", description: "Active interview stages to monitor" },
      { title: "Placements", value: "4", description: "Confirmed placements this month" },
      { title: "Pending Approvals", value: "6", description: "Hold, reopen, or reassignment requests" }
    ],
    responsibilities: [
      "Review recruiter workload and consultant distribution",
      "Assign bench consultants to recruiters",
      "Reassign consultants between recruiters when needed",
      "Monitor submissions, interviews, and placements",
      "Approve hold, reopen, reassignment, or special workflow changes",
      "Resolve conflicts such as duplicate submissions or inactive recruiter assignment issues",
      "Review recruiter performance, consultant pipeline, and placement reports"
    ],
    accessItems: [
      "Dashboard",
      "Recruiter Workload",
      "Consultant List",
      "Assign/Reassign Consultant",
      "Marketing Assignments",
      "Submissions",
      "Placements",
      "Reports",
      "Incentives - View/Approval",
      "Audit Activity - Important Only"
    ],
    menuItems: [
      { label: "Dashboard", path: "/manager/dashboard" },
      { label: "Recruiter Workload", path: "/manager/recruiter-workload" },
      { label: "Consultant List", path: "/manager/consultants" },
      { label: "Assign / Reassign", path: "/manager/assignments" },
      { label: "Marketing Assignments", path: "/manager/marketing" },
      { label: "Submissions", path: "/manager/submissions" },
      { label: "Placements", path: "/manager/placements" },
      { label: "Reports", path: "/manager/reports" },
      { label: "Incentives", path: "/manager/incentives" },
      { label: "Audit Activity", path: "/manager/audit-activity" }
    ]
  },
  RECRUITER: {
    basePath: "/recruiter",
    storageRole: "RECRUITER",
    panelTitle: "Recruiter Panel",
    shortTitle: "Recruiter",
    badge: "CRM",
    topbarTitle: "Recruiter Dashboard",
    topbarSubtitle: "Work on assigned consultants, marketing, submissions, vendor/client details, and placement workflow",
    dashboardTitle: "Welcome to Recruiter Workspace",
    roleLabel: "Recruiter Role",
    heroDescription:
      "Recruiter performs the daily marketing and submission work. Recruiters work only on assigned consultants, create submissions for Ready for Marketing consultants, update vendor/client/job details, and move submissions through interview, offer, and placement stages.",
    cards: [
      { title: "Assigned Consultants", value: "15", description: "Consultants assigned to this recruiter" },
      { title: "Ready for Marketing", value: "12", description: "Assigned consultants ready for active submission workflow" },
      { title: "Active Marketing", value: "9", description: "Open marketing assignments" },
      { title: "My Submissions", value: "28", description: "Submissions created by this recruiter" },
      { title: "Interviews", value: "5", description: "Interviews scheduled or pending feedback" },
      { title: "My Incentives", value: "3", description: "Placement incentives visible to this recruiter" }
    ],
    responsibilities: [
      "View consultants assigned to them",
      "Start marketing assignments for assigned consultants",
      "Contact vendors and clients for job opportunities",
      "Create submissions with vendor, client, job title, rate, and location details",
      "Update submission status such as Submitted, Interview, Offer, Rejected, or Placed",
      "Add comments, communication notes, interview updates, and feedback",
      "Track own activity, own performance, and own incentive view"
    ],
    accessItems: [
      "Own Dashboard",
      "Assigned Consultants",
      "Limited Consultant Details Edit",
      "Marketing Assignments - Assigned Only",
      "Submissions - Own Only",
      "Vendor/Client Details",
      "Placement Status Workflow",
      "Incentives - Own View Only",
      "Reports - Own Performance Only"
    ],
    menuItems: [
      { label: "Dashboard", path: "/recruiter/dashboard" },
      { label: "Assigned Consultants", path: "/recruiter/assigned-consultants" },
      { label: "Marketing Assignments", path: "/recruiter/marketing" },
      { label: "Submissions", path: "/recruiter/submissions" },
      { label: "Vendor / Client Details", path: "/recruiter/vendor-client-details" },
      { label: "Placement Status", path: "/recruiter/placement-status" },
      { label: "Incentives", path: "/recruiter/incentives" },
      { label: "Reports", path: "/recruiter/reports" }
    ]
  },
  ADMIN: {
    basePath: "/admin",
    storageRole: "ADMIN",
    panelTitle: "Admin Panel",
    shortTitle: "Admin",
    badge: "CRM",
    topbarTitle: "Admin Dashboard",
    topbarSubtitle: "Manage users, roles, teams, master data, reports, and audit logs",
    dashboardTitle: "Welcome to Admin Control Center",
    roleLabel: "Admin Role",
    heroDescription:
      "Admin manages the foundation of the CRM system and has full access to users, teams, recruiters, consultants, marketing, submissions, placements, incentives, reports, audit logs, and master data.",
    cards: [
      { title: "Total Users", value: "24", description: "Admins, Managers, Recruiters, HR/Ops" },
      { title: "Active Recruiters", value: "12", description: "Recruiters available for assignments" },
      { title: "Total Teams", value: "5", description: "Recruiting teams configured" },
      { title: "Total Consultants", value: "68", description: "Consultant profiles in CRM" },
      { title: "Marketing Assignments", value: "31", description: "Active marketing assignments" },
      { title: "Submissions", value: "146", description: "Total consultant submissions" },
      { title: "Placements", value: "9", description: "Confirmed placements" },
      { title: "Pending Incentives", value: "4", description: "Incentives awaiting review" }
    ],
    responsibilities: [
      "Create accounts for HR/Operations, Managers, and Recruiters",
      "Assign correct roles and permissions",
      "Create teams and assign recruiters/managers",
      "Add, edit, activate, and deactivate recruiters",
      "Configure skills, visa types, clients, vendors, locations, and statuses",
      "View audit logs and full system reports",
      "Perform system-level corrections when needed"
    ],
    accessItems: [
      "Dashboard",
      "User Management",
      "Role Management",
      "Team Management",
      "Recruiter Management",
      "Consultant Management",
      "Marketing Assignments",
      "Submissions",
      "Placements",
      "Incentives",
      "Reports",
      "Audit Logs",
      "Master Data"
    ],
    menuItems: [
      { label: "Dashboard", path: "/admin/dashboard" },
      { label: "User Management", path: "/admin/users" },
      { label: "Role Management", path: "/admin/roles" },
      { label: "Team Management", path: "/admin/teams" },
      { label: "Recruiter Management", path: "/admin/recruiters" },
      { label: "Consultant Management", path: "/admin/consultants" },
      { label: "Marketing Assignments", path: "/admin/marketing" },
      { label: "Submissions", path: "/admin/submissions" },
      { label: "Placements", path: "/admin/placements" },
      { label: "Incentives", path: "/admin/incentives" },
      { label: "Reports", path: "/admin/reports" },
      { label: "Audit Logs", path: "/admin/audit-logs" },
      { label: "Master Data", path: "/admin/master-data" },
      { label: "Permissions", path: "/admin/permissions" }
    ]
  }
};
