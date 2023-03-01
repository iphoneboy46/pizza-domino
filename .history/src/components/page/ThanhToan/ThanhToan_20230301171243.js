import React, { useContext, useState } from "react";
import Context from "../../Store/Context";
import { FastField, Formik } from "formik";
import * as Yup from "yup";
import InputField2 from "../InputField/InputField2";
import "./ThanhToan.css";
import Select from "react-select";
import { options } from "./Options";

function ThanhToan() {
  const { orderAddress,menuOrders } = useContext(Context);
  const [checked, setChecked] = useState(1);
  const [checkedPay, setCheckedPay] = useState(6);
  const [isChecked, setIsChecked] = useState(false);
  const [checkBox, setCheckBox] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Vui lòng nhập tên khách hàng!"),
    nameCompany: Yup.string().required("Vui lòng nhập tên công ty"),
    address: Yup.string().required("Vui lòng nhập địa chỉ công ty"),
    masothue: Yup.number().required("Vui lòng nhập mã số thuế"),
    emailDienTu: Yup.string()
      .email()
      .required("Vui lòng nhập Email nhận hóa đơn điện tử"),
    phone: Yup.number().required("Vui lòng nhập số điện thoại!"),
  });

  const handleChecked = (id) => {
    setChecked(id);
    if (id === 2) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  };

  const handleCheckedPay = (id) => {
    setCheckedPay(id);
  };

  const handleCheckBox = (id) => {
    setCheckBox(id);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      <div className="flex lg:justify-between md:flex-col flex-col  h-[auto] w-[100%]">
        <div className="pt-[80px] lg:w-[80%] md:w-[100%] w-[100%] overflow-hidden">
          <div className="bg-[#e3f4fc] lg:flex md:flex  hidden justify-between items-center">
            <div className="flex items-center  p-4 lg:ml-[100px] md:ml-100px text-[#6a6b6c] font-semibold">
              <h1 className="mr-5">Bạn đang chọn:</h1>
              <h1 className="mr-5 text-[#de1736]">
                {orderAddress.takeAway || orderAddress.deliver}
              </h1>
              <h1>{orderAddress.address}</h1>
            </div>
          </div>
          <div className="lg:w-[60%] md:w-[80%] w-[100%] flex-col  m-[auto] flex lg:justify-between md:justify-between lg:items-start md:items-start p-3">
            <div className="flex-1 mr-10">
              <h1 className="font-bold text-xl mb-2">Thông tin người dùng</h1>
              <label className="font-bold block mb-2" htmlFor="name">
                Tên khách hàng *
              </label>
              <FastField
                name="name"
                component={InputField2}
                placeholder="Nhập tên khách hàng"
                type="text"
              />

              <label className="font-bold block mb-2" htmlFor="email">
                Email
              </label>
              <FastField
                name="email"
                component={InputField2}
                //prop truyen vao input field

                type="email"
                placeholder="Nhập địa chỉ email của bạn"
              />
              <span className="mt-[-10px] block text-xs font-bold mb-5">
                Kiểm tra đơn hàng ở hộp thư đến hoặc thư mục spam
              </span>

              <label className="font-bold block mb-2" htmlFor="email">
                Số điện thoại *
              </label>

              <FastField
                name="phone"
                component={InputField2}
                placeholder="Nhập số điện thoại"
              />
            </div>
            <div className="flex-1 mr-10">
              <h1 className="font-bold text-xl mb-2">Thông tin đặt hàng</h1>
              <label className="font-bold block mb-2" htmlFor="name">
                Ghi chú
              </label>
              <FastField
                name="ghichu"
                component={InputField2}
                placeholder="Nhập ghi chú cho đơn hàng"
                type="text"
              />
              <div>
                <div className="dat-thanh-toan flex items-center mb-5 border-b-[1px] border-[#CDCDCE] pb-5">
                  <input
                    className="input-thanh-toan"
                    id="dathang"
                    type="radio"
                    value="Đặt hàng - Giao hàng ngay"
                    checked={checked === 1}
                    onChange={() => {
                      handleChecked(1);
                    }}
                  />

                  <label for="dathang"></label>
                  <p
                    className={
                      checked === 1
                        ? "ml-5 text-[black] font-bold"
                        : "text-[#6c757d] ml-5 font-bold"
                    }
                  >
                    Đặt hàng - Giao hàng ngay
                  </p>
                </div>
                <div className="dat-thanh-toan flex items-center w-[100%] my-5 border-b-[1px] border-[#CDCDCE] pb-5">
                  <input
                    className="input-thanh-toan"
                    id="giaohang"
                    type="radio"
                    value="Giao hàng - Nhận hàng hẹn giờ"
                    checked={checked === 2}
                    onChange={() => {
                      handleChecked(2);
                    }}
                  />

                  <label for="giaohang"></label>
                  <p
                    className={
                      checked === 2
                        ? "ml-5 text-[black] font-bold"
                        : "text-[#6c757d] ml-5 font-bold"
                    }
                  >
                    Giao hàng - Nhận hàng hẹn giờ
                  </p>
                </div>
                {isChecked && (
                  <div className="w-[100%]">
                    <Select
                      placeholder="Chọn giờ nhận hàng"
                      options={options}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="lg:w-[60%] md:w-[80%] m-[auto] p-3">
            <h1 className="font-bold text-xl mb-2">Phương thức thanh toán</h1>
            <div className="w-[100%] flex justify-between items-center px-5 py-2">
              <div className="w-[100%] mr-5">
                <div className="dat-thanh-toan flex items-center w-[100%] mb-3 border-b-[1px] border-[#CDCDCE] pb-3">
                  <input
                    className="input-thanh-toan"
                    id="atm"
                    type="radio"
                    value="Đặt hàng - Giao hàng ngay"
                    checked={checkedPay === 1}
                    onChange={() => {
                      handleCheckedPay(1);
                    }}
                  />

                  <label for="atm"></label>
                  <p
                    className={
                      checkedPay === 1
                        ? "ml-5 text-[black] font-bold flex items-center"
                        : "text-[#6c757d] ml-5 font-bold flex items-center"
                    }
                  >
                    <img
                      className="w-[40px] h-[40px] mr-5"
                      src="https://img.dominos.vn/icon-payment-method-atm.png"
                      alt=""
                    />{" "}
                    ATM
                  </p>
                </div>
                <div className="dat-thanh-toan flex items-center w-[100%] mb-3 border-b-[1px] border-[#CDCDCE] pb-3">
                  <input
                    className="input-thanh-toan"
                    id="momo"
                    type="radio"
                    value="Đặt hàng - Giao hàng ngay"
                    checked={checkedPay === 2}
                    onChange={() => {
                      handleCheckedPay(2);
                    }}
                  />

                  <label for="momo"></label>
                  <p
                    className={
                      checkedPay === 2
                        ? "ml-5 text-[black] font-bold flex items-center"
                        : "text-[#6c757d] ml-5 font-bold flex items-center"
                    }
                  >
                    <img
                      className="w-[40px] h-[40px] mr-5"
                      src="https://img.dominos.vn/icon-payment-method-mo-mo.png"
                      alt=""
                    />{" "}
                    Ví MoMo
                  </p>
                </div>
                <div className="dat-thanh-toan flex items-center w-[100%] mb-3 border-b-[1px] border-[#CDCDCE] pb-3">
                  <input
                    className="input-thanh-toan"
                    id="shopee"
                    type="radio"
                    value="Đặt hàng - Giao hàng ngay"
                    checked={checkedPay === 3}
                    onChange={() => {
                      handleCheckedPay(3);
                    }}
                  />

                  <label for="shopee"></label>
                  <p
                    className={
                      checkedPay === 3
                        ? "ml-5 text-[black] font-bold flex items-center"
                        : "text-[#6c757d] ml-5 font-bold flex items-center"
                    }
                  >
                    <img
                      className="w-[40px] h-[40px] mr-5"
                      src="https://img.dominos.vn/shoppepay.png"
                      alt=""
                    />{" "}
                    Ví ShopeePay
                  </p>
                </div>
              </div>
              <div className="w-[100%] ml-5">
                <div className="dat-thanh-toan flex items-center w-[100%] mb-3 border-b-[1px] border-[#CDCDCE] pb-3">
                  <input
                    className="input-thanh-toan"
                    id="tindung"
                    type="radio"
                    value="Đặt hàng - Giao hàng ngay"
                    checked={checkedPay === 4}
                    onChange={() => {
                      handleCheckedPay(4);
                    }}
                  />

                  <label for="tindung"></label>
                  <p
                    className={
                      checkedPay === 4
                        ? "ml-5 text-[black] font-bold flex items-center"
                        : "text-[#6c757d] ml-5 font-bold flex items-center"
                    }
                  >
                    <img
                      className="w-[40px] h-[40px] mr-5"
                      src="https://img.dominos.vn/icon-payment-method-credit.png"
                      alt=""
                    />{" "}
                    Thẻ tín dụng / ghi nợ
                  </p>
                </div>
                <div className="dat-thanh-toan flex items-center w-[100%] mb-3 border-b-[1px] border-[#CDCDCE] pb-3">
                  <input
                    className="input-thanh-toan"
                    id="zalo"
                    type="radio"
                    value="Đặt hàng - Giao hàng ngay"
                    checked={checkedPay === 5}
                    onChange={() => {
                      handleCheckedPay(5);
                    }}
                  />

                  <label for="zalo"></label>
                  <p
                    className={
                      checkedPay === 5
                        ? "ml-5 text-[black] font-bold flex items-center"
                        : "text-[#6c757d] ml-5 font-bold flex items-center"
                    }
                  >
                    <img
                      className="w-[40px] h-[40px] mr-5"
                      src="https://img.dominos.vn/icon-payment-method-zalo-pay.png"
                      alt=""
                    />{" "}
                    Ví ZaloPay
                  </p>
                </div>
                <div className="dat-thanh-toan flex items-center w-[100%] mb-3 border-b-[1px] border-[#CDCDCE] pb-3">
                  <input
                    className="input-thanh-toan"
                    id="tienmat"
                    type="radio"
                    value="Đặt hàng - Giao hàng ngay"
                    checked={checkedPay === 6}
                    onChange={() => {
                      handleCheckedPay(6);
                    }}
                  />

                  <label for="tienmat"></label>
                  <p
                    className={
                      checked === 6
                        ? "ml-5 text-[black] font-bold flex items-center"
                        : "text-[#6c757d] ml-5 font-bold flex items-center"
                    }
                  >
                    <img
                      className="w-[40px] h-[40px] mr-5"
                      src="https://img.dominos.vn/cash.png"
                      alt=""
                    />{" "}
                    Tiền mặt
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[60%] md:w-[80%] m-[auto] p-5">
            <div className="flex items-center mb-3">
              <input
                onChange={() => {
                  handleCheckBox(!checkBox);
                }}
                type="checkbox"
                checked={checkBox}
              />{" "}
              <h1 className="text-xl font-bold ml-3">Xuất hóa đơn đỏ</h1>
            </div>
            {checkBox && (
              <div className="flex lg:justify-between lg:items-start md:flex-col flex-col w-[100%]">
                <div className="w-[100%] lg:mr-5">
                  <label className="font-bold block mb-2" htmlFor="nameCompany">
                    Tên công ty *
                  </label>
                  <FastField
                    name="nameCompany"
                    component={InputField2}
                    placeholder="Nhập tên công ty"
                    type="text"
                  />

                  <label className="font-bold block mb-2" htmlFor="address">
                    Địa chỉ *
                  </label>
                  <FastField
                    name="address"
                    component={InputField2}
                    //prop truyen vao input field

                    type="text"
                    placeholder="Nhập địa chỉ"
                  />
                </div>
                <div className="w-[100%] lg:ml-5">
                  <div className="w-[100%]">
                    <label className="font-bold block mb-2" htmlFor="masothue">
                      Mã số thuế *
                    </label>
                    <div className="flex w-[100%]">
                      <div className="w-[80%]">
                        <FastField
                          name="masothue"
                          component={InputField2}
                          placeholder="Nhập mã số thuế"
                          type="text"
                        />
                      </div>
                      <div className="w-[20%] flex justify-center items-center font-bold bg-[#E31837] h-[41px] text-white cursor-pointer select-none text-center">
                        Kiểm tra
                      </div>
                    </div>
                  </div>

                  <label className="font-bold block mb-2" htmlFor="emailDienTu">
                    Email nhận hóa đơn điện tử *
                  </label>
                  <FastField
                    name="emailDienTu"
                    component={InputField2}
                    //prop truyen vao input field

                    type="email"
                    placeholder="Nhập Email nhận hóa đơn điện tử"
                  />
                </div>
              </div>
            )}
          </div>
          <div className="m-auto font-bold text-xl uppercase bg-[#E31837] w-[400px] p-5 text-center text-white mb-5 rounded-xl opacity-70">Hoàn tất thanh toán</div>
        </div>

          <div className="lg:w-[20%] md:w-[100%] w-[100%] pt-[80px] p-5 border-l-2 border-[#DFE4EA]">
              
               <div className="py-5">
                  {
                    menuOrders.map((menu)=>{
                      return(
                        <>
                          <div className="border-b-[1px] border-[#DFE4EA] mb-5">
                            <div className="flex justify-between items-start mb-5">
                              <span className="font-bold">{menu.quantity}</span>
                              <span className="font-bold">x</span>
                              <h1 className="font-bold w-[50%] text-sm text-start">{menu.name}</h1>
                              <h1 className="font-bold text-sm">{menu.totalP}.000 đ</h1>
                            </div>
                            <div className="flex justify-between items-start">
                              <div className="w-[5%]">
                                
                              </div>
                            <div className="lg:w-[30%] md:w-[35%] pb-8">
                              <h6 className="font-bold text-xs text-[#717273]">{menu.base}</h6>
                              <h6 className="font-bold text-xs text-[#717273]">{menu.size}</h6>
                              <h6 className="font-bold text-xs text-[#717273]">{menu.border9}</h6>
                              <h6 className="font-bold text-xs text-[#717273]">{menu.border12}</h6>
                              <h6 className="font-bold text-xs text-[#717273]">{menu.more9}</h6>
                              <h6 className="font-bold text-xs text-[#717273]">{menu.more12}</h6>
                            </div>
                            <div className="w-[100px] h-[50px] rounded-md">
                              <img className="w-[100%] h-[100%] rounded-md" src={menu.image} alt="" />
                            </div>
                            </div>
                          </div>
                        </>
                      )
                    })
                  }
               </div>
             
        </div>
      </div>
    </Formik>
  );
}

export default ThanhToan;
