import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Location from "../Location/Location";

function TakeAWay() {
  useEffect(() => {
    const takeAWayPage = document.querySelector(".take-A-Way");
    takeAWayPage.scrollIntoView();
  });

  return (
    <div className="take-A-Way relative">
      <Location />
     
    </div>
  );
}

export default TakeAWay;
