import React, { useEffect } from "react";
import Location from "../Location/Location";

function TakeAWay() {
  useEffect(() => {
    const takeAWayPage = document.querySelector(".take-A-Way");
    takeAWayPage.scrollIntoView();
  });

  return (
    <div className="take-A-Way">
      <Location />
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

export default TakeAWay;
