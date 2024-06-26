import React, { useState } from 'react'
import "./dataTable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userColumns,userRows } from '../../dataTableSrc';
import { Link } from 'react-router-dom';
function DataTable() {
  const [data,setData]=useState(userRows)
  function handleDeleteClick(id){
    setData(data.filter(item=>item.id!==id))
  }
  const actionColumn=[
    {field:"action",headerName:"Action",width:200,renderCell:(params)=>{
      return(
        <div className='cellAction'>
          <Link to="/users/test" style={{textDecoration:"none"}}>
          <div className='viewButton'>View</div>
          </Link>
          <div className='deleteButton' onClick={()=>handleDeleteClick(params.row.id)}>Delete</div>
        </div>
      )
    }}
  ]
  const getRowHeight = () => {
    return 80; // Set the row height to 100 pixels
  };
  return (
    <div className='dataTable'>
      <div className="dataTableTitle">
        Add New User
        <Link to="/users/new" style={{textDecoration:"none"}} className='link'>Add New</Link>
      </div>
      <DataGrid className='dataGrid'
        rows={data}
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
