import React, { useContext } from "react";
import Context from "../../Store/Context";
import { FastField, Formik } from "formik";
import * as Yup from "yup";
import InputField from "../InputField/InputField";

function ThanhToan() {
  const { orderAddress } = useContext(Context);

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
          <div className="w-[70%] h-[100px] m-[auto] flex justify-between items-start">
            <div>
              <h1>Thông tin người dùng</h1>
              <FastField
                name="name"
                component={InputField}
                placeholder="Nhập tên khách hàng"
                label="Tên khách hàng*"
                type="text"
              />

              <FastField
                name="email"
                component={InputField}
                //prop truyen vao input field
                label="Email"
                type="email"
                placeholder="Nhập địa chỉ email của bạn"
              />
              <span className="mt-[-10px] block text-xs font-bold">Kiểm tra đơn hàng ở hộp thư đến hoặc thư mục spam</span>

              <FastField
                name="phone"
                component={InputField}
                //prop truyen vao input field
                label="Số điện thoại*"
                
                placeholder="Nhập số điện thoại"
              />
            </div>
          </div>
        </div>
        <div className="w-[20%]"></div>
      </div>
    </Formik>
  );
}

export default ThanhToan;
