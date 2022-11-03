import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import SelectOption from "../../SelectOption/SelectOption";
import Context from "../../Store/Context";
import "./takeAWay.css";

function TakeAWay() {
  useEffect(() => {
    const takeAWayPage = document.querySelector(".take-A-Way");
    takeAWayPage.scrollIntoView();
    document.body.overflow = "hidden";
  });

  const handleDaHieu3 = () => {
    const alertAd = document.querySelector(".alert-address");
    const modal = document.querySelector(".modal");

    alertAd.style.display = "none";
    modal.style.display = "none";
  };

  const { ip, setIP, address, setAddress, handleAddress } = useContext(Context);
  const ipURL = `https://www.google.com/maps/embed?pb=${ip}`;

  return (
    <div className="take-A-Way relative">
      <div className="modal"></div>
      <div className="pt-[100px] w-[100%] relative flex lg:flex-row md:flex-col flex-col lg:items-start lg:justify-end md:justify-center md:items-center justify-center items-center">
        <div className="lg:w-[1140px] lg:h-[480px]  md:w-[720px] md:h-[240px] md:mb-[200px] w-[400px] h-[240px] mb-[300px]">
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
          <div className="lg:w-[1140px] md:w-[700px] w-[400px] mt-[50px]">
            <div className="flex justify-between items-center lg:flex-row md:flex-row flex-col lg:p-0 md:p-0 p-3">
              <div className="lg:w-[70%] md:w-[70%] w-[100%]">
                <div className="lg:w-[70%] md:w-[70%] w-[100%]">
                  <h1 className="font-bold">
                    Bạn chọn lấy hàng tại địa chỉ này:
                  </h1>
                  <p className="font-bold text-[#006293]">{address}</p>
                </div>
                <div className="lg:w-[90%] md:w-[90%] w-[100%] lg:mb-0 md:mb-0 mb-[30px]">
                  <h1 className="font-bold">Ghi chú:</h1>
                  <input
                    type="text"
                    className="text-[#6C757D] border-solid border-b-[1px] border-[#CED4DA] rounded-md px-2 font-bold w-[100%] h-[40px] outline-[#80bdff] focus:shadow-md focus:shadow-[#80bdff]"
                    placeholder="Nhập ghi chú"
                  />
                </div>
              </div>
              <div className="lg:w-[30%] md:w-[30%] w-[100%]">
                <Link to="/thucdon">
                  <button
                    onClick={handleAddress}
                    className="w-[100%] font-bold text-white bg-[#E31837] px-10 py-5 rounded"
                  >
                    Tiếp tục mua hàng
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center absolute top-[130px] left-[50%] translate-x-[-50%] z-[998] lg:w-[800px] md:w-[600px] w-[350px] ">
          <input
            className="lg:w-[100%] md:w-[100%] w-[100%] h-[40px] p-2 text-[#6C757D] font-bold border-[#ced4da] border-solid border-2 rounded-tl-md rounded-bl-md outline-[#80bdff] focus:shadow-md focus:shadow-[#80bdff]"
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

        <SelectOption address={address} />
      </div>
      <div className="alert-address lg:w-[30%] md:w-[50%] w-[80%] fixed bg-[#f2f4f8] top-[50%] left-[50%] z-[99999] -translate-x-[50%] -translate-y-[50%] rounded-md ">
        <div
          onClick={handleDaHieu3}
          className="absolute bg-[#c0142f] py-2 px-4 text-2xl text-white right-0 rounded-tr-md z-10"
        >
          <i class="fa-solid fa-xmark"></i>
        </div>
        <h1 className="font-bold text-center mt-[60px]">Thông báo</h1>
        <h1 className="font-bold text-center mt-2">
         Vui lòng chọn cửa hàng mà bạn muốn chọn đến lấy
        </h1>
        <div className="flex justify-center items-center mb-5">
          <button
            onClick={handleDaHieu3}
            className="bg-[#e31837] text-white font-bold px-4 py-3 rounded mt-2 hover:bg-[#c0142f] "
          >
            Đã hiểu
          </button>
        </div>
      </div>
    </div>
  );
}

export default TakeAWay;
