import React from 'react'

function ThanhToan() {
  return (
    <div className="flex justify-between ">
        <div className="">
        <div className="bg-[#e3f4fc] lg:flex md:flex hidden justify-between items-center">
              <div className="flex items-center  p-4 lg:ml-[100px] md:ml-100px text-[#6a6b6c] font-semibold">
                <h1 className="mr-5">Bạn đang chọn:</h1>
                <h1 className="mr-5 text-[#de1736]">
                  {orderAddress.takeAway || orderAddress.deliver}
                </h1>
                <h1>{orderAddress.address}</h1>
              </div>
              <div className="p-5" onClick={handleSelectAddress}>
                <i class="fa-solid fa-pen"></i>
              </div>
            </div>
        </div>
    </div>
  )
}

export default ThanhToan