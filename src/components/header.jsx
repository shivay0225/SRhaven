


const Header  = () =>{

    return(
        <>
        
        <div className="div cn1">
  <nav className="navbar nav-color">
    <div className=" container-fluid   d-flex justify-content-between w-100 align-items-center ">
      <div className="d-flex align-items-center justify-content-center">
        <div className="d-flex align-items-center ">
          <button
            className="btn"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasScrolling"
            aria-controls="offcanvasScrolling"
          >
            <i className="bi bi-list fs-1" />
          </button>
          <ul className="list-unstyled  d-lg-flex d-none ">
            <li className="nav-item">
              <a className="nav-link " href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#" tabIndex={-1}>
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="logo">
        <img
          className="logoimg"
          src="/images/logo4.png"
          alt=""
        />
      </div>
      <div className="col-3  justify-content-end">
        <div className="d-flex align-items-center  justify-content-end gap-3">
          <div className="d-flex  align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon-bar"
              width={38}
              height={38}
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
            </svg>{" "}
            <span> Signup</span>
          </div>
          <button className="bt-book"> Book </button>
        </div>
      </div>
    </div>
    <div
      className="offcanvas offcanvas-start"
      data-bs-scroll="true"
      data-bs-backdrop="false"
      tabIndex={-1}
      id="offcanvasScrolling"
      aria-labelledby="offcanvasScrollingLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
          Offcanvas with body scrolling
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
      <div className="offcanvas-body">
        <p>Try scrolling the rest of the page to see this option in action.</p>
      </div>
    </div>
  </nav>
  <div className="container cn2  d-flex justify-content-between align-items-center">
    <div className="booking-bar d-lg-flex  py-2  py-4 d-block  justify-content-between align-items-center">
      <div className="booking-item my-lg-0 my-3 ">
        <div className="list-box-1 d-flex px-3 py-lg-0 py-2 px-3 align-items-center">
          <div className="logo2">
            <img
              className="logoimg2"
              src="/images/logo4.png"
              alt=""
            />
          </div>
          <select className="booking-list">
            <option>Select a Hotel</option>
            <option>Hotel A</option>
            <option>Hotel B</option>
          </select>
        </div>
      </div>
      <div className="booking-item  my-lg-0 my-3">
        <div className="list-box-2 d-flex align-items-center px-3 py-lg-0  py-2 px-3">
          <div className="icon1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={22}
              height={22}
              fill="currentColor"
              className="bi bi-calendar"
              viewBox="0 0 16 16"
            >
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
            </svg>
          </div>
          <select className="booking-list-2 ">
            <option>Check-in – Check-out</option>
            <option>1 Jan - 3 Jan</option>
            <option>5 Jan - 10 Jan</option>
          </select>
        </div>
      </div>
      <div className="booking-item my-lg-0 my-3">
        <div className="list-box-3 d-flex align-items-center px-3 py-lg-0  py-2 px-3">
          <div className="icon2">
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
          </div>
          <select className="booking-list-3">
            <option>1 Room, 2 Adults</option>
            <option>2 Rooms, 4 Adults</option>
          </select>
        </div>
      </div>
      <div className="booking-item  d-lg-flex d-none ">
        <select className="booking-list-4">
          <option>Promo Code</option>
          <option>NEW50</option>
        </select>
      </div>
      <button className="book-btn">BOOK</button>
    </div>
  </div>
</div>

        </>
    )
}

export default Header;