import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import appContext from '../context/appContext'
import MetaHelmet from '../components/MetaHelmet';
import '../styles/components/Checkout.css';

function Checkout() {
  const { state, removeFromCart } = useContext(appContext);
  const { cart } = state;

  const handleRemove = (product, index) => () => {
    removeFromCart(product, index);
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  }
  return (
    <>
      <MetaHelmet
        title="Tus productos"
        description="Tu compra se ha realizado correctamente"
        image="https://davecast.s3.amazonaws.com/avatarnegativo.jpg"
        url="https://mocafood.xyz/"
      />
      <div className="Checkout">
        <div className="Checkout-content">
          <h3>{cart.length > 0 ? 'Lista de Pedidos' : 'Sin Pedidos'}</h3>
          {
            cart.map((item, index) => (
              <div className="Checkout-item">
                <div className="Checkout-element">
                  <h4>{item.title}</h4>
                  <span>${item.price}</span>
                </div>
                <button type="button" onClick={handleRemove(item, index)}>
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
            <Link to='/checkout/information'>
              <button type="button">Continuar pedido</button>
            </Link>

          </div>
        }
      </div>
    </>
  )
}

export default Checkout