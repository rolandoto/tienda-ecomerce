import React, { useContext } from 'react'
import Appcontex from '../context/Appcontex'

const Sucess = () => {
    const {state} = useContext(Appcontex)
    const  {orders,buyer} = state
    
    console.log(buyer)
    return (
        <div>
           {buyer.map((re) => (
            <div>
                <h1>gracias por su compra Señor</h1>
                <h4>{re.name}</h4>,
         
            </div>
              
               
           ))}
        </div>
    )
}

export default Sucess   