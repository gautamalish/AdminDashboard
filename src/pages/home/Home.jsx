import React from 'react'
import "./home.scss"
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import Widget from '../../components/widget/Widget'
import FeaturedChart from '../../components/featuredChart/FeaturedChart'
import Chart from '../../components/chart/Chart'
import { Tab, Table } from '@mui/material'
import Tablefunc from '../../components/table/Table'
function Home() {
  return (
    <div className='home'>
        <Sidebar/>
        <div className='homeContainer'>
          <Navbar/>
          <div className="widgets">
            <Widget type="user"/>
            <Widget type="order"/>
            <Widget type="earning"/>
            <Widget type="balance"/>
          </div>
          <div className="charts">
            <FeaturedChart/>
            <Chart aspect={2/1} title="Last 6 Months (Revenue)"/>
          </div>
          <div className="listContainer">
            <div className="listTitle">Latest Transactions</div>
            <Tablefunc/>
          </div>
          </div>
    </div>
  )
}

export default Home
