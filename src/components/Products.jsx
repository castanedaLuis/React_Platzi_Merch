import React,{useContext} from 'react'
import appContext from '../context/appContext'
import Product from './Product'
import '../styles/components/Products.css';

function Products() {
  // Ya no necesitamos las props, sino implementar el context

  const {state, addToCart} = useContext(appContext)
  const {products} = state
  
  const handleAddToCart = product => () => {
    addToCart(product)
  }
  return (
    <div className="Products">
      <div className="Products-items">
        {products.map(product => (
          <Product key={product.id} product={product} handleAddToCart={handleAddToCart}/>
        ))}
      </div>
    </div>
  )
}

export default Products