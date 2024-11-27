import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box, Chip } from "@mui/material";
import { useEffect, useState } from "react";
import { getCampaigns } from "../../api";

const columns: GridColDef[] = [
  {
    field: "campaignName",
    headerName: "Campaign name",
    width: 200,
  },
  {
    field: "campaignOwner",
    headerName: "Campaign owner",
    width: 200,
  },
  {
    field: "startDate",
    headerName: "Start date",
    width: 150,
  },
  {
    field: "endDate",
    headerName: "End date",
    width: 150,
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    renderCell: ({ formattedValue }) => {
      if (formattedValue === "Preview")
        return (
          <Chip label={formattedValue} color="secondary" variant="outlined" />
        );

      if (formattedValue === "Completed")
        return (
          <Chip label={formattedValue} color="success" variant="outlined" />
        );

      if (formattedValue === "Expired")
        return <Chip label={formattedValue} color="error" variant="outlined" />;
    },
  },
];

const ManageCampaignsTable = () => {
  const [campaigns, setCampaign] = useState([]);

  useEffect(() => {
    getCampaigns().then((response) => {
      setCampaign(response);
    });
  }, []);

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={campaigns}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default ManageCampaignsTable;
