import React, { useContext } from 'react'
import   '..//style/styles/Header.css'
import {Link} from 'react-router-dom'
import Appcontex from '../context/Appcontex'
const Header = () => {
    const {state} = useContext(Appcontex)
    const {cart} =state
    return (
       
        <div className="Header">
        <h1 className="Header-title"> 
        
    
        <Link className="centrar" to="/"  > 
    
            Are You <span className="blue">Ready?</span> 
        </Link>
       </h1>
        <div className="Header-chekaout fixed">
         
                    <Link to="/Shekaout" className="p-2 bd-highlight">
                <li className=" fas fa-shopping-basket header-alert ">{ <span className="ree">{cart.length}</span> }
                <div class="fixed-bottom">rolando</div>
                </li>
                </Link>

          
       
          
        </div>
       
    </div>
    )
}

export default Header
