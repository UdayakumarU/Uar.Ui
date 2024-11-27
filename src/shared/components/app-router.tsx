import ManageCampaignsPage from "@uar/campaigns/pages/manage-campaigns-page";
import { CONSTANTS } from "@uar/constant";
import Dashboard from "@uar/dashboard/pages/dashboard-page";
import HomePage from "@uar/home/pages/home-page";
import IdentityRepositoryPage from "@uar/identity-repository/pages/identity-repository-page";
import ManageJobsPage from "@uar/jobs/pages/manage-jobs-page";
import { Routes, Route, Navigate } from "react-router";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={`/${CONSTANTS.HOME.ROUTE}`} />} />
      <Route path={`/${CONSTANTS.HOME.ROUTE}`} element={<HomePage />} />
      <Route
        path={`/${CONSTANTS.CAMPAIGN.ROUTE}`}
        element={<ManageCampaignsPage />}
      />
      <Route
        path={`/${CONSTANTS.IDENTITY_RESPOSITORY.ROUTE}`}
        element={<IdentityRepositoryPage />}
      />
      <Route path={`/${CONSTANTS.JOBS.ROUTE}`} element={<ManageJobsPage />} />
      <Route path={`/${CONSTANTS.DASHBOARD.ROUTE}`} element={<Dashboard />} />
    </Routes>
  );
};

export default AppRouter;
