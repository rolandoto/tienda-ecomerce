import React, { useContext } from 'react'
import Product from '../component/Product'
import Appcontex from '../context/Appcontex'
import {Link} from 'react-router-dom'
const Home = () => {
const {state} = useContext(Appcontex)
const {cart} = state

    return (
        
        <div>
           
          <Product/>

       
        </div>
    )
}

export default Home
