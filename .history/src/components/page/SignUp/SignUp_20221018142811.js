import { FastField, Form, Formik } from 'formik';
import React from 'react'
import * as Yup from 'yup';
import InputField from '../InputField/InputField';

function SignUp() {
  const initialValues ={
    name:'',
    phone:'',
    email: '',
    password: ''
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Vui lòng nhập họ và tên của bạn!'),
    email: Yup.string().email().required('Vui lòng nhập địa chỉ email của bạn!'),
    password: Yup.string().required('Vui lòng nhập mật khẩu của bạn!')
  })

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values)=>{
        console.log(values)
      }}
    >
      {(formikProps) => {
        const {values,errors,touched} = formikProps;
        console.log({values,errors,touched})

        return (
          <Form className="mt-[30px] px-[40px] z-[99999]">
          <FastField
              name="name"
              component={InputField}
              
              //prop truyen vao input field
              label = "Họ và tên của bạn"
              type="text"
              placeholder = "Vui lòng nhập họ và tên của bạn!"
              
            />
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
              <button type="submit" className="w-[100%] bg-[#E31837] py-2 text-white font-bold rounded">
                Đăng nhâp
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default SignUp