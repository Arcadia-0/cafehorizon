import React from 'react'
import logodark from "../../assets/logodark.png"

const Navbar = () => {
  return (
    <nav className='p-4'>
        <div className=' container mx-auto flex items-center justify-between'>

            <div className=''>
                <img src={logodark} alt="" className='h-25 w-25' />
            </div>
            <div className='space-x-4'>
                <a href="#">HOME</a>
                <a href="#">ABOUT</a>
                <a href="#">MENU</a>
                <a href="#">CONTACT</a>
            </div>

        </div>
       
    </nav>
  )
}

export default Navbar