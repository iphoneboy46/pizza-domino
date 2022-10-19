import { FastField, Form, Formik } from "formik";
import React, { useContext } from "react";
import InputField from "../InputField/InputField";
import "./SignIn.css";
import Context from "../../Store/Context";
import * as Yup from "yup";
function SignIn() {
  const { account, setAccount, accountDB } = useContext(Context);

  const initialValues = {
    email: "",
    password: "",
  };


  const checkedAccount = () =>{
    console.log(account.email);
    accountDB.map((acc)=>{
      if(acc.email === account.email){
        console.log(123);
      }
    })
  }

  checkedAccount();



  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required("Vui lòng nhập địa chỉ email của bạn!"),
    password: Yup.string().required("Vui lòng nhập mật khẩu!"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        setAccount(values)
      }}
    >
      {(formikProps) => {
        const { values, errors, touched } = formikProps;
        console.log({ values, errors, touched });

        return (
          <Form className="mt-[30px] px-[40px] z-[99999]">
            <FastField
              name="email"
              component={InputField}
              //prop truyen vao input field
              label="Email"
              type="email"
              placeholder="Enter email"
            />
            <FastField
              name="password"
              component={InputField}
              //prop truyen vao input field
              label="Mật khẩu"
              type="password"
              placeholder="Nhập Mật khẩu"
            />
            <div>
              <button
                type="submit"
                className="w-[100%] bg-[#E31837] py-2 text-white font-bold rounded"
              >
                Đăng nhập
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default SignIn;
