import React from 'react'
import "./dataTable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userColumns,userRows } from '../../dataTableSrc';
function DataTable() {
  const actionColumn=[
    {field:"action",headerName:"Action",width:200,renderCell:()=>{
      return(
        <div className='cellAction'>
          <div className='viewButton'>View</div>
          <div className='deleteButton'>Delete</div>
        </div>
      )
    }}
  ]
  const getRowHeight = () => {
    return 80; // Set the row height to 100 pixels
  };
  return (
    <div className='dataTable'>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 9 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        getRowHeight={getRowHeight}
      />
    </div>
  )
}

export default DataTable
