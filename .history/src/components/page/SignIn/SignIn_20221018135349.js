import { FastField, Form, Formik } from "formik";
import React from "react";
import InputField from "../InputField/InputField";
import "./SignIn.css";

function SignIn() {
  const initialValues ={
    email: '',
    password: ''
  }
  return (
    <Formik
      initialValues={initialValues}
    >
      {(formikProps) => {

        const {values,errors,touched} = formikProps;
        console.log({values,errors,touched})



        return (
          <Form className="mt-[30px] px-[40px] z-[99999]">
            <FastField
              name="email"
              component={InputField}
              
              //prop truyen vao input field
              label = "Email"
              type="email"
              placeholder = "Enter email"
            />
             <FastField
              name="password"
              component={InputField}
              
              //prop truyen vao input field
              label = "Password"
              type="password"
              placeholder = "Enter password"
            />
            <div>
              <input type="submit" className="w-[100%] bg-[#E31837] py-2 text-white font-bold rounded">
                Đăng nhâp
              />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default SignIn;
