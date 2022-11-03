import React, { useEffect } from 'react'
import Location from '../Location/Location'

function TakeAWay() {

  useEffect(() => {
    const takeAWayPage = document.querySelector(".take-A-Way");
  })

  return (
    <div className="take-A-Way">
        <Location />
    </div>
  )
}

export default TakeAWay