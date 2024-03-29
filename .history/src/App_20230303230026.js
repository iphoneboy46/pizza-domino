import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { publicRoutes } from "./routes/Routes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {  useContext, useEffect, useState } from "react";
import Context from "./components/Store/Context"
import Login from "./components/page/Login/Login";



function App() {

  const {setbtnExits, account, setAccount } = useContext(Context);

  const handleClick =()=>{
    const menuMb = document.querySelector(".menu-Mobile");
    menuMb.style.left = "-100%";
    setbtnExits(true);
    document.body.style.overflow = "auto";
  }

  const handleClickDN =()=>{
    const loginForm = document.querySelector(".login-form");
    const content = document.querySelector(".content");
    document.body.style.overflow = "hidden";

    content.classList.add("modal");
    loginForm.style.top = `50%`;
    loginForm.style.opacity = "1";

    const menuMb = document.querySelector(".menu-Mobile");
    menuMb.style.left = "-100%";
    setbtnExits(true);
    document.body.style.overflow = "auto";
  }

  const handleLog = () =>{
    setAccount([])

    const menuMb = document.querySelector(".menu-Mobile");
    menuMb.style.left = "-100%";
    setbtnExits(true);
    document.body.style.overflow = "auto";
  }
 

  return (
    <div className="App relative">
     
      <BrowserRouter>
        <Header />
        <div id="mb"></div>
        <div className="menu-Mobile absolute top-[50px] h-[100vh] left-[-100%] bottom-0 right-0 bg-[#004666] z-[3000] w-[100%] py-10 transition-all duration-500 linear lg:hidden md:hidden sm:block">
          <ul className="text-white font-semibold uppercase flex flex-col justify-between px-2 h-[80vh]">
            { account.displayName ? 
            <li onClick={handleLog}>
              đăng xuất
            </li>
            :
            <li onClick={handleClickDN}>
              <Link to="">Đăng nhập / Tạo tài khoản</Link>
            </li>

            }
            <li onClick={handleClick}>
              <Link to="/EVoucher">Mã e-voucher</Link>
            </li>
            <li onClick={handleClick}>
              <Link to="/Khuyenmai">Khuyến mãi</Link>
            </li>
            <li onClick={handleClick}>
              <Link to="/Thucdon">Thực đơn</Link>
            </li>
            <li onClick={handleClick}>
              <Link to="/Donhang">Theo dõi đơn hàng</Link>
            </li>
            <li onClick={handleClick}>
              <Link to="">Cam kết</Link>
            </li>
            <li onClick={handleClick}>
              <Link to="">Lịch sử</Link>
            </li>
            <li onClick={handleClick}>
              <Link to="">Tuyển dụng</Link>
            </li>
            <li onClick={handleClick}>
              <Link to="">Danh sách cửa hàng</Link>
            </li>
            <li>
              <div className="text-2xl">
                <i class="fa-brands fa-facebook mr-5"></i>
                <i class="fa-brands fa-instagram"></i>
              </div>
            </li>
            <li>
              <div className="flex items-center mr-8">
                <img
                  className="lg:w-[40px] md:w-[50px] h-[40px] md:h-[30px] mr-1"
                  src="https://icons-for-free.com/download-icon-flag+nation+vietnam+icon-1320166242583052832_256.icns"
                  alt="vn"
                />
                <img
                  className="w-[40px] md:w-[50px] h-[40px] md:h-[30px]"
                  src="https://vi.seaicons.com/wp-content/uploads/2017/04/United-Kingdom-Flag-1-icon.png"
                  alt="en"
                />
              </div>
            </li>
          </ul>
        </div>
        <Routes>
          {publicRoutes.map((publicRoute, index) => {
            const Page = publicRoute.component;
            return (
              <Route key={index} path={publicRoute.path} element={<Page />} />
            );
          })}
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
