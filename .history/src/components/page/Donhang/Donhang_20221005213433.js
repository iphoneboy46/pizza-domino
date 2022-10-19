import React from 'react'

function Donhang() {
  return (
    <div className="">
      <div>
        <img src="https://dominos.vn/img/stock-stracking.png" alt="" />
      </div>
      <div>
        <h1>Theo Dõi Đơn Hàng - Domino's Pizza Việt Nam</h1>
        <input
            type="text"
            className="py-[12px] px-[8px] lg:w-[80%] md:w-[80%] outline-[#80bdff] text-[#495057] font-extrabold rounded-l-lg inputAddress"
            placeholder="Vui lòng nhập địa chỉ nhận hàng"
            onChange={(e) => {
              
            }}
            
          />
      </div>
    </div>
  )
}

export default Donhang