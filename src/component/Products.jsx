import React, { useContext } from 'react'
import Appcontex from '../context/Appcontex'
import '../style/styles/Products.css'


const Products = ({product1,handadd}) => {
    const {state} = useContext(Appcontex)
    const {cart} = state

    

    const alert = () => {
        alert('producto añadidp')
    }
    console.log(cart)
    return (
        
        <div className="Products-item">
               
            <img src={product1.image} alt={product1}/>
            <div className='product-item-info'>
                <h2>{product1.title}
                <span>$
                    {' '}
                    {product1.price}</span>
                </h2>
                <p>{product1.descripction}</p>
              
              <button type="button" onClick={handadd(product1)}>añadir al carrito</button>
            
            </div>
             
           
              
        </div>
    )
}

export default Products
