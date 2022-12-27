import React from 'react'
import Products from '../components/Products'
import initialState from '../initialState'
import MetaHelmet from '../components/MetaHelmet';

function Home() {
  return (
    <>
      <MetaHelmet
        title="Home"
        description="Encuentra todos tus productos favoritos"
        image="https://davecast.s3.amazonaws.com/avatarnegativo.jpg"
        url="https://mocafood.xyz/"
      />
      <Products products={initialState.products} />
    </>
  )
}

export default Home