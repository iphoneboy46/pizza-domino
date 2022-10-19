import React, { useContext } from 'react';
import './Khuyenmai.css';
import Context from '../../Store/Context';



function Khuyenmai() {

  const { khuyenmai1,khuyenmai2,khuyenmai3 } = useContext(Context);

  return (
    <div class="khuyen-mai pt-[180px]">
      <div class="flex lg:flex-row md:flex-row flex-col m-auto lg:w-[80%] md:w-[80%] w-[100%] mb-8">
        {khuyenmai1.map((km1) => {
          return <>
            <div class="lg:w-[30%] md:w-[30%] w-[100%] lg:h-[425px] md:h-[525px] border-2 border-solid border-[#dfe4ea] rounded-3xl">
              <img class="w-[100%] h-[50%] p-5 m-auto" src={km1.image} alt={km1.name} />
            </div>
            <div class="bg-content border-2 border-solid border-[#dfe4ea] rounded-3xl w-[70%] p-2">
              <div className="py-8 pl-8 lg:pr-[180px] md:pr-[0] bg-white h-[100%] rounded-xl border-r-[10px] border-solid border-[#e31837]">
                <a href="" className="text-[#0078ae] text-4xl font-bold leading-[50px] no-underline hover:underline " >{km1.name}</a>
                <hr className="border-t-[4px] border-[#dfe4ea] w-16 mt-5 mb-3" />
                <p className="font-bold mb-3">{km1.description_1}</p>
                <p className="font-bold">{km1.description_2}</p>
                <div className="flex mt-5">
                  <a href="" className="bg-[#fdedef] p-3 border-2 border-[#f7b5bf] rounded-md text-[#e31837] font-semibold hover:bg-[#c0142f] hover:text-white hover:border-[#b5132c] mr-3">
                    <span>Đặt ngay size M</span>
                  </a>
                  <a href="" className="bg-[#fdedef] p-3 border-2 border-[#f7b5bf] rounded-md text-[#e31837] font-semibold hover:bg-[#c0142f] hover:text-white hover:border-[#b5132c]">
                    <span>Đặt ngay size L</span>
                  </a>
                </div>
              </div>
            </div>
          </>
        })}
      </div>
      <div class="flex m-auto w-[80%] mb-8">
        {khuyenmai2.map((km1) => {
          return <>
            <div class="w-[30%] lg:h-[750px] md:h-[1100px] border-2 border-solid border-[#dfe4ea] rounded-3xl">
              <img class="w-[100%] h-[50%] p-5 m-auto" src={km1.image} alt={km1.name} />
            </div>
            <div class="bg-content border-2 border-solid border-[#dfe4ea] rounded-3xl w-[70%] p-2">
              <div className="py-8 pl-8 lg:pr-[180px] md:pr-[0] bg-white h-[100%] rounded-xl border-r-[10px] border-solid border-[#e31837]">
                <a href="" className="text-[#0078ae] text-4xl font-bold leading-[50px] no-underline hover:underline " >{km1.name}</a>
                <hr className="border-t-[4px] border-[#dfe4ea] w-16 mt-5 mb-3" />
                <p className="font-bold mb-3">{km1.description_1}</p>
                <p className="font-bold mb-3">{km1.description_2}</p>
                <p className="font-bold">{km1.description_3}</p>

                <div className="flex flex-wrap mt-5">
                  <a href="" className="bg-[#fdedef] p-3 border-2 border-[#f7b5bf] rounded-md text-[#e31837] font-semibold hover:bg-[#c0142f] hover:text-white hover:border-[#b5132c] mr-3">
                    <span>02 Favorite (M)</span>
                  </a>
                  <a href="" className="bg-[#fdedef] p-3 border-2 border-[#f7b5bf] rounded-md text-[#e31837] font-semibold hover:bg-[#c0142f] hover:text-white hover:border-[#b5132c] mr-3">
                    <span>02 Premium (M)</span>
                  </a>
                  <a href="" className="bg-[#fdedef] p-3 border-2 border-[#f7b5bf] rounded-md text-[#e31837] font-semibold hover:bg-[#c0142f] hover:text-white hover:border-[#b5132c] mr-3">
                    <span>02 Signature (M)</span>
                  </a>
                  <a href="" className="bg-[#fdedef] p-3 border-2 border-[#f7b5bf] rounded-md text-[#e31837] font-semibold hover:bg-[#c0142f] hover:text-white hover:border-[#b5132c] mr-3 mt-2">
                    <span>01 Favorite (M) + 01 Premium (M)</span>
                  </a>
                  <a href="" className="bg-[#fdedef] p-3 border-2 border-[#f7b5bf] rounded-md text-[#e31837] font-semibold hover:bg-[#c0142f] hover:text-white hover:border-[#b5132c] mr-3 mt-2">
                    <span>01 Signature (M) + 01 Premium (M)</span>
                  </a>
                  <a href="" className="bg-[#fdedef] p-3 border-2 border-[#f7b5bf] rounded-md text-[#e31837] font-semibold hover:bg-[#c0142f] hover:text-white hover:border-[#b5132c] mr-3 mt-2">
                    <span>02 Favorite (L)</span>
                  </a>
                  <a href="" className="bg-[#fdedef] p-3 border-2 border-[#f7b5bf] rounded-md text-[#e31837] font-semibold hover:bg-[#c0142f] hover:text-white hover:border-[#b5132c] mr-3 mt-2">
                    <span>01 Signature (L) + 01 Premium (L)</span>
                  </a>
                  <a href="" className="bg-[#fdedef] p-3 border-2 border-[#f7b5bf] rounded-md text-[#e31837] font-semibold hover:bg-[#c0142f] hover:text-white hover:border-[#b5132c] mr-3 mt-2">
                    <span>02 Signature (L)</span>
                  </a>
                  <a href="" className="bg-[#fdedef] p-3 border-2 border-[#f7b5bf] rounded-md text-[#e31837] font-semibold hover:bg-[#c0142f] hover:text-white hover:border-[#b5132c] mr-3 mt-2">
                    <span>01 Premium (L) + 01 Favorite (L)</span>
                  </a>
                  <a href="" className="bg-[#fdedef] p-3 border-2 border-[#f7b5bf] rounded-md text-[#e31837] font-semibold hover:bg-[#c0142f] hover:text-white hover:border-[#b5132c] mr-3 mt-2">
                    <span>01 Signature (L) + 01 Favorite (L)</span>
                  </a>
                  <a href="" className="bg-[#fdedef] p-3 border-2 border-[#f7b5bf] rounded-md text-[#e31837] font-semibold hover:bg-[#c0142f] hover:text-white hover:border-[#b5132c] mr-3 mt-2">
                    <span>01 Signature (M) + 01 Favorite (M)</span>
                  </a>
                  <a href="" className="bg-[#fdedef] p-3 border-2 border-[#f7b5bf] rounded-md text-[#e31837] font-semibold hover:bg-[#c0142f] hover:text-white hover:border-[#b5132c] mt-2">
                    <span>02 Premium (L)</span>
                  </a>
                </div>
              </div>
            </div>
          </>
        })}
      </div>
      <div class="flex m-auto w-[80%] pb-10">
        {khuyenmai3.map((km3) => {
          return <>
            <div class="w-[30%] lg:h-[450px]  md:h-[525px] border-2 border-solid border-[#dfe4ea] rounded-3xl">
              <img class="w-[100%] h-[50%] p-5 m-auto" src={km3.image} alt={km3.name} />
            </div>
            <div class="bg-content border-2 border-solid border-[#dfe4ea] rounded-3xl w-[70%] p-2">
              <div className="py-8 pl-8 lg:pr-[180px] md:pr-[0] bg-white h-[100%] rounded-xl border-r-[10px] border-solid border-[#e31837]">
                <a href="" className="text-[#0078ae] text-4xl font-bold leading-[50px] no-underline hover:underline " >{km3.name}</a>
                <hr className="border-t-[4px] border-[#dfe4ea] w-16 mt-5 mb-3" />
                <p className="font-bold mb-3">{km3.description_1}</p>
                <p className="font-bold">{km3.description_2}</p>
                <p className="font-bold">{km3.description_3}</p>
                <div className="flex mt-5">
                  <a href="" className="bg-[#fdedef] p-3 border-2 border-[#f7b5bf] rounded-md text-[#e31837] font-semibold hover:bg-[#c0142f] hover:text-white hover:border-[#b5132c] mr-3">
                    <span>Đặt ngay size M</span>
                  </a>
                  <a href="" className="bg-[#fdedef] p-3 border-2 border-[#f7b5bf] rounded-md text-[#e31837] font-semibold hover:bg-[#c0142f] hover:text-white hover:border-[#b5132c]">
                    <span>Đặt ngay size L</span>
                  </a>
                </div>
              </div>
            </div>
          </>
        })}
      </div>
    </div>
  )
}

export default Khuyenmai