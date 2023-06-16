import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout({children}) {
  return (
    <div className='app'>
        <header>

        </header>
        {children}
        <footer>
            
        </footer>
    </div>
  )
}
