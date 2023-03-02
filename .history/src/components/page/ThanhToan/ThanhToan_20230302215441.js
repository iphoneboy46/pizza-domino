import React, {
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import Context from "../../Store/Context";
import { FastField, Form, Formik } from "formik";
import * as Yup from "yup";
import InputField2 from "../InputField/InputField2";
import "./ThanhToan.css";
import Select from "react-select";
import { options } from "./Options";

function ThanhToan() {
  const { orderAddress, menuOrders, account, ghiChu, setGhiChu, listDonHang } =
    useContext(Context);
  const [checked, setChecked] = useState(1);
  const [checkedPay, setCheckedPay] = useState(6);
  const [isChecked, setIsChecked] = useState(false);
  const [checkBox, setCheckBox] = useState(false);
  const [name, setName] = useState(account.displayName ?? "");
  const [isName, setIsName] = useState(false);
  const [email, setEmail] = useState(account.email ?? "");
  const [isEmail, setIsEmail] = useState(false);

  const [phone, setPhone] = useState("");
  const [isPhone, setIsPhone] = useState(false);
  const [isPhoneCheckNumber, setIsPhoneCheckNumber] = useState(false);
  const [isPhoneCheckNumberFirst0, setIsPhoneCheckNumberFirst0] =
    useState(false);

  const [isPhoneCheckNumberMax, setIsPhoneCheckNumberMax] = useState(false);

  const [nameCompany, setNameCompany] = useState("");
  const [isNameCompany, setIsNameCompany] = useState(false);

  const [address, setAddress] = useState("");
  const [isAddress, setIsAddress] = useState(false);

  const [maSoThue, setMaSoThue] = useState("");
  const [isMaSoThue, setIsMaSoThue] = useState(false);
  const [isMaSoThueNumber, setIsMaSoThueNumber] = useState(false);

  const [emailDienTu, setEmailDienTu] = useState("");
  const [isEmailDienTu, setIsEmailDienTu] = useState(false);
  const [isEmailDienTuCheck, setIsEmailDienTuCheck] = useState(false);
  const [isBtn, setIsBtn] = useState(false);
  const [timeOp, setTimeOp] = useState();

  const [datHang, setDatHang] = useState("");
  const [giaoHang, setGiaoHang] = useState("Đặt hàng - Giao hàng ngay");
  const [atm, setAtm] = useState("");
  const [momo, setMomo] = useState("");
  const [shopee, setShopee] = useState("");
  const [tindung, setTindung] = useState("");
  const [zalo, setZalo] = useState("");
  const [tienmat, setTienmat] = useState("Tiền mặt");
  const [timeGH, setTimeGH] = useState();
  const [hoaDonDo, setHoaDonDo] = useState("");

  const nameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const nameCompanyRef = useRef();
  const addressRef = useRef();
  const maSoThueRef = useRef();
  const emailDienRef = useRef();

  const timer = new Date();
  let time = timer.getHours();
  let minutes = timer.getMinutes();
  let timeFull = time + ":" + minutes;
  let addressClient = orderAddress.address;
  let Delivery = orderAddress.deliver;
  let takeAway = orderAddress.takeAway;

  let listProduct = {
    name: name,
    email: email || "không",
    phone: phone,
    ghichu: ghiChu || "không",
    ptgh: datHang || giaoHang,
    pttt: atm || momo || shopee || tindung || tienmat || zalo,
    htdh: Delivery || takeAway,
    henGio: timeGH || "không",
    xuatHoaDonDo: hoaDonDo || "không",
    nameCompany: nameCompany || "",
    addressCompany: address || "",
    addressClient: addressClient,
    emailDienTu: emailDienTu,
    maSoThue: maSoThue,
    data: menuOrders,
  };

  useEffect(() => {
    document.documentElement.scrollTop = document.body.scrollTop = 0;
  }, []);

  useEffect(() => {
    nameRef.current.onblur = () => {
      if (name.trim() === "") {
        setIsName(true);
      } else {
        setIsName(false);
      }
    };

    nameRef.current.onkeyup = () => {
      if (name.trim() === "") {
        setIsName(true);
      } else {
        setIsName(false);
      }
    };

    emailRef.current.onblur = () => {
      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (email.match(regex) || email === "") {
        setIsEmail(false);
      } else {
        setIsEmail(true);
      }
    };

    phoneRef.current.onblur = () => {
      if (phone.trim() === "") {
        setIsPhone(true);
        setIsPhoneCheckNumber(false);
        setIsPhoneCheckNumberMax(false);
        setIsPhoneCheckNumberFirst0(false);
      } else if (isNaN(phone) && phone.length >= 1) {
        setIsPhoneCheckNumber(true);
        setIsPhone(false);
      } else if (isNaN(phone) || phone.length < 2 || phone.length !== 10) {
        setIsPhoneCheckNumberMax(true);
        setIsPhone(false);
      } else {
        setIsPhone(false);
        setIsPhoneCheckNumber(false);
        setIsPhoneCheckNumberMax(false);
        setIsPhoneCheckNumberFirst0(false);
      }
    };

    phoneRef.current.onkeyup = () => {
      if (phone.trim() === "") {
        setIsPhone(true);
        setIsPhoneCheckNumber(false);
        setIsPhoneCheckNumberMax(false);
        setIsPhoneCheckNumberFirst0(false);
      } else if (phone.charAt(0) !== "0") {
        setIsPhoneCheckNumberFirst0(true);
        setIsPhoneCheckNumber(false);
        setIsPhoneCheckNumberMax(false);
      } else if (isNaN(phone) && phone.length > 0) {
        setIsPhoneCheckNumber(true);
        setIsPhone(false);
      } else if (typeof phone !== "a-z A-Z" && phone.length > 0) {
        setIsPhoneCheckNumber(false);
        setIsPhone(false);
      } else if (isNaN(phone) || phone.length < 2 || phone.length !== 10) {
        setIsPhoneCheckNumberMax(true);
        setIsPhone(false);
      } else {
        setIsPhone(false);
        setIsPhoneCheckNumber(false);
        setIsPhoneCheckNumberMax(false);
        setIsPhoneCheckNumberFirst0(false);
      }
    };

    if (checkBox) {
      nameCompanyRef.current.onblur = () => {
        if (nameCompany.length < 1) {
          setIsNameCompany(true);
        } else {
          setIsNameCompany(false);
        }
      };

      nameCompanyRef.current.onkeyup = () => {
        if (nameCompany.length < 1) {
          setIsNameCompany(true);
        } else {
          setIsNameCompany(false);
        }
      };

      addressRef.current.onblur = () => {
        if (address.length < 1) {
          setIsAddress(true);
        } else {
          setIsAddress(false);
        }
      };

      addressRef.current.onkeyup = () => {
        if (address.length < 1) {
          setIsAddress(true);
        } else {
          setIsAddress(false);
        }
      };

      maSoThueRef.current.onblur = () => {
        if (maSoThue.length < 1) {
          setIsMaSoThue(true);
          setIsMaSoThueNumber(false);
        } else if (isNaN(maSoThue) && maSoThue.length >= 1) {
          setIsMaSoThueNumber(true);
          setIsMaSoThue(false);
        } else {
          setIsMaSoThueNumber(false);
          setIsMaSoThue(false);
        }
      };

      maSoThueRef.current.onkeyup = () => {
        if (maSoThue.length < 1) {
          setIsMaSoThue(true);
          setIsMaSoThueNumber(false);
        } else if (isNaN(maSoThue) && maSoThue.length >= 1) {
          setIsMaSoThueNumber(true);
          setIsMaSoThue(false);
        } else {
          setIsMaSoThueNumber(false);
          setIsMaSoThue(false);
        }
      };

      emailDienRef.current.onblur = () => {
        var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (emailDienTu.length < 1) {
          setIsEmailDienTu(true);
        } else if (emailDienTu.match(regex)) {
          setIsEmailDienTuCheck(false);
        } else {
          setIsEmailDienTuCheck(true);
          setIsEmailDienTu(false);
        }
      };

      emailDienRef.current.onkeyup = () => {
        var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (emailDienTu !== "") {
          setIsEmailDienTuCheck(true);
        } else if (emailDienTu.match(regex)) {
          setIsEmailDienTuCheck(false);
        } else {
          setIsEmailDienTuCheck(true);
          setIsEmailDienTu(false);
        }
      };
    }
  });

  useEffect(() => {
    if (checkBox === true) {
      if (
        checkBox === true &&
        isName === false &&
        name !== "" &&
        isPhone === false &&
        phone !== "" &&
        isPhoneCheckNumber === false &&
        isPhoneCheckNumberFirst0 === false &&
        isEmail === false &&
        isNameCompany === false &&
        nameCompany !== "" &&
        isAddress === false &&
        address !== "" &&
        isEmailDienTu === false &&
        isEmailDienTuCheck === false &&
        isMaSoThue === false &&
        maSoThue !== "" &&
        isMaSoThueNumber === false
      ) {
        setIsBtn(true);
      } else {
        setIsBtn(false);
      }
    } else {
      if (
        checkBox === false &&
        isName === false &&
        name !== "" &&
        isPhone === false &&
        phone !== "" &&
        isPhoneCheckNumber === false &&
        isPhoneCheckNumberFirst0 === false &&
        isEmail === false
      ) {
        setIsBtn(true);
      } else {
        setIsBtn(false);
      }
    }
  });

  useEffect(() => {
    let optionFilter = options.filter((op) => {
      return op.value >= timeFull;
    });

    setTimeOp(optionFilter);
  }, []);

  const handleChecked = (id) => {
    setChecked(id);
    if (id === 2) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  };

  const handleCheckedPay = (id) => {
    setCheckedPay(id);
  };

  const handleCheckBox = (id) => {
    setCheckBox(id);
  };

  const handleAdd = () => {};

  return (
    <div className="relative">
      <div className="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[30%] bg-[#F2F4F8] z-50 h-[300px] flex justify-center items-center flex-col px-10">
        <h1 className="text-xl font-bold ">Thông báo</h1>
        <h2 className="text-base font-bold mb-5 text-center">
          Bạn đã chọn {takeAway ? takeAway + "tại cửa hàng" : ""}{" "}
          {Delivery ? Delivery + " tại địa chỉ" : ""} {addressClient}
        </h2>

        <h1 className="text-base font-bold text-center mb-5">
          Vui lòng chọn Tiếp tục để xác nhận thông tin, hoặc chọn Quay lại để
          thay đổi.
        </h1>
        <div className="w-[100%] flex justify-center items-center">
          <button className="px-[15%] py-3  bg-[red] text-center">Quay lại</button>
          <button className="px-[15%] py-3  bg-[#E31837] text-center text-white font-bold rounded-md">Tiếp tục</button>
        </div>
      </div>
      <div className="flex lg:flex-row lg:justify-between md:flex-col flex-col  h-[auto] w-[100%] ">
        <div className="pt-[80px] lg:w-[80%] md:w-[100%] w-[100%] overflow-hidden">
          <div className="bg-[#e3f4fc] lg:flex md:flex  hidden justify-between items-center">
            <div className="flex items-center  p-4 lg:ml-[100px] md:ml-100px text-[#6a6b6c] font-semibold">
              <h1 className="mr-5">Bạn đang chọn:</h1>
              <h1 className="mr-5 text-[#de1736]">
                {orderAddress.takeAway || orderAddress.deliver}
              </h1>
              <h1>{orderAddress.address}</h1>
            </div>
          </div>
          <div className="lg:w-[60%] lg:flex-row md:flex-row md:w-[80%] w-[100%] flex-col  m-[auto] flex lg:justify-between md:justify-between lg:items-start md:items-start justify-center items-center p-3">
            <div className="flex-1 lg:mr-10 md:mr-10">
              <h1 className="font-bold text-xl mb-2">Thông tin người dùng</h1>
              <label className="font-bold block mb-2" htmlFor="name">
                Tên khách hàng *
              </label>

              <input
                name="name"
                ref={nameRef}
                placeholder="Nhập tên khách hàng!"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="email w-[100%]  border-[#CED4DA] border-[1px] px-2 py-2 rounded mb-1"
              />
              {isName && (
                <span className="text-xs text-[red] font-bold">
                  Vui lòng nhập tên khách hàng!
                </span>
              )}

              <label className="font-bold block mb-2" htmlFor="email">
                Email
              </label>

              <input
                name="email"
                value={email}
                ref={emailRef}
                placeholder="Nhập Email "
                className="email w-[100%]  border-[#CED4DA] border-[1px] px-2 py-2 rounded mb-2"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              {isEmail && (
                <span className="text-xs text-[red] font-bold block">
                  Vui lòng nhập email hợp lệ!
                </span>
              )}

              <span className="mt-[-10px] block text-xs font-bold mb-5">
                Kiểm tra đơn hàng ở hộp thư đến hoặc thư mục spam
              </span>

              <label className="font-bold block mb-2" htmlFor="email">
                Số điện thoại *
              </label>

              <input
                name="phone"
                placeholder="Nhập số điện thoại"
                ref={phoneRef}
                value={phone}
                className="email w-[100%]  border-[#CED4DA] border-[1px] px-2 py-2 rounded mb-1"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
              {isPhone && (
                <span className="text-xs text-[red] font-bold block">
                  Vui lòng nhập số điện thoại!
                </span>
              )}
              {isPhoneCheckNumber && (
                <span className="text-xs text-[red] font-bold block">
                  Số điện thoại phải là số
                </span>
              )}
              {isPhoneCheckNumberMax && (
                <span className="text-xs text-[red] font-bold block">
                  Độ dài số điện thoại hợp lệ là 10 số!
                </span>
              )}
              {isPhoneCheckNumberFirst0 && (
                <span className="text-xs text-[red] font-bold block">
                  Số điện thoại bắt đầu phải là số 0
                </span>
              )}
            </div>
            <div className="flex-1 lg:ml-10 md:ml-10">
              <h1 className="font-bold text-xl mb-2">Thông tin đặt hàng</h1>
              <label className="font-bold block mb-2" htmlFor="name">
                Ghi chú
              </label>
              <input
                name="ghichu"
                value={ghiChu}
                onChange={(e) => {
                  setGhiChu(e.target.value);
                }}
                placeholder="Nhập ghi chú"
                className="email w-[100%]  border-[#CED4DA] border-[1px] px-2 py-2 rounded mb-3"
              />
              <div>
                <div className="dat-thanh-toan flex items-center mb-5 border-b-[1px] border-[#CDCDCE] pb-5">
                  <input
                    className="input-thanh-toan"
                    id="dathang"
                    type="radio"
                    value="Đặt hàng - Giao hàng ngay"
                    checked={checked === 1}
                    onChange={(e) => {
                      handleChecked(1);
                      setDatHang(e.target.value);
                    }}
                  />

                  <label for="dathang"></label>
                  <p
                    className={
                      checked === 1
                        ? "ml-5 text-[black] font-bold"
                        : "text-[#6c757d] ml-5 font-bold"
                    }
                  >
                    Đặt hàng - Giao hàng ngay
                  </p>
                </div>
                <div className="dat-thanh-toan flex items-center w-[100%] my-5 border-b-[1px] border-[#CDCDCE] pb-5">
                  <input
                    className="input-thanh-toan"
                    id="giaohang"
                    type="radio"
                    value="Giao hàng - Nhận hàng hẹn giờ"
                    checked={checked === 2}
                    onChange={(e) => {
                      handleChecked(2);
                      setGiaoHang(e.target.value);
                    }}
                  />

                  <label for="giaohang"></label>
                  <p
                    className={
                      checked === 2
                        ? "ml-5 text-[black] font-bold"
                        : "text-[#6c757d] ml-5 font-bold"
                    }
                  >
                    Giao hàng - Nhận hàng hẹn giờ
                  </p>
                </div>
                {isChecked && (
                  <div className="w-[100%]">
                    <Select
                      placeholder="Chọn giờ nhận hàng"
                      options={timeOp}
                      onChange={(e) => {
                        setTimeGH(e.value);
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="lg:w-[60%] md:w-[80%] w-[100%] m-[auto] p-3">
            <h1 className="font-bold text-xl mb-2">Phương thức thanh toán</h1>
            <div className="w-[100%] flex lg:flex-row justify-between items-center md:flex-row  flex-col px-5 py-2">
              <div className="w-[100%] lg:mr-5 md:mr-5">
                <div className="dat-thanh-toan flex items-center w-[100%] mb-3 border-b-[1px] border-[#CDCDCE] pb-3">
                  <input
                    className="input-thanh-toan"
                    id="atm"
                    type="radio"
                    value="ATM"
                    checked={checkedPay === 1}
                    onChange={(e) => {
                      handleCheckedPay(1);
                      setAtm(e.target.value);
                    }}
                  />

                  <label for="atm"></label>
                  <p
                    className={
                      checkedPay === 1
                        ? "ml-5 text-[black] font-bold flex items-center"
                        : "text-[#6c757d] ml-5 font-bold flex items-center"
                    }
                  >
                    <img
                      className="w-[40px] h-[40px] mr-5"
                      src="https://img.dominos.vn/icon-payment-method-atm.png"
                      alt=""
                    />{" "}
                    ATM
                  </p>
                </div>
                <div className="dat-thanh-toan flex items-center w-[100%] mb-3 border-b-[1px] border-[#CDCDCE] pb-3">
                  <input
                    className="input-thanh-toan"
                    id="momo"
                    type="radio"
                    value="Ví MoMo"
                    checked={checkedPay === 2}
                    onChange={(e) => {
                      handleCheckedPay(2);
                      setMomo(e.target.value);
                    }}
                  />

                  <label for="momo"></label>
                  <p
                    className={
                      checkedPay === 2
                        ? "ml-5 text-[black] font-bold flex items-center"
                        : "text-[#6c757d] ml-5 font-bold flex items-center"
                    }
                  >
                    <img
                      className="w-[40px] h-[40px] mr-5"
                      src="https://img.dominos.vn/icon-payment-method-mo-mo.png"
                      alt=""
                    />{" "}
                    Ví MoMo
                  </p>
                </div>
                <div className="dat-thanh-toan flex items-center w-[100%] mb-3 border-b-[1px] border-[#CDCDCE] pb-3">
                  <input
                    className="input-thanh-toan"
                    id="shopee"
                    type="radio"
                    value="Ví ShopeePay"
                    checked={checkedPay === 3}
                    onChange={(e) => {
                      handleCheckedPay(3);
                      setShopee(e.target.value);
                    }}
                  />

                  <label for="shopee"></label>
                  <p
                    className={
                      checkedPay === 3
                        ? "ml-5 text-[black] font-bold flex items-center"
                        : "text-[#6c757d] ml-5 font-bold flex items-center"
                    }
                  >
                    <img
                      className="w-[40px] h-[40px] mr-5"
                      src="https://img.dominos.vn/shoppepay.png"
                      alt=""
                    />{" "}
                    Ví ShopeePay
                  </p>
                </div>
              </div>
              <div className="w-[100%] lg:ml-5 md:mr-5">
                <div className="dat-thanh-toan flex items-center w-[100%] mb-3 border-b-[1px] border-[#CDCDCE] pb-3">
                  <input
                    className="input-thanh-toan"
                    id="tindung"
                    type="radio"
                    value="Thẻ tín dụng / ghi nợ"
                    checked={checkedPay === 4}
                    onChange={(e) => {
                      handleCheckedPay(4);
                      setTindung(e.target.value);
                    }}
                  />

                  <label for="tindung"></label>
                  <p
                    className={
                      checkedPay === 4
                        ? "ml-5 text-[black] font-bold flex items-center"
                        : "text-[#6c757d] ml-5 font-bold flex items-center"
                    }
                  >
                    <img
                      className="w-[40px] h-[40px] mr-5"
                      src="https://img.dominos.vn/icon-payment-method-credit.png"
                      alt=""
                    />{" "}
                    Thẻ tín dụng / ghi nợ
                  </p>
                </div>
                <div className="dat-thanh-toan flex items-center w-[100%] mb-3 border-b-[1px] border-[#CDCDCE] pb-3">
                  <input
                    className="input-thanh-toan"
                    id="zalo"
                    type="radio"
                    value="Ví ZaloPay"
                    checked={checkedPay === 5}
                    onChange={(e) => {
                      handleCheckedPay(5);
                      setZalo(e.target.value);
                    }}
                  />

                  <label for="zalo"></label>
                  <p
                    className={
                      checkedPay === 5
                        ? "ml-5 text-[black] font-bold flex items-center"
                        : "text-[#6c757d] ml-5 font-bold flex items-center"
                    }
                  >
                    <img
                      className="w-[40px] h-[40px] mr-5"
                      src="https://img.dominos.vn/icon-payment-method-zalo-pay.png"
                      alt=""
                    />{" "}
                    Ví ZaloPay
                  </p>
                </div>
                <div className="dat-thanh-toan flex items-center w-[100%] mb-3 border-b-[1px] border-[#CDCDCE] pb-3">
                  <input
                    className="input-thanh-toan"
                    id="tienmat"
                    type="radio"
                    value="Tiền mặt"
                    checked={checkedPay === 6}
                    onChange={(e) => {
                      handleCheckedPay(6);
                      setTienmat(e.target.value);
                    }}
                  />

                  <label for="tienmat"></label>
                  <p
                    className={
                      checked === 6
                        ? "ml-5 text-[black] font-bold flex items-center"
                        : "text-[#6c757d] ml-5 font-bold flex items-center"
                    }
                  >
                    <img
                      className="w-[40px] h-[40px] mr-5"
                      src="https://img.dominos.vn/cash.png"
                      alt=""
                    />{" "}
                    Tiền mặt
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[60%] md:w-[80%] m-[auto] p-5">
            <div className="flex items-center mb-3">
              <input
                onChange={(e) => {
                  handleCheckBox(!checkBox);
                  setHoaDonDo(e.target.value);
                }}
                value="Xuất hóa đơn đỏ"
                type="checkbox"
                checked={checkBox}
              />{" "}
              <h1 className="text-xl font-bold ml-3">Xuất hóa đơn đỏ</h1>
            </div>
            {checkBox && (
              <div className="flex lg:justify-between lg:items-start lg:flex-row md:flex-col flex-col w-[100%]">
                <div className="w-[100%] lg:mr-5">
                  <label className="font-bold block mb-2" htmlFor="nameCompany">
                    Tên công ty *
                  </label>
                  <input
                    name="nameCompany"
                    ref={nameCompanyRef}
                    placeholder="Nhập tên công ty"
                    value={nameCompany}
                    className="email w-[100%]  border-[#CED4DA] border-[1px] px-2 py-2 rounded mb-1"
                    onChange={(e) => {
                      setNameCompany(e.target.value);
                    }}
                  />

                  {isNameCompany && (
                    <span className="text-xs text-[red] font-bold">
                      Vui lòng nhập tên công ty
                    </span>
                  )}

                  <label className="font-bold block mb-2" htmlFor="address">
                    Địa chỉ *
                  </label>
                  <input
                    name="address"
                    ref={addressRef}
                    placeholder="Nhập địa chỉ công ty"
                    value={address}
                    className="email w-[100%]  border-[#CED4DA] border-[1px] px-2 py-2 rounded mb-1"
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                  />
                  {isAddress && (
                    <span className="text-xs text-[red] font-bold">
                      Vui lòng nhập địa chỉ công ty
                    </span>
                  )}
                </div>
                <div className="w-[100%] lg:ml-5">
                  <div className="w-[100%]">
                    <label className="font-bold block mb-2" htmlFor="masothue">
                      Mã số thuế *
                    </label>
                    <div className="flex w-[100%]">
                      <div className="w-[80%]">
                        <input
                          placeholder="Nhập mã số thuế"
                          ref={maSoThueRef}
                          name="masothue"
                          value={maSoThue}
                          className="email w-[100%]  border-[#CED4DA] border-[1px] px-2 py-2 rounded mb-1"
                          onChange={(e) => {
                            setMaSoThue(e.target.value);
                          }}
                        />
                        {isMaSoThue && (
                          <span className="text-xs text-[red] font-bold block">
                            Vui lòng nhập mã số thuế
                          </span>
                        )}
                        {isMaSoThueNumber && (
                          <span className="text-xs text-[red] font-bold block">
                            Mã số thuế phải là số
                          </span>
                        )}
                      </div>
                      <div className="w-[20%] flex justify-center items-center font-bold bg-[#E31837] h-[41px] text-white cursor-pointer select-none text-center">
                        Kiểm tra
                      </div>
                    </div>
                  </div>

                  <label className="font-bold block mb-2" htmlFor="emailDienTu">
                    Email nhận hóa đơn điện tử *
                  </label>
                  <input
                    name="emailDienTu"
                    type="email"
                    ref={emailDienRef}
                    placeholder="Nhập Email nhận hóa đơn điện tử"
                    value={emailDienTu}
                    className="email w-[100%]  border-[#CED4DA] border-[1px] px-2 py-2 rounded mb-1"
                    onChange={(e) => {
                      setEmailDienTu(e.target.value);
                    }}
                  />
                  {isEmailDienTu && (
                    <span className="text-xs text-[red] font-bold block">
                      Vui lòng nhập Email nhận hóa đơn điện tử
                    </span>
                  )}
                  {isEmailDienTuCheck && (
                    <span className="text-xs text-[red] font-bold block">
                      Vui lòng nhập Email hợp lệ
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
          {isBtn ? (
            <button
              className="block m-auto font-bold text-xl uppercase bg-[#E31837] w-[400px] p-5 text-center text-white mb-5 rounded-xl"
              onClick={handleAdd}
            >
              Hoàn tất thanh toán
            </button>
          ) : (
            <div className="m-auto font-bold text-xl uppercase bg-[#E31837] w-[400px] p-5 text-center text-white mb-5 rounded-xl opacity-70 cursor-not-allowed">
              Hoàn tất thanh toán
            </div>
          )}
        </div>

        <div className="lg:w-[20%] md:w-[100%] w-[100%] pt-[80px] p-5 border-l-2 border-[#DFE4EA]">
          <div className="py-5">
            {menuOrders.map((menu) => {
              return (
                <>
                  <div className="border-b-[1px] border-[#DFE4EA] mb-5">
                    <div className="flex justify-between items-start mb-5">
                      <span className="font-bold">{menu.quantity}</span>
                      <span className="font-bold">x</span>
                      <h1 className="font-bold w-[50%] text-sm text-start">
                        {menu.name}
                      </h1>
                      <h1 className="font-bold text-sm">{menu.totalP}.000 đ</h1>
                    </div>
                    <div className="flex justify-between items-start">
                      <div className="w-[5%]"></div>
                      <div className="lg:w-[30%] md:w-[35%] w-[30%] pb-8">
                        <h6 className="font-bold text-xs text-[#717273]">
                          {menu.base}
                        </h6>
                        <h6 className="font-bold text-xs text-[#717273]">
                          {menu.size}
                        </h6>
                        <h6 className="font-bold text-xs text-[#717273]">
                          {menu.border9}
                        </h6>
                        <h6 className="font-bold text-xs text-[#717273]">
                          {menu.border12}
                        </h6>
                        <h6 className="font-bold text-xs text-[#717273]">
                          {menu.more9}
                        </h6>
                        <h6 className="font-bold text-xs text-[#717273]">
                          {menu.more12}
                        </h6>
                      </div>
                      <div className="w-[100px] h-[50px] rounded-md">
                        <img
                          className="w-[100%] h-[100%] rounded-md"
                          src={menu.image}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThanhToan;
