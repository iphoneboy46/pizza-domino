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

  const checkedAccount = () => {
    console.log(account.email);
    console.log(account.password);
  };

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
        setAccount(values);
        accountDB.map((acc) => {
          if (
            acc.email === account.email &&
            acc.password === account.password
          ) {
            const alertSignin = document.querySelector(".alert-signIn");
            console.log("dang nhap thanh cong");
            const alertSignin = document.querySelector(".alert-signIn");
          } else {
            const alertSignin = document.querySelector(".alert-signIn");
            alertSignin.style.display = "block";
          }
        });
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
              <span class="alert-signIn hidden text-[red] font-bold">
                Tên đăng nhập hoặc mật khẩu không đúng !!!
              </span>
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
