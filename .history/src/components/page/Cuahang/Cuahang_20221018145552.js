import React from 'react';
import Login from 'surge/lib/middleware/login';
import Location from '../Location/Location'

function Cuahang() {
  return (
    <div>
      <Login />
      <Location />
    </div>
  )
}

export default Cuahang