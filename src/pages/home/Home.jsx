import React from 'react'
import "./home.scss"
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
function Home() {
  return (
    <div className='home'>
        <Sidebar/>
        <div className='homeContainer'>HomeContainer</div>
    </div>
  )
}

export default Home
