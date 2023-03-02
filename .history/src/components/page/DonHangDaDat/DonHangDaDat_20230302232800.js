import React, { useContext } from "react";
import Context from "../../Store/Context";

function DonHangDaDat() {
  const { listDonHang } = useContext(Context);

  return (
    <div className="pt-[80px] bg-[#EEEEEE] h-[100vh]">
      <h1 className="uppercase font-bold text-center text-4xl my-5">
        đơn hàng của bạn
      </h1>
      <div className="bg-[#00628F] w-[60%] m-auto h-[100vh]">
        {listDonHang.map((donHang) => {
          return (
            <div className="bg-white w-[50%]">
              <div className="w-[100%] p-5 flex justify-between">
                <h1>Name</h1>
                <span>{donHang.name}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DonHangDaDat;
