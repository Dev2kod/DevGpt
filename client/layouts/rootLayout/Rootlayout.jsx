import { Link,Outlet } from 'react-router-dom'
import React from 'react'

const Rootlayout = () => {
  return (
    <>  
    <div className='rootLayout'>
        <header>
            <Link to="/">
            <img src="/logo.png" alt="" />
            <span>Dev-GPT</span>
            </Link>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>
    </>
)
}

export default Rootlayout