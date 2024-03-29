import { FastField, Form, Formik } from "formik";
import React, { useContext } from "react";
import InputField from "../InputField/InputField";
import "./SignIn.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Context from "../../Store/Context";
import * as Yup from "yup";
import app from "../../../firebase/firebase";
function SignIn() {
  const { setAccount} = useContext(Context);

  const initialValues = {
    email: "",
    password: "",
  };

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
        const email = values.email;
        const password = values.password;
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            setAccount(user)
            const success = document.querySelector(".login-success");
            success.style.display = "flex";
            const alertErr = document.querySelector(".alert-signIn");
            alertErr.style.display = "none";

            // ...
          })
          .catch((error) => {
            const alertErr = document.querySelector(".alert-signIn")
            const errorCode = error.code;
            const errorMessage = error.message;
            alertErr.style.display = "block";
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
              <div class="alert-signIn hidden text-[red] font-bold">
                Tên đăng nhập hoặc mật khẩu không đúng !!!
              </div>
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
