import React, { useContext, useState } from "react";
import Context from "../../Store/Context";
import { FastField, Formik } from "formik";
import * as Yup from "yup";
import InputField from "../InputField/InputField";
import InputField2 from "../InputField/InputField2";
import "./ThanhToan.css";
import Select from "react-select/dist/declarations/src/Select";

function ThanhToan() {
  const { orderAddress } = useContext(Context);
  const [checked, setCheck] = useState(1);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required("Vui lòng nhập địa chỉ email của bạn!"),
    name: Yup.string().required("Vui lòng nhập tên khách hàng!"),
    phone: Yup.number().required("Vui lòng nhập số điện thoại!"),
  });

  const handleChecked = (id) => {
    setCheck(id);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      <div className="flex justify-between h-[100vh]">
        <div className="pt-[80px] w-[80%]">
          <div className="bg-[#e3f4fc] lg:flex md:flex hidden justify-between items-center">
            <div className="flex items-center  p-4 lg:ml-[100px] md:ml-100px text-[#6a6b6c] font-semibold">
              <h1 className="mr-5">Bạn đang chọn:</h1>
              <h1 className="mr-5 text-[#de1736]">
                {orderAddress.takeAway || orderAddress.deliver}
              </h1>
              <h1>{orderAddress.address}</h1>
            </div>
          </div>
          <div className="w-[60%] h-[100px] m-[auto] flex justify-between items-start p-5">
            <div>
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
            <div>
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
                <div className="dat-thanh-toan flex items-center w-[100%] mb-5">
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
                <hr className="text-[#EEEEEE]"/>
                <div className="dat-thanh-toan flex items-center w-[100%] mt-5">
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
                <div>
                    <Select />
                </div>
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
