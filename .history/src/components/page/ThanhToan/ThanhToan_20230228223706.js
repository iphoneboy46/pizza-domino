import React, { useContext } from "react";
import Context from "../../Store/Context";
import { FastField, Formik } from "formik";
import * as Yup from "yup";


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
    phone: Yup.number().required("Vui lòng nhập số điện thoại!")
  });

  return (
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    >
        <div className="flex justify-between h-[100vh]">
          <div className="pt-[80px] w-[70%]">
            <div className="bg-[#e3f4fc] lg:flex md:flex hidden justify-between items-center">
              <div className="flex items-center  p-4 lg:ml-[100px] md:ml-100px text-[#6a6b6c] font-semibold">
                <h1 className="mr-5">Bạn đang chọn:</h1>
                <h1 className="mr-5 text-[#de1736]">
                  {orderAddress.takeAway || orderAddress.deliver}
                </h1>
                <h1>{orderAddress.address}</h1>
              </div>
            </div>
            <div className="w-[80%] h-[100px] bg-yellowcustom m-[auto] flex justify-between items-start">
                <div>
                    <h1>Thông tin người dùng</h1>
                    <h2>Tên khách hàng*</h2>
                    <FastField
                        name="name"
                        placeholder="Nhập tên khách hàng"
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
