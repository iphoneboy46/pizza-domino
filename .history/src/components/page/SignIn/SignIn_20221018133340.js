import { FastField, Form, Formik } from "formik";
import React from "react";
import InputField from "../InputField/InputField";
import "./SignIn.css";

function SignIn() {
  return (
    <Formik>
      {(formikProps) => {

        const {value,errors,touched} = formikProps;



        return (
          <Form className="mt-[30px] px-[40px] z-[99999]">
            <FastField
              name="email"
              component={InputField}
              label = "email"
            />
            <div className="flex flex-col mb-5">
              <h1 className="text-[#0F80B3] mb-3 font-bold" htmlFor="email">
                Email
              </h1>
              <input
                className="email w-[100%] border-[#CED4DA] border-[1px] px-2 py-2 rounded"
                type="email"
                placeholder="Enter email"
                name="email"
                id="email"
              />
            </div>
            <div className="flex flex-col mb-5">
              <h1
                className="text-[#0F80B3] mb-3 font-bold :before:width:0"
                htmlFor="password"
              >
                Password
              </h1>
              <input
                className="pass-word w-[100%] border-[#CED4DA] border-[1px] px-2 py-2 rounded"
                type="text"
                placeholder="Enter password"
                name="password"
                id="password"
              />
            </div>
            <div>
              <button className="w-[100%] bg-[#E31837] py-2 text-white font-bold rounded">
                Đăng nhâp
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default SignIn;
