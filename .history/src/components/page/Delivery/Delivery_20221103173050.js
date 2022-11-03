import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Context from "../../Store/Context";

function Delivery() {
  const { address, setAddress, handleAddress } = useContext(Context);

  useEffect(() => {
    window.onload = () =>{
      const pageDelivery = document.querySelector(".map");
      pageDelivery.scrollIntoView();
    }
  })

  return (
    <div className="delivery-page h-[100vh]">
      <div className="map relative">
        <div className="pt-[100px] w-[100%] flex lg:flex-row md:flex-col flex-col lg:items-start lg:justify-center md:justify-center md:items-center justify-center items-center">
          <div className="lg:w-[1140px] lg:h-[480px]  md:w-[720px] md:h-[240px] w-[400px] h-[240px]">
            {" "}
            <iframe
              title="This is a unique title"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7864040.763809553!2d101.41507575441595!3d15.758350487215536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31157a4d736a1e5f%3A0xb03bb0c9e2fe62be!2zVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1667141635631!5m2!1svi!2s"
              className="w-[100%] h-[100%]"
              allowfullscreen="true"
              loading="lazy"
              zoom="center"
              frameborder="0"
            />
          </div>
        </div>
        <div className="flex justify-center items-center absolute top-[130px] left-[50%] translate-x-[-50%] z-[999]">
          <input
            className="w-[800px] h-[40px] p-2 text-[#6C757D] font-bold border-[#ced4da] border-solid border-2 rounded-tl-md rounded-bl-md outline-[#80bdff] focus:shadow-md focus:shadow-[#80bdff]"
            type="text"
            placeholder="Vui lòng nhập địa chỉ nhận hàng"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
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
      </div>
      <div className="m-auto my-[50px] w-[1140px] ">
        <div className="flex justify-between items-center">
          <div>
            <div>
              <h1 className="font-bold">Bạn chọn giao hàng đến địa chỉ này:</h1>
              <p className="font-bold text-[#006293]">{address}</p>
            </div>
            <div>
              <h1 className="font-bold">Ghi chú:</h1>
              <input
                type="text"
                className="text-[#6C757D] border-solid border-b-[1px] border-[#CED4DA] rounded-md px-2 font-bold w-[800px] h-[40px] outline-[#80bdff] focus:shadow-md focus:shadow-[#80bdff]"
                placeholder="Nhập ghi chú"
              />
            </div>
          </div>
          <div>
            <Link to="/thucdon">
              <button
                onClick={handleAddress}
                className="font-bold text-white bg-[#E31837] px-10 py-5 rounded"
              >
                Giao hàng đến địa chỉ này
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
