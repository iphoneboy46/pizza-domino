import React, { useContext, useState } from "react";
import Context from "../../Store/Context";
import { FastField, Formik } from "formik";
import * as Yup from "yup";
import InputField2 from "../InputField/InputField2";
import "./ThanhToan.css";
import Select from "react-select";
import { options } from "./Options";

function ThanhToan() {
  const { orderAddress } = useContext(Context);
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
      <div className="flex justify-between h-[auto] w-[100%]">
        <div className="pt-[80px] w-[80%] overflow-hidden">
          <div className="bg-[#e3f4fc] lg:flex md:flex hidden justify-between items-center">
            <div className="flex items-center  p-4 lg:ml-[100px] md:ml-100px text-[#6a6b6c] font-semibold">
              <h1 className="mr-5">Bạn đang chọn:</h1>
              <h1 className="mr-5 text-[#de1736]">
                {orderAddress.takeAway || orderAddress.deliver}
              </h1>
              <h1>{orderAddress.address}</h1>
            </div>
          </div>
          <div className="w-[60%] m-[auto] flex justify-between items-start p-3">
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
          <div className="w-[60%] m-[auto] p-3">
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
          <div className="w-[60%] m-[auto] p-5">
            <div className="flex items-center">
              <input
                onChange={() => {
                  handleCheckBox(!checkBox);
                }}
                type="checkbox"
                checked={checkBox}
              />{" "}
              <h1 className="text-xl font-bold ml-3">Xuất hóa đơn đỏ</h1>
            </div>
            <div className="flex justify-between items-start w-[100%]">
              <div className="w-[100%] mr-5">
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
              <div className="w-[100%] ml-5">
                <div className="flex justify-between">
                  <label className="font-bold block mb-2" htmlFor="nameCompany">
                    Mã số thuế *
                  </label>
                  <FastField
                    name="nameCompany"
                    component={InputField2}
                    placeholder="Nhập tên công ty"
                    type="text"
                  />
                  <div>Kiểm tra</div>
                </div>

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
            </div>
          </div>
        </div>

        <div className="w-[20%]"></div>
      </div>
    </Formik>
  );
}

export default ThanhToan;
