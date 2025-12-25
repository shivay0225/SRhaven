import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import SideBarMenu from "./SideBarMenu";
import DatePickerModule from "./DatePicker";

const Header = () => {


  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [destinationOpen, setDestinationOpen] = useState(false);
  const [openBox, setOpenBox] = useState(null);
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 5); // change after 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>


      <>

        <div className="cn1 lg:h-[100vh] h-[90vh]">

          <header
         className={`nav-color fixed top-0 left-0 w-full z-50 
         ${menuOpen || scrolled ? "bg-[#f7f4e5]" : "bg-transparent hover:bg-[#f7f4e5] transition-colors duration-1000 ease-in-out "}`}
         >
            <nav
              aria-label="Global"
              className=" flex items-center justify-between lg:px-7 px-4  lg:py-4 py-3"
            >
              <div className="flex-1 ">
                <div className="flex items-center gap-5">
                 {/* SideBarMenu */}
                  <button
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-dark-100"
                  >

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-hidden="true"
                      className="lg:size-10 size-7"
                    >
                      <path
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
              <SideBarMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} setDestinationOpen={setDestinationOpen} destinationOpen={destinationOpen} />
                {/* SideBarMenu */}

                  <el-popover-group className="  relative  hidden text-[16px] lg:flex lg:gap-5">
                    <Link to={"/"} className=" font-semibold text-gray-900">
                      Home
                    </Link>

                    {/* destination bar  */}
                    <div className="group ">
                      <button

                        className="flex items-center gap-x-1  font-semibold text-gray-900  cursor-pointer "

                      >
                        Destination
                        <svg
                          viewBox="0 0 20 20"
                          fill="black"
                          data-slot="icon"
                          aria-hidden="true"
                          className="size-6 flex-none text-gray-400  "
                        >
                          <path
                            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                            clipRule="evenodd"
                            fillRule="evenodd"
                          />
                        </svg>
                      </button>

                    <div
                    className=" absolute top-15 left-14.7  w-[720px]
                     bg-[#f7f4e5] text-black font-serif
                    shadow-xl border border-black/10
                    opacity-0 translate-y-2 pointer-events-none
                    group-hover:opacity-100
                    group-hover:translate-y-0
                   group-hover:pointer-events-auto" >

                        {/* HEADER */}
                        <div className="px-6 py-4 border-b border-black/50">
                          <h3 className="text-lg  font-[500]  tracking-wide">
                            The SR Heaven
                          </h3>
                        </div>

                        {/* DESTINATIONS */}
                        <div className="flex px-3 pt-6 space-y-6 gap-30 ">
                          <ul className="px-3 py-3 space-y-12  text-[18px]">
                            <li className="border-b  border-b-black">
                              Manali (Himachal Pradesh)
                            </li>
                            <li className="border-b  border-b-black">
                              Masoori (Uttrakhand)
                            </li>
                            <li className="border-b  border-b-black">
                              Dharamshala (Himachal Pradesh)
                            </li>
                          </ul>
                          <ul className=" py-3 space-y-12 text-[18px]">
                            <li className="border-b  border-b-black">
                              Dhalousie (Himachal Pradesh)
                            </li>
                            <li className="border-b  border-b-black">
                              Nainital (Uttarakhand)
                            </li>
                            <li className="border-b  border-b-black">
                              Darjleeng (West Bengal)
                            </li>
                          </ul>
                        </div>
                      </div>

                    </div>
                    {/* destination bar */}

                    <a href="#" className=" font-semibold text-gray-900">
                      Offers
                    </a>
                    <a href="#" className=" font-semibold text-gray-900">
                      Contact us
                    </a>
                  </el-popover-group>
                </div>
              </div>
              <Link to={"/"} className="logo">
                <img
                  className="logoimg"
                  src="/images/logo4.png"
                  alt=""
                />
              </Link>

              {/* booking button */}
              <div className="flex-1 justify-end">
                <div className=" right-item flex items-center justify-end lg:gap-4 gap-2">
                  <Link to={"/signup"} className=" flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className=" icon-bar  lg:w-10 lg:h-13 "

                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                    </svg>{" "}
                    <Link to="/signup" class="lg:flex hidden"> Signup</Link>
                  </Link>
                  <button onClick={() => setOpen(true)} className="bt-book "> Book </button>
                </div>
              </div>
            </nav>

          {/* / booking bar  */}

            <div
              className={` flex  justify-center fixed top-0 w-full  left-0 shadow-lg z-50
          transform transition-transform duration-500 ease-in-out
          ${open ? "translate-y-0" : "-translate-y-full"}
        `}
            >
              <div className=" bg-white relative w-full  lg:px-[400px] px-4  pt-6 ">
                {/* Close Button */}
                <button onClick={() => setOpen(false)} className="absolute top-4 lg:right-20 right-4 text-2xl text-gray-700">✕</button>
                {/* Form */}
                <div className="">
                  {/* Hotel */}
                  <div className="relative">
                    <label className="text-[#b58b3b] font-medium">Hotel</label>
                    <p className="text-gray-500 text-sm mt-1">Please select a destination</p>
                    <span className="absolute right-0 top-6 text-[#b58b3b]">✏️</span>
                    <div className="border-b border-gray-300 mt-2" />
                  </div>
                  {/* Check-in & Check-out */}
                  <div className="grid grid-cols-2 gap-12">
                    <div className="relative">
                      <label className="text-[#b58b3b] font-medium">Check-in</label>
                      <p className="text-gray-500 mt-1">-</p>
                      <span className="absolute right-0 top-6 text-[#b58b3b]">✏️</span>
                      <div className="border-b border-gray-300 mt-2" />
                    </div>
                    <div className="relative">
                      <label className="text-[#b58b3b] font-medium">Check-out</label>
                      <p className="text-gray-500 mt-1">-</p>
                      <span className="absolute right-0 top-6 text-[#b58b3b]">✏️</span>
                      <div className="border-b border-gray-300 mt-2" />
                    </div>
                  </div>
                  {/* Rooms & Guests */}
                  <div className="relative">
                    <label className="text-[#b58b3b] font-medium">Rooms &amp; Guests</label>
                    <p className="text-gray-600 mt-1">1 Room, 2 Adult, 0 Children</p>
                    <span className="absolute right-0 top-6 text-[#b58b3b]">✏️</span>
                    <div className="border-b border-gray-300 mt-2" />
                  </div>
                  {/* Promo Code */}
                  <div className="relative">
                    <label className="text-[#b58b3b] font-medium">Promo Code</label>
                    <p className="text-gray-400 mt-1">Enter Promo Code</p>
                    <span className="absolute right-0 top-6 text-[#b58b3b]">✏️</span>
                    <div className="border-b border-gray-300 mt-2" />
                  </div>
                  {/* Button */}
                  <div className="flex flex-col items-center gap-4 pt-6">
                    <button className="bg-[#ad2132] text-white px-26 py-3 font-semibold tracking-wide">
                      BOOK
                    </button>
                    <p className="text-sm text-gray-700 flex items-center gap-2">
                      <span className="text-[#f4a261] text-lg">✔</span>
                      Best Rate Guarantee
                    </p>
                  </div>
                </div>
              </div>

             </div>
          {/* / booking bar close */}
          </header>
          
          {/* bootom booking bar */}
          <div className=" flex justify-center items-center">
            <div className="  cn2  flex justify-center items-center ">
              <div className="booking-bar lg:flex lg:py-2 py-4  justify-between items-center">
                <div className="booking-item lg:my-0 my-3 ">
                  <div className="list-box-1 flex gap-13  lg:px-3  px-3  lg:py-2 py-2 items-center">
                    <div className="logo2 flex items-center gap-2 ">
                      <img
                        className="logoimg2"
                        src="/images/logo4.png"
                        alt=""
                      />
                      <span>Select a Hotel</span>
                    </div>

                    <button
                      onClick={() =>
                        setOpenBox(openBox === "hotel" ? null : "hotel")
                      }
                    >   <svg
                      viewBox="0 0 20 20"
                      fill=""
                      data-slot="icon"
                      aria-hidden="true"
                      className="size-7 flex-none  "
                    >
                        <path
                          d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                          clipRule="evenodd"
                          fillRule="evenodd"
                        />
                      </svg>

                    </button>
                    {openBox === "hotel" && (
                      <div className="absolute left-0 top-full mt-2 w-[360px] bg-white shadow-xl border z-50">
                        <ul className="max-h-[320px] overflow-y-auto text-[15px]">
                          <li className="px-4 py-3 font-semibold text-[#a67349]">Bengaluru</li>
                          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            The Leela Palace Bengaluru
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            The Leela Bhartiya City Bengaluru
                          </li>

                          <li className="px-4 py-3 font-semibold text-[#a67349]">Chennai</li>
                          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            The Leela Palace Chennai
                          </li>

                          <li className="px-4 py-3 font-semibold text-[#a67349]">Jaipur</li>
                          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            The Leela Palace Jaipur
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>



                <div className="booking-item  lg:my-0 my-3">
                  <div className="list-box-2 flex lg:px-3 px-3  lg:py-0 py-2 items-center">

                    <DatePickerModule />

                  </div>
                </div>
                <div className="booking-item lg:my-2 my-3">
                  <div className="list-box-3 flex lg:px-3 px-3  lg:py-0 py-2 items-center">
                    <div className="icon2 flex ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={26}
                        height={26}
                        fill="currentColor"
                        className="bi bi-person"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                      </svg>
                      <span>
                        {rooms} Room, {adults} Adult, {children} Child
                      </span>
                    </div>
                    <button
                      onClick={() =>
                        setOpenBox(openBox === "guest" ? null : "guest")
                      }

                    >
                      <svg
                        viewBox="0 0 20 20"
                        fill=""
                        data-slot="icon"
                        aria-hidden="true"
                        className="size-7 flex-none  "
                      >
                        <path
                          d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                          clipRule="evenodd"
                          fillRule="evenodd"
                        />
                      </svg>
                    </button>

                    {openBox === "guest" && (
                      <div className="absolute top-full left-0 mt-3 w-[340px] bg-white shadow-2xl border z-50 rounded-sm">

                        {/* ROW */}
                        <div className="px-6 py-5 space-y-6 text-[16px]">

                          {/* Rooms */}
                          <div className="flex justify-between items-center">
                            <span>Rooms</span>
                            <Counter value={rooms} setValue={setRooms} min={1} />
                          </div>

                          {/* Adults */}
                          <div className="flex justify-between items-center">
                            <span>Adults</span>
                            <Counter value={adults} setValue={setAdults} min={1} />
                          </div>

                          {/* Children */}
                          <div className="flex justify-between items-center">
                            <span>Children</span>
                            <Counter value={children} setValue={setChildren} min={0} />
                          </div>
                        </div>

                        <div className="border-t px-6 py-4">
                          <button
                            onClick={() => setOpenBox(null)}
                            className="w-full border border-[#d1a55c] py-2 tracking-widest text-[15px]"
                          >
                            DONE
                          </button>
                        </div>



                      </div>
                    )}
                  </div>
                </div>
                <div className="booking-item lg:flex hidden ">
                  <select className="booking-list-4">
                    <option>Promo Code</option>
                    <option>NEW50</option>
                  </select>
                </div>
                <button className="book-btn">BOOK</button>
              </div>
            </div>
          </div>
          {/* bottom booking bar */}
        </div>
      </>






    </>
  )
}

export default Header;