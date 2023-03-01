import React, { useContext, useState } from "react";
import Context from "../../Store/Context";
import { FastField, Formik } from "formik";
import * as Yup from "yup";
import InputField2 from "../InputField/InputField2";
import "./ThanhToan.css";
import Select from "react-select";

function ThanhToan() {
  const { orderAddress } = useContext(Context);
  const [checked, setCheck] = useState(1);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Vui lòng nhập tên khách hàng!"),
    phone: Yup.number().required("Vui lòng nhập số điện thoại!"),
  });

  const handleChecked = (id) => {
    setCheck(id);
  };

  const options = [
    {
      label: "Chọn giờ nhận hàng",
      value: "Chọn giờ nhận hàng",
    },

    {
      label: "10h 30p",
      value: "10h 30p",
    },
    {
      label: "10h 40p",
      value: "10h 40p",
    },
    {
      label: "10h 50p",
      value: "10h 50p",
    },
    {
      label: "11h 0p",
      value: "11h 0p",
    },
    {
      label: "11h 10p",
      value: "11h 10p",
    },
    {
      label: "11h 20p",
      value: "11h 20p",
    },
    {
      label: "11h 30p",
      value: "11h 30p",
    },
    {
      label: "11h 40p",
      value: "11h 40p",
    },
    {
      label: "11h 50p",
      value: "11h 50p",
    },
    {
      label: "12h 0p",
      value: "12h 0p",
    },
    {
      label: "12h 10p",
      value: "12h 10p",
    },
    {
      label: "12h 20p",
      value: "12h 20p",
    },
    {
      label: "12h 30p",
      value: "12h 30p",
    },
    {
      label: "12h 40p",
      value: "12h 40p",
    },
    {
      label: "12h 50p",
      value: "12h 50p",
    },
    {
      label: "13h 0p",
      value: "13h 0p",
    },
    {
      label: "13h 10p",
      value: "13h 10p",
    },
    {
      label: "13h 20p",
      value: "13h 20p",
    },
    {
      label: "13h 30p",
      value: "13h 30p",
    },
    {
      label: "13h 40p",
      value: "13h 40p",
    },
    {
      label: "13h 50p",
      value: "13h 50p",
    },
    {
      label: "14h 0p",
      value: "14h 0p",
    },
    {
      label: "14h 10p",
      value: "14h 10p",
    },
    {
      label: "14h 20p",
      value: "14h 20p",
    },
    {
      label: "14h 30p",
      value: "14h 30p",
    },
    {
      label: "14h 40p",
      value: "14h 40p",
    },
    {
      label: "14h 50p",
      value: "14h 50p",
    },
    {
      label: "15h 0p",
      value: "15h 0p",
    },
    {
      label: "15h 10p",
      value: "15h 10p",
    },
    {
      label: "15h 20p",
      value: "15h 20p",
    },
    {
      label: "15h 30p",
      value: "15h 30p",
    },
    {
      label: "15h 40p",
      value: "15h 40p",
    },
    {
      label: "15h 50p",
      value: "15h 50p",
    },
    {
      label: "16h 0p",
      value: "16h 0p",
    },
    {
      label: "16h 10p",
      value: "16h 10p",
    },
    {
      label: "16h 20p",
      value: "16h 20p",
    },
    {
      label: "16h 30p",
      value: "16h 30p",
    },
    {
      label: "16h 40p",
      value: "16h 40p",
    },
    {
      label: "16h 50p",
      value: "16h 50p",
    },
    {
      label: "17h 0p",
      value: "17h 0p",
    },
    {
      label: "17h 10p",
      value: "17h 10p",
    },
    {
      label: "17h 20p",
      value: "17h 20p",
    },
    {
      label: "17h 30p",
      value: "17h 30p",
    },
    {
      label: "17h 40p",
      value: "17h 40p",
    },
    {
      label: "17h 50p",
      value: "17h 50p",
    },
    {
      label: "18h 0p",
      value: "18h 0p",
    },
    {
      label: "18h 10p",
      value: "18h 10p",
    },
    {
      label: "18h 20p",
      value: "18h 20p",
    },
    {
      label: "18h 30p",
      value: "18h 30p",
    },
    {
      label: "18h 40p",
      value: "18h 40p",
    },
    {
      label: "18h 50p",
      value: "18h 50p",
    },
    {
      label: "19h 0p",
      value: "19h 0p",
    },
    {
      label: "19h 10p",
      value: "19h 10p",
    },
    {
      label: "19h 20p",
      value: "19h 20p",
    },
    {
      label: "19h 30p",
      value: "19h 30p",
    },
    {
      label: "19h 40p",
      value: "19h 40p",
    },
    {
      label: "19h 50p",
      value: "19h 50p",
    },
    {
      label: "20h 0p",
      value: "20h 0p",
    },
    {
      label: "20h 10p",
      value: "20h 10p",
    },
    {
      label: "20h 20p",
      value: "20h 20p",
    },
    {
      label: "20h 30p",
      value: "20h 30p",
    },
    {
      label: "20h 40p",
      value: "20h 40p",
    },
    {
      label: "20h 50p",
      value: "20h 50p",
    },
    {
      label: "21h 0p",
      value: "21h 0p",
    },
    {
      label: "21h 10p",
      value: "21h 10p",
    },
    {
      label: "21h 20p",
      value: "21h 20p",
    },
  ];

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      <div className="flex justify-between h-[100vh] w-[100%]">
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
          <div className="w-[60%] m-[auto] flex justify-between items-start p-5">
            <div className="flex-1 mr-10">
              <h1 className="font-bold text-xl mb-2">Thông tin người dùng</h1>
              <label className="font-bold block mb-2" htmlFor="name">
                Tên khách hàng*
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
                Số điện thoại*
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
                <div className="w-[100%]">
                  <Select placeholder="Chọn giờ nhận hàng" options={options} />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[60%] m-[auto] p-5">
            <h1 className="font-bold text-xl mb-5">Phương thức thanh toán</h1>
            <div>
              <div className="dat-thanh-toan flex items-center w-[100%] mb-5 border-b-[1px] border-[#CDCDCE] pb-5">
                <input
                  className="input-thanh-toan"
                  id="atm"
                  type="radio"
                  value="Đặt hàng - Giao hàng ngay"
                  checked={checked === 1}
                  onChange={() => {
                    handleChecked(1);
                  }}
                />
  
                <label for="atm"></label>
                <p
                  className={
                    checked === 1
                      ? "ml-5 text-[black] font-bold flex items-center"
                      : "text-[#6c757d] ml-5 font-bold flex items-center"
                  }
                >
                 <img className="w-[40px] h-[40px] mr-5" src="https://img.dominos.vn/icon-payment-method-atm.png" alt=""/> ATM
                </p>
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
