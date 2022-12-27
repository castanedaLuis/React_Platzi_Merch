import React,{useContext, useEffect} from 'react'
import appContext from '../context/appContext'
import Map from '../components/Map';
// import useGoogleAddress from '../hooks/useGoogleAddress';
import '../styles/components/Success.css';

function Success() {

  const { state,stateGoogle, removeAllFromCart } = useContext(appContext);
  const { buyer } = state;
  const {results} = stateGoogle;
  // const location = useGoogleAddress(buyer[0].address);
  const location = {lat: 18.95304486697251, lng: -98.1558311040161}


  useEffect(() => {
    console.log(results[0].geometry.location);
  }, [results[0].geometry.location])

  return (
    <div className="Success">
      <div className="Success-content">
        <h2>J{`${buyer.name}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegara en 3 dias a tu direccion:</span>
        <div className="Success-map">
          <Map data={location}/>
        </div>
      </div>
      {
        removeAllFromCart()
      }
    </div>
    
  )
}

export default Success