import React, { useEffect } from 'react'
import Navbar from '../Components.jsx/Navbar'
import "./Dashboard.css"
import Userimg from '../assets/user_img.png'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate();

  const data=JSON.parse(localStorage.getItem("user"));

useEffect(() => {
  if (!data) {
    navigate("/");
  }
}, []);
  return (
    <div className='dash container'>
      <Navbar />
      <div className='dash1'>
        <h1 className='wel_mess'>WELCOME, {data?.username}</h1>
        <div className='all'>
          <div className='forpro'>
            <img className='userimg' src={Userimg} alt="" />
            <div className='useNE'>
              <h1 className='usName'>{data?.username}</h1>
              <h2 className='usEmail'>{data?.userEmail}</h2>
            </div>
          </div>
          <div className="addfrends">
            <h3 className='forfrie'>Discover new connections and stay engaged with your network.</h3>
            <button className='btn'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg><span>Add Friends</span></button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard