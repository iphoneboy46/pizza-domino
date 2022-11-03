import React from 'react';
import Login from '../Login/Login';
import Location from '../Location/Location'

function Cuahang() {

  useEffect(() => {
    const pageDelivery = document.getElementById("map-content");
    console.log(pageDelivery)
    pageDelivery.scrollIntoView();
  
})

  return (
    <div>
      <div className="content"></div>
      <Login />
      <Location />
    </div>
  )
}

export default Cuahang