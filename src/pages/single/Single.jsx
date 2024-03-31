import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import "./single.scss"
import Chart from '../../components/chart/Chart'
import Tablefunc from '../../components/table/Table'
function Single() {
  return (
    <div className='single'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
            <img src="https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="itemImage" />
            <div className="details">
              <h1 className="itemTitle">Jane Doe</h1>
              <div className="detailItem">
                <span className="itemKey">Email:</span>
                <span className="itemValue">janedoe@gmail.com</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Phone:</span>
                <span className="itemValue">+1 2313 12 14</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Address:</span>
                <span className="itemValue">Biratnagar, Nepal</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Country:</span>
                <span className="itemValue">Nepal</span>
              </div>
            </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3/1} title="User Spending (Last 6 Months)"/>
          </div>
        </div>
        <div className="bottom">
          <div className="title">Last Transactions</div>
            <Tablefunc/>
        </div>
      </div>
    </div>
  )
}

export default Single
