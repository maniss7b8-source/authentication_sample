import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  const navigate=useNavigate()

  const goback=()=>{
    alert("Logout");
    localStorage.removeItem("user");
    navigate("/");
  }

  return (
    <nav>
       <h2>Goagram</h2>
       <ul className='navlis'>
       <li><Link to={'/profile'} className='int'>Profile</Link></li>
       <li onClick={goback}>Logout</li>
       </ul>
    </nav>
  )
}

export default Navbar