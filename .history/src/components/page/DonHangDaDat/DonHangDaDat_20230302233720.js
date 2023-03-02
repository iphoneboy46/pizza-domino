import React, { useContext } from "react";
import Context from "../../Store/Context";

function DonHangDaDat() {
  const { listDonHang } = useContext(Context);

  return (
    <div className="pt-[80px] bg-[#EEEEEE] h-[100vh]">
      <h1 className="uppercase font-bold text-center text-4xl my-5">
        đơn hàng của bạn
      </h1>
      <div className="bg-[#00628F] w-[50%] m-auto h-[100vh] p-10">
        {listDonHang.map((donHang) => {
          return (
            <div className="bg-white w-[80%] m-[auto]">
              <div className="w-[100%] p-5 flex justify-between border-b-[1px] border-[black] pb-2">
                <h1 className="text-xl font-bold text-start">Tên khách hàng :</h1>
                <span className="text-end">{donHang.name}</span>
              </div>
              <div className="w-[100%] p-5 flex justify-between border-b-[1px] border-[black]">
                <h1 className="text-xl font-bold text-start">Email :</h1>
                <span className="text-end">{donHang.email}</span>
              </div>
              <div className="w-[100%] p-5 flex justify-between border-b-[1px] border-[black]">
                <h1 className="text-xl font-bold text-start">Số điện thoại :</h1>
                <span className="text-end">{donHang.phone}</span>
              </div>
              <div className="w-[100%] p-5 flex justify-between border-b-[1px] border-[black]">
                <h1 className="text-xl font-bold text-start">Ghi chú :</h1>
                <span className="text-end">{donHang.ghichu}</span>
              </div>
              <div className="w-[100%] p-5 flex justify-between border-b-[1px] border-[black]">
                <h1 className="text-xl font-bold text-start">Ghi chú :</h1>
                <span className="text-end">{donHang.xuatHoaDonDo}</span>
              </div>
              
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DonHangDaDat;
