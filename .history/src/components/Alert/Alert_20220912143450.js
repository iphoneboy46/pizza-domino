import React from 'react'

function Alert() {
    return (
        <div className="w-[400px] h-[200px] absolute bg-white top-[50%] left-[50%] z-[99999]">
            <div className="btn-exits absolute bg-[#c0142f] p-2 px-4 text-2xl text-white right-0 rounded-tr-md">
                <i class="fa-solid fa-xmark"></i>
            </div>
            <h1 className="font-bold text-center mt-[60px]">Thông báo</h1>
            <h1 className="font-bold text-center ">Vui lòng nhập địa chỉ để tiếp tục mua hàng </h1>
            <button className="bg-[#e31837] w-[100px] text-white font-bold p-3">
                Đã hiểu
            </button>
        </div>
    )
}

export default Alert