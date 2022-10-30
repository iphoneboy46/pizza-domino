import React from "react";
import { Link } from "react-router-dom";

function Delivery() {
  return (
    <div className="delivery">
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
        <div className="flex justify-center items-center">
          <input className="w-[800px] h-[500px] p-2 text-[#6C757D] font-bold border-[#ced4da] border-solid border-2 rounded-tl-md rounded-bl-md outline-[#80bdff] focus:shadow-md focus:shadow-[#80bdff]" type="text" placeholder="Vui lòng nhập địa chỉ nhận hàng" />
          <Link to="">
            <button type="submit" className="p-3 bg-[#E31837]">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
