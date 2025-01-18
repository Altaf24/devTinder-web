import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/userSlice'
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Body = () => {
  // if(userData) return; 


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store)=>store.user);


  const fetchUser = async () => {
    try{ const res = await axios.get(BASE_URL + "/profile/view",{
      withCredentials: true,
    });
    dispatch(addUser(res.data))

  }catch(err){
    navigate("/login");
    console.error(err);
  }
   
  };

  useEffect(()=>{
   
    fetchUser();
   
    
  },[]);


  return (
    <div>
        <NavBar/>
        <Outlet/>
        <Footer/>
     
    </div>
  )
}

export default Body
