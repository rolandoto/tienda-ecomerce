import React, { useContext } from 'react'
import Appcontex from '../context/Appcontex'
import {Link} from 'react-router-dom'
import '../style/styles/Checkout.css'
import { ToastContainer,toast  } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';




const Shekaout = () => {
    const {state,remove} = useContext(Appcontex)
    const{cart} = state
    //total
    const subtotla  = () => {
        const reducer = (current,currentvalue) => current + currentvalue.price
        const sum = cart.reduce(reducer,0)
        return sum
    }
    const notify = () => toast.error("X PRODUCTO BORRADO");

    const handremove = ingresar => () => {
        remove(ingresar)
        notify()
      
    }
    return (
        <div className="Checkout">
                
                    <div className="Checkout-content">
                        {/**si lista  es mayor de 0 entoces se va a mostrar lista de de pedido sino si esta 0
                         * sin pedidos
                         */}
                   
                        {cart.map((items) => (
                            <div key={items.id} className="Checkout-item">
                                <div className="Checkout-element">
                                     <h4>{items.title}</h4>
                                     <div className="Products-item">
                                     <img src={items.image} alt=""/>
                                     </div>
                                   
                                   
                                    <span>{items.price}</span>
                                </div>
                                <button type="button"  onClick={handremove(items)}>
                                <i className="fas fa-trash"/>
                                </button>
                           
                                </div>

                        ))}
                            
                    </div>
                    {cart.length > 0 && (
                        <div className="Checkout-sidebar">
                        <h3>{`precio total:$ ${subtotla()} `}</h3>
                        <Link to="/Information">
                        <a href="/" className="bluee" >continuear</a>
                        </Link>
                     
                   
                    </div>
                    )}
                    
                    <ToastContainer
       position="top-left"
       autoClose={2000}
       hideProgressBar={false}
       newestOnTop={false}
       closeOnClick
       rtl={false}
       pauseOnFocusLoss
       draggable
       pauseOnHover/>
             </div>
    )
}

export default Shekaout
