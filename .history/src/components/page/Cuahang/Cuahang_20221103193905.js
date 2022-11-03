import React from 'react';
import Login from '../Login/Login';
import Location from '../Location/Location'

function Cuahang() {

  useEffect(() => {
    const pageCuaHang = document.getElementById("cua-hang");
    console.log(pageDelivery)
    pageDelivery.scrollIntoView();
  
})

  return (
    <div id="cua-hang">
      <div className="content"></div>
      <Login />
      <Location />
    </div>
  )
}

export default Cuahang