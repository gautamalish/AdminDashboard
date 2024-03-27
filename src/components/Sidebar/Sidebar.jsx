import React from 'react'
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import InventoryRoundedIcon from '@mui/icons-material/InventoryRounded';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="top">
        <span className="logo">Alishadmin</span>
        </div>
        <hr />
      <div className="center">
        <ul>
            <li>
              <DashboardIcon/>
                <span>Dashboard</span>
            </li>
            <li>
                <PersonOutlineOutlinedIcon/>
                <span>Users</span>
            </li>
            <li>
                <ProductionQuantityLimitsOutlinedIcon/>
                <span>Products</span>
            </li>
            <li>
                <InventoryRoundedIcon/>
                <span>Orders</span>
            </li>
            <li>
                <span>Delivery</span>
            </li>
            <li>
                <span>Stats</span>
            </li>
            <li>
                <span>Notifications</span>
            </li>
            <li>
                <span>System Health</span>
            </li>
            <li>
                <span>Logs</span>
            </li>
            <li>
                <span>Settings</span>
            </li>
            <li>
                <span>Profile</span>
            </li>
            <li>
                <span>Logout</span>
            </li>
        </ul>
      </div>
      <hr />
      <div className="bottom">color options</div>
    </div>
  )
}

export default Sidebar
