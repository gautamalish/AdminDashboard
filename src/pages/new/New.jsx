import React from 'react'
import "./new.scss"
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import { DriveFolderUploadOutlined } from '@mui/icons-material'
function New() {
  return (
    <div className='new'>
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>Add New User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" alt="No image icon" />
          </div>
          <div className="right">
            <form >
              <div className="formInput">
                <label htmlFor="file">Image:<DriveFolderUploadOutlined className='icon'/></label>
                <input type="file" id='file' style={{display:"none"}} />
              </div>
              <div className="formInput">
                <label htmlFor="">Username</label>
                <input type="text" placeholder='john_doe'/>
              </div>
              <div className="formInput">
                <label htmlFor="">Name and surname</label>
                <input type="text" placeholder='John Doe'/>
              </div>
              <div className="formInput">
                <label htmlFor="">Email</label>
                <input type="email" placeholder='john_doe@gmail.com'/>
              </div>
              <div className="formInput">
                <label htmlFor="">Phone</label>
                <input type="number" placeholder='+977 3637336228'/>
              </div>
              <div className="formInput">
                <label htmlFor="">Password</label>
                <input type="password"/>
              </div>
              <div className="formInput">
                <label htmlFor="">Address</label>
                <input type="text" placeholder='Biratnagar'/>
              </div>
              <div className="formInput">
                <label htmlFor="">Country</label>
                <input type="password" placeholder='Nepal'/>
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New
