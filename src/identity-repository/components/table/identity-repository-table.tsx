import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

const columns: GridColDef[] = [
  {
    field: "username",
    headerName: "User name",
    width: 200,
  },
  {
    field: "ntid",
    headerName: "NTID",
    width: 200,
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
  },
];

const IdentityRepositoryTable = () => {
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

export default IdentityRepositoryTable;
