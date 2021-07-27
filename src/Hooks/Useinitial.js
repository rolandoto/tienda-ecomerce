import React, { useState } from 'react'
import Initialstate from '../Initialstate'

const Useinitial = () => {
    const [state,setstate] = useState(Initialstate)
    
    //aádir al carrito
    const addcart = ingresar => {
        setstate({
            ...state,
            cart:[...state.cart, ingresar]
        })
    }

        //borrar
    const remove = ingresar => {
        setstate({
            ...state,
            cart: state.cart.filter(item => item.id != ingresar.id )
        })
    }
    //datos de l comprador
    const addbuyer = ingresar =>{
        setstate({
            ...state,
            buyer:[...state.buyer,ingresar]
        })
    }


    //orden de paypal
    const addorders = ingresar => {
        setstate({
            ...state,
            orders:[...state.orders,ingresar]
        })
    }
  
    return {
        state,
        addcart,
        remove,
        addbuyer,
        addorders
        
    }
    
}

export default Useinitial
