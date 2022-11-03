import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Context from "../../Store/Context";

function Delivery() {
  const { address, setAddress, handleAddress } = useContext(Context);

  useEffect(() => {
    window.onload = () =>{
      const pageDelivery = document.getElementById("map-content");
      console.log(pageDelivery)
      pageDelivery.scrollIntoView();
    }
  })

  return (
    <div id="map-content"  className="delivery-page h-[1000vh]">
      ádfasfasfasfh
    </div>
  );
}

export default Delivery;
