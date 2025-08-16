import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import {useAuth} from "@clerk/clerk-react"
import { useEffect } from 'react'

export const Dlayout = () => {
  
  const {userId, isLoaded} = useAuth()
  const navigate = useNavigate()

  useEffect(()=>{
 if(isLoaded && !userId){
  navigate("/sign-in")
 }

  },[isLoaded,userId,navigate])
  
  if(!isLoaded){
    return "Loading..." 
  }

  return (
    <div className='dashboardLayout'>
        <div className="menu">
                Menu
        </div>
        <div className="content">
            <Outlet/>
        </div>
    </div>
  )
}