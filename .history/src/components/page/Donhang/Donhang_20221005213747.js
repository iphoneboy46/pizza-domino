import React from 'react'
import { Link } from 'react-router-dom'

function Donhang() {
  return (
    <div className="flex items-center w-[100%] h-[100vh] justify-center">
      <div className="w-[20%] h-[100%]">
        <img className="w-[100%] h-[100%]" src="https://dominos.vn/img/stock-stracking.png" alt="" />
      </div>
      <div>
        <h1>Theo Dõi Đơn Hàng - Domino's Pizza Việt Nam</h1>
        <div className="bg-[white] flex justify-center p-[32px] rounded w-[100%] m-auto">
          <input
            type="text"
            className="py-[12px] px-[8px] lg:w-[80%] md:w-[80%] outline-[#80bdff] text-[#495057] font-extrabold rounded-l-lg inputAddress"
            placeholder="Vui lòng nhập địa chỉ nhận hàng"
            onChange={(e) => {
            
            }}
          
          />
          <Link
            to="/thucdon"
            className="btnSubAddress bg-[#0078ae] opacity-[0.4] pointer-events-none py-[12px] px-[16px] text-white rounded-r-lg "
          >
            <i class="fa-solid fa-magnifying-glass"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Donhang