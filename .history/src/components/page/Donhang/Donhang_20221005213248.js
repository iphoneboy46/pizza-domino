import React from 'react'

function Donhang() {
  return (
    <div className="EVoucher-content">
      <div className="pt-2 solid border-2 border-[#717273] w-[730px] h-[262px] m-auto rounded-[20px]">
        <div className="w-[712px] h-[244px] bg-[#f2f4f8] m-auto rounded-[20px] px-[40px]">
          <h1 className="text-2xl font-semibold pt-[20px]">Bạn có mã E-voucher tại Domino's Pizza?</h1>
          <span className="text-[14px] mt-[15px] block font-medium">Nhập mã E-voucher của bạn ở khung dưới đây để được ưu đãi</span>
          <form action="">
            <input className="p-3 solid text-[#495057] font-semibold w-[414px] mt-10 rounded-l-lg focus:border-2  focus:border-[#80bdff] focus:outline-[0] focus:shadow-[0_0_1.2rem_rgb(0,123,255,25%)]" type="text" placeholder='Nhập mã E-voucher' />
            <button className="bg-[#0078ae] py-3 px-5 rounded-r-lg focus:border-2  focus:border-[#80bdff] focus:outline-[0] focus:shadow-[0_0_1.2rem_rgb(0,123,255,25%)]">
              <span className="text-sm text-white font-semibold">Áp dụng</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Donhang