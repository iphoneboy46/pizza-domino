import React from "react";

function Delivery() {
  return (
    <div className="delivery">
      <div>
        <div className="pt-[100px] w-[100%] flex lg:flex-row md:flex-col flex-col lg:items-start lg:justify-end md:justify-center md:items-center justify-center items-center">
          <div className="lg:w-[1140px] lg:h-[480px]  md:w-[720px] md:h-[240px] w-[400px] h-[240px]">
            {" "}
            <iframe
              title="This is a unique title"
              src={ipURL}
              className="w-[100%] h-[100%]"
              allowfullscreen="true"
              loading="lazy"
              zoom="center"
              frameborder="0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
