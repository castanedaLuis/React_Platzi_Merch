import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
// import { PayPalButtons } from '@paypal/react-paypal-js';
import { PayPalButton } from "react-paypal-button-v2";
import appContet from '../context/appContext'
import '../styles/components/Payment.css';

function Payment() {
  const navigate = useNavigate();
  const { state, addNewOrder } = useContext(appContet);
  const { cart, buyer } = state;

  const paypalOptions = {
    clientID: process.env.ID_CLIENTE_PEYPAL,
    intent: "capture",
    currency: "USD"
  }
  const buttonStyles = {
    Layout: "vertical",
    shape: "rect",
  }

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };
  const handlePaymentSuccess = (data) => {
    console.log("sucessing");
    if (data.status === "COMPLETED") {
      const newOrder = {
        buyer,
        product: cart,
        payment: data
      }
      addNewOrder(newOrder);
      navigate("/checkout/success");
    }
  };

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: handleSumTotal()
          },
        },
      ],
    });
  };
  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (data) {
      handlePaymentSuccess(data);
    });
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del Pedido:</h3>
        {cart.map((item) => (
          <div className="Payment-item" key="item.title">
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))
        }
        <div className="Payment-item">
          <h3>Total:</h3>
          <span><strong>$ {handleSumTotal()}</strong></span>
        </div>
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            createOrder={(data, actions) => createOrder(data, actions)}
            onApprove={(data, actions) => onApprove(data, actions)}
            onError={(error) => console.log(error)}
            onCancel={data => console.log(data)} />
        </div>
      </div>
    </div>
  );

}

export default Payment