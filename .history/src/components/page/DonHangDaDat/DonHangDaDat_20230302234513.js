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
              <div className="w-[100%] p-5 flex justify-between border-b-[1px] border-[lightgray] pb-2">
                <h1 className="text-xl font-bold text-start">
                  Tên khách hàng :
                </h1>
                <span className="text-end">{donHang.name}</span>
              </div>
              <div className="w-[100%] p-5 flex justify-between border-b-[1px] border-[lightgray]">
                <h1 className="text-xl font-bold text-start">Email :</h1>
                <span className="text-end">{donHang.email}</span>
              </div>
              <div className="w-[100%] p-5 flex justify-between border-b-[1px] border-[lightgray]">
                <h1 className="text-xl font-bold text-start">
                  Số điện thoại :
                </h1>
                <span className="text-end">{donHang.phone}</span>
              </div>
              <div className="w-[100%] p-5 flex justify-between border-b-[1px] border-[lightgray]">
                <h1 className="text-xl font-bold text-start">Địa chỉ :</h1>
                <span className="text-end">{donHang.addressClient}</span>
              </div>
              <div className="w-[100%] p-5 flex justify-between border-b-[1px] border-[lightgray]">
                <h1 className="text-xl font-bold text-start">Ghi chú :</h1>
                <span className="text-end">{donHang.ghichu}</span>
              </div>
              <div className="w-[100%] p-5 flex justify-between border-b-[1px] border-[lightgray]">
                <h1 className="text-xl font-bold text-start">
                  Xuất hóa đơn đỏ :
                </h1>
                <span className="text-end">{donHang.xuatHoaDonDo}</span>
              </div>
              {donHang.nameCompany && (
                <div className="w-[100%] p-5 flex justify-between border-b-[1px] border-[lightgray]">
                  <h1 className="text-xl font-bold text-start">
                    Tên công ty :
                  </h1>
                  <span className="text-end">{donHang.nameCompany}</span>
                </div>
              )}
              {donHang.addressCompany && (
                <div className="w-[100%] p-5 flex justify-between border-b-[1px] border-[lightgray]">
                  <h1 className="text-xl font-bold text-start">
                    Tên công ty :
                  </h1>
                  <span className="text-end">{donHang.addressCompany}</span>
                </div>
              )}
              {donHang.maSoThue && (
                <div className="w-[100%] p-5 flex justify-between border-b-[1px] border-[lightgray]">
                  <h1 className="text-xl font-bold text-start">Mã số thuế :</h1>
                  <span className="text-end">{donHang.maSoThue}</span>
                </div>
              )}
              {donHang.emailDienTu && (
                <div className="w-[100%] p-5 flex justify-between border-b-[1px] border-[lightgray]">
                  <h1 className="text-xl font-bold text-start">
                    Email nhận hóa đơn điện tử :
                  </h1>
                  <span className="text-end">{donHang.emailDienTu}</span>
                </div>
              )}
              <div className="w-[100%] p-5 flex justify-between border-b-[1px] border-[lightgray]">
                <h1 className="text-xl font-bold text-start">
                  Cách thức giao hàng :
                </h1>
                <span className="text-end">{donHang.ptgh}</span>
              </div>
              <div className="w-[100%] p-5 flex justify-between border-b-[1px] border-[lightgray]">
                <h1 className="text-xl font-bold text-start">
                  Cách thức giao hàng :
                </h1>
                <span className="text-end">{donHang.ptgh}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DonHangDaDat;
