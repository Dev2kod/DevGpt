import React from 'react'
import { Outlet } from 'react-router-dom'

export const Dlayout = () => {
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