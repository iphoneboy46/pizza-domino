import React, { useContext } from "react";
import SelectOption from "../../SelectOption/SelectOption";
import Context from "../../Store/Context";



function Location() {

  const {ip,setIP} = useContext(Context);
  const ipURL = `https://www.google.com/maps/embed?pb=${ip}`

  return (
    <div className="pt-[100px] w-[100%] relative flex lg:flex-row md:flex-col flex-col lg:items-start lg:justify-end md:justify-center md:items-center justify-center items-center">
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
      <div className="flex justify-center items-center absolute top-[130px] left-[50%] translate-x-[-50%] z-[999]">
          <input
            className="w-[800px] h-[40px] p-2 text-[#6C757D] font-bold border-[#ced4da] border-solid border-2 rounded-tl-md rounded-bl-md outline-[#80bdff] focus:shadow-md focus:shadow-[#80bdff]"
            type="text"
            placeholder="Vui lòng nhập địa chỉ nhận hàng"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value)
            }}
          />
          <Link to="">
            <button
              type="submit"
              className="px-5 bg-[#E31837] h-[40px] text-white rounded-tr-md rounded-br-md"
            >
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </Link>
        </div>
      <SelectOption />
    </div>
  );
}

export default Location;
