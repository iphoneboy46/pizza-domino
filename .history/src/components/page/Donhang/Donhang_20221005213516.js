import React from 'react'

function Donhang() {
  return (
    <div className="flex items-center">
      <div>
        <img src="https://dominos.vn/img/stock-stracking.png" alt="" />
      </div>
      <div>
        <h1>Theo Dõi Đơn Hàng - Domino's Pizza Việt Nam</h1>
        <div className="bg-[#fdedef] flex justify-center p-[32px] rounded w-[100%] m-auto">
          <input
            type="text"
            className="py-[12px] px-[8px] lg:w-[80%] md:w-[80%] outline-[#80bdff] text-[#495057] font-extrabold rounded-l-lg inputAddress"
            placeholder="Vui lòng nhập địa chỉ nhận hàng"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            ref={inputRef}
          />
          <Link
            to="/thucdon"
            onClick={handleAddress}
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