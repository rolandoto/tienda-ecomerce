import React from 'react'
import Footer from './Footer'
import Header from './Header'
import '../style/styles/Layout.css'
const Layou = ({children}) => {
    return (
        <div   className="Main"> 
            <Header/>
            {children}
            <Footer/>
         
        </div>
    )
}
export default Layou