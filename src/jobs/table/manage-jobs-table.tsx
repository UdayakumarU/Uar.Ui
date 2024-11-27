import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

const columns: GridColDef[] = [
  {
    field: "jobname",
    headerName: "Job name",
    width: 200,
  },
  {
    field: "jobCategory",
    headerName: "Job category",
    width: 200,
  },
  {
    field: "jobType",
    headerName: "Job type",
    width: 150,
  },
  {
    field: "lastExecuted",
    headerName: "Last executed",
    width: 150,
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
  },
  {
    field: "nextrun",
    headerName: "Next run",
    width: 150,
  },
];

const ManageJobsTable = () => {
  const [identityRepository, setIdentityRepository] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5039/api/Campaign")
      .then((response) => response.json())
      .then((response) => {
        setIdentityRepository(response);
      });
  }, []);

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={identityRepository}
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

export default ManageJobsTable;
