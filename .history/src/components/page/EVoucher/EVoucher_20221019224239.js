import React from 'react'
import './EVoucher.css'

function EVoucher() {
  return (
    <div className="EVoucher-content">
      <div className="p-2 solid border-2 border-[#717273] lg:w-[30%] md:w-[80%] w-[100%] h-[60%] m-auto rounded-[20px]">
        <div className="lg:w-[100%] md:w-[100%] h-[350px] bg-[#f2f4f8] m-auto rounded-[20px] px-[40px]">
          <h1 className="text-2xl font-semibold pt-[20px]">Bạn có mã E-voucher tại Domino's Pizza?</h1>
          <span className="text-[14px] mt-[15px] block font-medium">Nhập mã E-voucher của bạn ở khung dưới đây để được ưu đãi</span>
          <form action="">
            <input className="p-3 solid text-[#495057] font-semibold w-[80%] mt-10 rounded-l-lg focus:border-2  focus:border-[#80bdff] focus:outline-[0] focus:shadow-[0_0_1.2rem_rgb(0,123,255,25%)]" type="text" placeholder='Nhập mã E-voucher' />
            <button className="bg-[#0078ae] py-3 px-5 rounded-r-lg focus:border-2  focus:border-[#80bdff] focus:outline-[0] focus:shadow-[0_0_1.2rem_rgb(0,123,255,25%)]">
              <span className="text-sm text-white font-semibold">Áp dụng</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EVoucher