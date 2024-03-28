import React from 'react'
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import InventoryRoundedIcon from '@mui/icons-material/InventoryRounded';
import AirportShuttleRoundedIcon from '@mui/icons-material/AirportShuttleRounded';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="top">
        <span className="logo">Alishadmin</span>
        </div>
        <hr />
      <div className="center">
        <ul>
            <p className='title'>MAIN</p>
            <li>
              <DashboardIcon className='icon'/>
                <span>Dashboard</span>
            </li>
            <p className='title'>LISTS</p>
            <li>
                <PersonOutlineOutlinedIcon className='icon'/>
                <span>Users</span>
            </li>
            <li>
                <ProductionQuantityLimitsOutlinedIcon className='icon'/>
                <span>Products</span>
            </li>
            <li>
                <InventoryRoundedIcon className='icon'/>
                <span>Orders</span>
            </li>
            <li>
                <AirportShuttleRoundedIcon className='icon'/>
                <span>Delivery</span>
            </li>
            <p className='title'>USEFUL</p>
            <li>
                <EqualizerIcon className='icon'/>
                <span>Stats</span>
            </li>
            <li>
                <NotificationsIcon className='icon'/>
                <span>Notifications</span>
            </li>
            <p className='title'>SERVICE</p>
            <li>
                <HealthAndSafetyIcon className='icon'/>
                <span>System Health</span>
            </li>
            <li>
                <PsychologyIcon className='icon'/>
                <span>Logs</span>
            </li>
            <li>
                <SettingsIcon className='icon'/>
                <span>Settings</span>
            </li>
                <p className='title'>USER</p>
            <li>
                <AccountCircleIcon className='icon'/>
                <span>Profile</span>
            </li>
            <li>
                <LogoutIcon className='icon'/>
                <span>Logout</span>
            </li>
        </ul>
      </div>
      <hr />
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  )
}

export default Sidebar
