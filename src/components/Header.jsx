import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import appContext from '../context/appContext'
import '../styles/components/Header.css'

function Header() {
  const { state } = useContext(appContext)
  const { cart }  = state;

  return (
    <div className='Header'>
        <h1 className='Header-title'>
          <a href='/'>PlatziConf Merch</a>
        </h1>
        <div className='Header-checkout'>
          <Link to="checkout">
          <i className="fas fa-shopping-basket fa-2x" />
          </Link>
          {
            cart.length > 0 &&
            <div className='Header-alert'>
              {cart.length }
            </div>
          }
        </div>
    </div>
  )
}

export default Header