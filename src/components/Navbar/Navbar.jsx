import React, { useContext } from 'react'
import "./navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { DarkModeContext } from '../../context/DarkModeContext';
function Navbar() {
  const {dispatch}=useContext(DarkModeContext)
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search' />
          <SearchOutlinedIcon/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon/>
            English
          </div>
          <div className="item darkIconContainer">
            <DarkModeOutlinedIcon className="darkModeIcon" onClick={()=>dispatch({type:"Toggle"})}/>
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon/>
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ListOutlinedIcon/>
          </div>
          <div className="item">
            <img src="https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
             alt="avatar" 
             className='avatar'/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar
