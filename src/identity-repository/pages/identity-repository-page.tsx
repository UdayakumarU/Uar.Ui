import { Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/material";
import IdentityRepositoryTable from "../components/table/identity-repository-table";

const IdentityRepositoryPage = () => {
  return (
    <>
      <Box sx={{ alignItems: "flex-start", py: 2 }}>
        <Typography variant="h5" component="h5">
          Identity repository
        </Typography>
      </Box>
      <Card variant="outlined" sx={{ p: 2 }}>
        <CardContent>
          <Typography variant="subtitle1" gutterBottom>
            Users
          </Typography>
          <IdentityRepositoryTable />
        </CardContent>
      </Card>
    </>
  );
};

export default IdentityRepositoryPage;
