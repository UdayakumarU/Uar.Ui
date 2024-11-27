import { Typography } from "@mui/material";
import { Box, Card, CardContent } from "@mui/material";
import { ManageCampaignsTable } from "@uar/campaigns/components";

const ManageCampaignsPage = () => {
  return (
    <>
      <Box sx={{ alignItems: "flex-start", py: 2 }}>
        <Typography variant="h5" component="h5">
          Manage campaigns
        </Typography>
      </Box>
      <Card variant="outlined" sx={{ p: 2 }}>
        <CardContent>
          <Typography variant="subtitle1" gutterBottom>
            Campaign List
          </Typography>
          <ManageCampaignsTable />
        </CardContent>
      </Card>
    </>
  );
};

export default ManageCampaignsPage;
