import React from 'react'
import User from '../assets/user_img.png'
import "./ProfilePage.css"
import {Link} from 'react-router-dom'


const ProfilePage = () => {
  const data=JSON.parse(localStorage.getItem("user"))
  return (
    <div>
      <h3 className='forback'><Link to="/dashboard" className='goback'>Back &gt;</Link></h3>
      <div className='prof container'>
        <div className='profile'>
          <div className='edit'>
          <h2 className='profline'>Profile</h2>
          <h4 className='profedit'>Edit Profile</h4>
          </div>
          <img src={User} alt="user" className='user' />
          <h2 className='user_name'>{data?.username}</h2>
          <p className='about'>{data?.userEmail}</p>
          <div>
            <div className='follow'>
              <div>
                <h2 className='fol'>Posts</h2>
                <h4>0</h4>
              </div>
              <div>
                <h2 className='fol'>Followers</h2>
                <h4>0</h4>
              </div>
              <div>
                <h2 className='fol'>Following</h2>
                <h4>0</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage