import React, { useContext } from 'react'
import Appcontex from '../context/Appcontex'
import {PayPalButton} from 'react-paypal-button'
import '../style/styles/Payment.css'
const Pyment = ({history}) => {
    const {state,addorders} = useContext(Appcontex)
    const {cart,buyer,orders} = state


    const  hanSubtotal = () => {
        const reducee = (current,curretnValue) => current + curretnValue.price
        const sum = cart.reduce(reducee,0)
        return sum
       
    }

      //propiedades del paypal
      const paypalPotion = {
        clientId: 'AWoIwc7I6v8x83vBPXUkh5MTA5gw83qkwesXg3LecaOka_qYqc683hVz8AgQnlIFrsoQoNCBvhgOCQdZ',
        intent: 'capture',
        currency:'USD'
    }
    //estilos de paypel
    const buttonStyles = {
        loyout:'vertical',
        shape: 'rect'
    }



    const handesuceess = (data) => {
           
        console.log(data)
      

           if(data.status === 'COMPLETED'){
             //AQUI ESTA ALMACENANDO TODA LA INFORMACION DEL CARRTIO,PRODUYCTO,
               const newOrder = {
                   //comprador 
                  buyer,
                  //product
                  product: cart,
                  //paypal
                  payment:data
                  
               }
               addorders(newOrder);
               history.push('/Sucess')
               console.log('exicto')
           }
           
      }

    return (
        <div>
            <div className="Payment">
                <div className="Payment-con¡`+´çtent">
                    <h3>resumen del pedido</h3>

                    {cart.map((item) => (
                        <div className="payment-item" key={item.id}>
                            <div className="payment-element">
                                <h4>{item.title}</h4>
                                <span>$
                                    {' '}
                                     {item.price}
                                </span>
                            </div>
                        </div>
                    ))}

                    {cart.length > 0  && (
                        <div className="Pyment-button">
                              <PayPalButton 
                             paypalOptions={paypalPotion}
                            buttonStyles={buttonStyles}
                            amount={hanSubtotal()}
                            onPaymentStart={() => console.log('start payment')}
                            //EL AQUI MANDA UNOS DATOS EN LA FUNCION
                            onPaymentSuccess={data => handesuceess(data)}
                            onPaymentError= {error => console.log(error) }
                            onPaymentCancel ={data => console.log(data)}
                              />
                        </div>
                        )}
                </div>

            </div>
        </div>
    )
}

export default Pyment
