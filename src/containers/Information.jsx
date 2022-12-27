import React, { useRef, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import appContext from '../context/appContext';
import '../styles/components/Information.css';

function Information() {
  const navigate = useNavigate();

  const { state, addToBuyer } = useContext(appContext)
  const form = useRef(null);

  const { cart } = state;

  const handleClick = () => {
    navigate('/checkout');
  };

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      'name': formData.get('name'),
      'email': formData.get('email'),
      'address': formData.get('address'),
      'apto': formData.get('apto'),
      'city': formData.get('city'),
      'country': formData.get('country'),
      'state': formData.get('state'),
      'cp': formData.get('cp'),
      'phone': formData.get('phone'),
    }

    // OTRA FORMA DE FORMAR EL FROM DATA
    // const formData = new FormData(form.current);
    // const buyer = Object.fromEntries(formData);
    // console.log(buyer);


    addToBuyer(buyer);
    navigate('/checkout/payment');
  }

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Informacion de contacto:</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input type="text" placeholder="Nombre completo" name="name" />
            <input type="text" placeholder="Correo Electronico" name="email" />
            <input type="text" placeholder="Direccion" name="address" />
            <input type="text" placeholder="Dpto" name="apto" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="Pais" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="number" placeholder="Codigo postal" name="cp" />
            <input type="number" placeholder="Telefono" name="phone" max={10} />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back" >
            <Link to='/checkout/payment'>
              Regresar
            </Link>

          </div>
          <div className="Information-next">
            <Link to='/checkout/payment'>
              <button type="button" onClick={handleSubmit}>Pagar</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {
          cart.map((item) => (
            <div className="Information-item" key={item.title}>
              <div className="Information-element">
                <h4>{item.title}</h4>
                <span>${item.price}</span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Information