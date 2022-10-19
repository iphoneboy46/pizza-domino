import { FastField, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import InputField from "../InputField/InputField";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3Z1DxTD8oa_PUx6aUeio6E0f7CPRb07Q",
  authDomain: "pizza-domino.firebaseapp.com",
  databaseURL: "https://pizza-domino-default-rtdb.firebaseio.com",
  projectId: "pizza-domino",
  storageBucket: "pizza-domino.appspot.com",
  messagingSenderId: "48214603801",
  appId: "1:48214603801:web:54b6b7933e4d08e6745288",
  measurementId: "G-JY0VPMGF5N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function SignUp() {
  const initialValues = {
    name: "",
    phone: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Vui lòng nhập họ và tên của bạn!"),
    phone: Yup.number()
      .integer()
      .max(11)
      .required("Vui lòng nhập số điện thoại của bạn!"),
    email: Yup.string()
      .email()
      .required("Vui lòng nhập địa chỉ email của bạn!"),
    password: Yup.string().required("Vui lòng nhập mật khẩu của bạn!"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formikProps) => {
        const { values, errors, touched } = formikProps;
        console.log({ values, errors, touched });

        return (
          <Form className="mt-[30px] px-[40px] z-[99999]">
            <FastField
              name="name"
              component={InputField}
              //prop truyen vao input field
              label="Họ và tên của bạn"
              type="text"
              placeholder="Vui lòng nhập họ và tên của bạn!"
            />
            <FastField
              name="phone"
              component={InputField}
              //prop truyen vao input field
              label="Số điện thoại"
              type="text"
              placeholder="Vui lòng nhập số điện thoại của bạn!"
            />
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
              label="Password"
              type="password"
              placeholder="Enter password"
            />
            <div>
              <button
                type="submit"
                className="w-[100%] bg-[#E31837] py-2 text-white font-bold rounded"
              >
                Tạo tài khoản
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default SignUp;
