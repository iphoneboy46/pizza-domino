import React from 'react'
import { Link } from 'react-router-dom'

function Donhang() {
  return (
    <div className="flex items-center w-[60%] h-[80vh] justify-center m-auto">
      <div className="w-[20%] h-[50%]">
        <img className="w-[100%] h-[100%]" src="https://dominos.vn/img/stock-stracking.png" alt="" />
      </div>
      <div className="w-[80%]">
        <h1 className='font-bold'>Theo Dõi Đơn Hàng - Domino's Pizza Việt Nam</h1>
        <div className="bg-[white] flex justify-center rounded w-[100%] m-auto mt-5">
          <input
            type="text"
            className="py-[12px] px-[8px] lg:w-[100%] md:w-[80%] outline-[#80bdff] text-[#495057] font-extrabold rounded-l-lg "
            placeholder="Nhập số điện thoại của bạn"
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