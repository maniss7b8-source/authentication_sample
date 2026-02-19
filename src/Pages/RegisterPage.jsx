import React, { useRef, useState } from 'react'
import "./RegisterPage.css"
import axios from 'axios'

import {Link, useNavigate} from "react-router-dom"

const RegisterPage = () => {

  const navigate=useNavigate();

  const [userdata,setUserdata]=useState({
    name:"",
    email:"",
    password:""
  });

  const[focus,setfocus]=useState({
    name:false,
    email:false,
    password:false
  });
  
  const handlefocus=(field)=>{
    setfocus((pre)=>{
      return{
        ...pre,
        [field]:true
      }
    })
  }


   const handleblur=(field)=>{
    setfocus((pre)=>{
      return{
        ...pre,
        [field]:false
      }
    })
  }


  const updateData=(e)=>{
    let {name,value}=e.target;
    setUserdata((curr)=>{
      return{
        ...curr,
        [name]:value
      }
    })
  }

  const handleSubmit= async(e)=>{
    // e.preventDefault();

    if(!userdata.name || !userdata.email || !userdata.password){
      alert("Please Enter all input values")
      return;
    }

   const alexists= await axios.get(`http://localhost:3000/user?userEmail=${userdata.email}`)
   if(alexists.data.length>0){
    alert("Email is already register")
    return;
   }


    let body={
      username:userdata.name,
      userEmail:userdata.email,
      upassword:userdata.password
    }

    const addData=await axios.post("http://localhost:3000/user",body)
    console.log("Add Userdata");
    setUserdata({
    name:"",
    email:"",
    password:""
    })

    if(addData){
      alert("Register Successfully");
      navigate("/")
    }


  }



  
  return (
    <div className='register_container'>
      <h1 className='head'>Goagram</h1>

      <div className='inside'>

        <h1 className='headname'>Create your account</h1>

        <div className={`forinp ${userdata.name||focus.name?"active":""}`}>
          <label className={`lab ${userdata.name||focus.name?"lab1act":""}`} htmlFor="name">Name</label>
          <input className='input' type="text" name="name" value={userdata.name} id="name" 
          onChange={updateData}  
          onFocus={() => handlefocus("name")}
          onBlur={() => handleblur("name")}
          required />
        </div>

        <div className={`forinp ${userdata.email||focus.email?"active":""}`}>
          <label className={`lab ${userdata.email||focus.email?"lab2act":""}`} htmlFor="email">Email</label>
          <input className='input' type="email" name="email" value={userdata.email} id="email" 
          onChange={updateData}
          onFocus={() => handlefocus("email")}
          onBlur={() => handleblur("email")}
           required/>
        </div>

        <div className={`forinp ${userdata.password||focus.password?"active":""} `}>
          <label className={`lab ${userdata.password||focus.password?"lab3act":""} `} htmlFor="pass">Password</label>
          <input className='input' type="password" name="password" value={userdata.password} id="pass" 
          onChange={updateData}
          onFocus={() => handlefocus("password")}
          onBlur={() => handleblur("password")}
           required/>
        </div>

        <div>
        <input className='check' type="checkbox" id='check' required />
        <label id="chelable" className='check' htmlFor="check">I agree to the terms and conditions</label>
        </div>

        <button className='regsubmit' onClick={handleSubmit}>Submit</button>
 
        <div className='alreadyacc'>
          <p>Have an account already? <Link to="/">Log in</Link></p>
        </div>

        
      </div>

    </div>
  )
}

export default RegisterPage