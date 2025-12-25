const SideBarMenu = ({menuOpen, setMenuOpen, setDestinationOpen, destinationOpen} ) => {


    return(
        <>
            <div
                    className={`fixed lg:top-25.5 top-15.5 left-0 z-50 h-screen sidebar lg:w-90 w-80 bg-[#f7f4e5] 
                       transform transition-transform duration-700 ease-in-out
                      ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
                  >
                    {/* CLOSE BUTTON */}
                    <button
                      onClick={() => setMenuOpen(false)}
                      className="absolute top-4 right-4 text-2xl"
                    >
                      ✕
                    </button>

                    {/* MENU CONTENT */}
                    <div className="px-8 lg:py-9 py-10 space-y-2 text-[18px] font-serif lg:h-[700px] h-[800px]  overflow-hidden overflow-y-scroll">
                      <div className="border-b lg:pb-5 pb-4 ">Home</div>
                      <div className="border-b lg:pt-2 pt-5  pb-4">
                        <button
                          onClick={() => setDestinationOpen(!destinationOpen)}
                          className="flex items-center lg:gap-x-42 gap-x-32  text-gray-900  cursor-pointer "

                        >
                          Destination
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

                       
<div
  className={`
    overflow-hidden
    
    ease-[cubic-bezier(1,15,0,0,29)]

    ${destinationOpen
      ? "max-h-[600px]  duration-1800  ease-[cubic-bezier(1,15,0,0,29)]-out"
      : "max-h-0  duration-700   ease-[cubic-bezier(1,15,0,0,29)]-in "}
        transition-[max-height]
  `}
>
      <ul className=" border-t mt-4 mb-2  pt-5  space-y-6 text-[17px]">
        <li className="   pb-2 transition duration-300 ease-in-out">
          Manali (Himachal Pradesh)
        </li>
        <li className="transition duration-500 ease-in-out pb-2">
          Mussoorie (Uttarakhand)
        </li>
        <li className=" pb-2">
          Dharamshala (Himachal Pradesh)
        </li>
      </ul>

      <ul className=" pt-4 space-y-6 text-[17px]">
        <li className=" pb-2">
          Dalhousie (Himachal Pradesh)
        </li>
        <li className="pb-2">
          Nainital (Uttarakhand)
        </li>
        <li className=" pb-1">
          Darjeeling (West Bengal)
        </li>
      </ul>
      </div>


      </div>
                      <div className="border-b lg:pt-2 pt-4 pb-4 "> Offers</div>
                      <div className="border-b lg:pt-2 pt-4 pb-4 ">Dinning</div>
                      <div className="border-b lg:pt-2 pt-4 pb-4  flex justify-between">
                        <span>Meeting & Confernece </span>
                      </div>
                      <div className="border-b lg:pt-2 pt-4 pb-4  flex justify-between">
                        <span> Wedding & Celebrations </span>
                      </div>
                      <div className="border-b lg:pt-2 pt-4 pb-4  flex justify-between">
                        <span> SR Heaven Experiences  </span>
                      </div>
                      <div className="border-b lg:pt-2 pt-4 pb-4  flex justify-between">
                        <span> About us   </span>
                      </div>
                      <div className="border-b lg:pt-2 pt-4 pb-4 ">Contact Us</div>

                      <button className="mt-7 w-full bg-[#a67349] text-white py-3  tracking-widest">
                        BOOK
                      </button>
                    </div>
                  </div></>
    )
}

export default SideBarMenu