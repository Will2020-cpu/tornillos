import React from 'react'
import NavBar from './NavBar'
import Footer from '../Footer/Footer'

const Layout = ({ children }) => {
    return (
        <>
            <NavBar/>
            <div className="contenedor">
                {children}
            </div>
          <Footer/>
        </>
    )
}

export default Layout
