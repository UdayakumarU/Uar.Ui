import { Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/material";
import ManageJobsTable from "../table/manage-jobs-table";

const ManageJobsPage = () => {
  return (
    <>
      <Box sx={{ alignItems: "flex-start", py: 2 }}>
        <Typography variant="h5" component="h5">
          Manage jobs
        </Typography>
      </Box>
      <Card variant="outlined" sx={{ p: 2 }}>
        <CardContent>
          <Typography variant="subtitle1" gutterBottom>
            Job list
          </Typography>
          <ManageJobsTable />
        </CardContent>
      </Card>
    </>
  );
};

export default ManageJobsPage;
