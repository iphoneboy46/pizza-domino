import React, { useContext, useEffect, useState } from "react";
import Context from "../../Store/Context";

function DonHangDaDat() {
  const { listDonHang, totalOrders, phoneFilter } = useContext(Context);
  const [isNone, setIsNone] = useState(false);

  

  useEffect(() => {
    let checkPhone = listDonHang.filter((phone) => {
      return phone.phone === phoneFilter;
    });

    console.log(checkPhone);

    if (checkPhone.length > 0) {
      setIsNone(false);
    } else if(checkPhone === "undefined") {
      setIsNone(true);
    }
  });

  return (
    <div className="pt-[80px] bg-[#EEEEEE] h-[100vh]">
      <h1 className="uppercase font-bold text-center text-4xl my-5">
        đơn hàng của bạn
      </h1>
      <div className="bg-[#00628F] lg:w-[50%] md:w-[90%] w-[100%] m-auto h-[80vh] lg:p-10 md:p-10 p-5 mb-10 overflow-y-scroll">
        {isNone ? (
          listDonHang.map((donHang, index) => {
            return donHang.phone === phoneFilter ? (
              <div
                key={index}
                className="bg-white lg:w-[80%] md:w-[100%] w-[100%] m-[auto]"
              >
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
                    <h1 className="text-xl font-bold text-start">
                      Mã số thuế :
                    </h1>
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
                    Hình thức nhận hàng :
                  </h1>
                  <span className="text-end">{donHang.htdh}</span>
                </div>
                <div className="w-[100%] p-5 flex justify-between border-b-[1px] border-[lightgray]">
                  <h1 className="text-xl font-bold text-start">Hẹn giờ :</h1>
                  <span className="text-end">{donHang.henGio}</span>
                </div>
                <div className="w-[100%] p-5 flex justify-between border-b-[1px] border-[lightgray]">
                  <h1 className="text-xl font-bold text-start">
                    Phương thức thanh toán :
                  </h1>
                  <span className="text-end">{donHang.pttt}</span>
                </div>
                {donHang.data.map((menu) => {
                  return (
                    <>
                      <div className="border-b-[1px] border-[#DFE4EA] mb-5 p-5">
                        <div className="flex justify-between items-start mb-5">
                          <span className="font-bold">{menu.quantity}</span>
                          <span className="font-bold">x</span>
                          <h1 className="font-bold w-[50%] text-sm text-start">
                            {menu.name}
                          </h1>
                          <h1 className="font-bold text-sm">
                            {menu.totalP}.000 đ
                          </h1>
                        </div>
                        <div className="flex justify-between items-start">
                          <div className="w-[5%]"></div>
                          <div className="lg:w-[34%] md:w-[35%] w-[30%] pb-8">
                            <h6 className="font-bold text-xs text-[#717273]">
                              {menu.base}
                            </h6>
                            <h6 className="font-bold text-xs text-[#717273]">
                              {menu.size}
                            </h6>
                            <h6 className="font-bold text-xs text-[#717273]">
                              {menu.border9}
                            </h6>
                            <h6 className="font-bold text-xs text-[#717273]">
                              {menu.border12}
                            </h6>
                            <h6 className="font-bold text-xs text-[#717273]">
                              {menu.more9}
                            </h6>
                            <h6 className="font-bold text-xs text-[#717273]">
                              {menu.more12}
                            </h6>
                          </div>
                          <div className="w-[100px] h-[50px] rounded-md">
                            <img
                              className="w-[100%] h-[100%] rounded-md"
                              src={menu.image}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
                <div className="w-[100%] p-5 flex justify-between border-b-[1px] border-[lightgray] pb-2">
                  <h1 className="text-xl font-bold text-start">
                    Tổng số tiền :
                  </h1>
                  <span className="text-end text-xl text-[red] font-bold">
                    {donHang.tong > 1000
                      ? donHang.tong.toFixed().split("").slice(0, 1) +
                        "." +
                        donHang.tong.toFixed().split("").slice(1)
                      : donHang.tong}
                    .000 ₫
                  </span>
                </div>
              </div>
            ) : (
              ""
            );
          })
        ) : (
          <h1 className="text-3xl font-bold text-center text-white uppercase">
            không tìm thấy đơn hàng
          </h1>
        )}
      </div>
    </div>
  );
}

export default DonHangDaDat;
