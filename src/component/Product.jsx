import React, { useContext } from 'react'
import Appcontex from '../context/Appcontex'
import Products from './Products'
import '../style/styles/Products.css'
import { ToastContainer,toast, Zoom  } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



const Product = () => {
  
 const {state,addcart} = useContext(Appcontex)
 const {product} = state

 const notify = () => toast.info("✔ PRODUCTO AÑADIDO");
 
 const handadd = ingresar => () => {
    addcart(ingresar)
    notify()
    
    
 }


 
  console.log(state)
    return (
        <div     className="Products">
      
        <div className="Products-items">
                {product.map((product) => (
                    <Products key={product.id} product1 ={product} handadd={handadd} />
                ))}
        </div>
       <ToastContainer
       position="top-left"
       autoClose={2000}
       hideProgressBar={false}
       newestOnTop={false}
       closeOnClick
       rtl={false}
       pauseOnFocusLoss
       draggable
       pauseOnHover
                    
       />
        </div>
        
    )
}

export default Product
