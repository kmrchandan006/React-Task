import React, { useState, useEffect } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { TextField } from '@mui/material';

const columns = [
  { field: 'customer', headerName: 'Customer', width: 200 },
  { field: 'lastSeen', headerName: 'Last seen', width: 150 },
  { field: 'orders', headerName: 'Orders', width: 100 },
  { field: 'totalSpent', headerName: 'Total spent ($)', width: 150 },
  { field: 'latestPurchase', headerName: 'Latest purchase', width: 200 },
  { field: 'news', headerName: 'News', width: 100, type: 'boolean' },
  { field: 'segments', headerName: 'Segments', width: 150 },
];

function CustomerTable() {
  const [rows, setRows] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredRows, setFilteredRows] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        setRows(data);
        setFilteredRows(data);
      });
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchText(value);
    setFilteredRows(
      rows.filter((row) =>
        Object.values(row).some((field) =>
          field?.toString().toLowerCase().includes(value)
        )
      )
    );
  };

  return (
    <div className="h-96 w-full p-6 bg-gray-100 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="w-72">
          <TextField
            variant="outlined"
            label="Search Customers"
            value={searchText}
            onChange={handleSearch}
            fullWidth
            className="bg-white rounded-lg shadow-sm"
            InputProps={{
              classes: {
                notchedOutline: 'border-gray-300',
              },
            }}
          />
        </div>
      </div>
      <div className="h-full">
        <DataGrid
          rows={filteredRows}
          columns={columns}
          pageSize={5}
          components={{ Toolbar: GridToolbar }}
          checkboxSelection
          disableSelectionOnClick
          className="bg-white rounded-lg shadow-lg border border-gray-200"
        />
      </div>
    </div>
  );
}

export default CustomerTable;
