import React, { useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Login.css"
import axios from 'axios';

const Login = () => {

  const navigate=useNavigate();

   const[focus,setfocus]=useState({
      email:false,
      password:false
    });

     const [userdata,setUserdata]=useState({
        email:"",
        password:""
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


  const handlesubmit=async()=>{

    if(!userdata.email || !userdata.password){
      alert("Please Enter all input fields")
      return;
    }

    const getData=await axios.get(`http://localhost:3000/user?userEmail=${userdata.email}&upassword=${userdata.password}`);
    if(getData.data.length>0){
      localStorage.setItem("user",JSON.stringify(getData.data[0]));
      alert("Login Successfully");
      navigate("/dashboard");
    }else{
      alert("Invalid email or password")
    }
  }

  return (
    <div className='login_container'>
      <h1 className='head'>Goagram</h1>
      <div className='inside'>
         <h1 className='headname login'>Sign in</h1>
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
         
         <button className='regsubmit' onClick={handlesubmit}>Log in</button>

         <button className='forgot'>forgot Password?</button>

          <div className='alreadyacc'>
          <p>Do you have an account? <Link to="/regis">Create Account</Link></p>
        </div>
      </div>

    </div>
  )
}

export default Login