import React, { useContext } from "react";
import SelectOption from "../../SelectOption/SelectOption";
import Context from "../../Store/Context";



function Location() {

  const {ip,setIP} = useContext(Context);
  const ipURL = `https://www.google.com/maps/embed?pb=${ip}`

  return (
    <div className="pt-[100px] w-[100%] flex lg:flex-row md:flex-col flex-col lg:items-start lg:justify-end md:justify-center md:items-center">
      <div className="lg:w-[1140px] lg:h-[480px]  md:w-[720px] h-[240px]">
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
      <SelectOption />
    </div>
  );
}

export default Location;
