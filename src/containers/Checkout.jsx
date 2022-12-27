import React, { useContext } from 'react'
import appContext from '../context/appContext'
// import { Link } from 'react-router-dom'
import '../styles/components/Checkout.css';

function Checkout() {
  const { state, removeFromCart } = useContext(appContext);
  const { cart } = state;

  const handleRemove = (product,index) => () => {
    removeFromCart(product,index);
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  }
  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>{cart.length > 0 ? 'Lista de Pedidos' : 'Sin Pedidos'}</h3>
        {
          cart.map((item,index) => (
            <div className="Checkout-item">
              <div className="Checkout-element">
                <h4>{item.title}</h4>
                <span>${item.price}</span>
              </div>
              <button type="button" onClick={handleRemove(item,index)}>
                <i className="fas fa-trash-alt" />
              </button>
            </div>
          ))
        }
      </div>
      {
        cart.length > 0 &&
        <div className="Checkout-sidebar">
          <h3>{`Precio Total:$ ${handleSumTotal()}`}</h3>
          {/* <Link href='/checkout/information'>
        </Link> */}
          <a href='/checkout/information'>
            <button type="button">Continuar pedido</button>
          </a>
        </div>
      }
    </div>
  )
}

export default Checkout