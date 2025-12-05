import MySlider from "./Slider"
const Home = () =>{


    return(

        <>
        <MySlider/>
        <div className="container-fluid cn3">
  <div className="container">
    <div className="lux-heading">
      <div className="mt-5">
        <h1 className="mb-0"> Our Hotels</h1>
        <span className="lux-line ">
          {" "}
          <img
            className="hrimg"
            src="/SRhaven/src/assets/images/hrline.png"
            alt=""
          />
        </span>
      </div>
    </div>
    <div
      className="row gap-3
      "
    >
      <p className="lux-heading2"> Destinations</p>
      {/* <div class="col">
              <div class="card" style="width: 20rem; ">
                  <img src="/SRhaven/src/assets/images/hotels/Manali.jpg" class="Manaliimg" alt="...">
                  <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk
                          of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
              </div>

          </div> */}
      <div className="col">
        <div
          className="destinations bg-transparent "
          style={{ width: "24rem", height: 510 }}
        >
          <div className="card-img">
            <img
              src="/images/hotels/Manali.jpg"
              className="Manaliimg"
              alt="..."
            />
          </div>
          <div className="card-body ">
            <p className="p1">
              {" "}
              The SR Haven <br /> Manali (Himacahal Pradesh){" "}
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div
          className="card bg-transparent "
          style={{ width: "24rem", height: 510 }}
        >
          <div className="card-img">
            <img
              src="assets/images/hotels/masouri.jpg"
              className="Manaliimg"
              alt="..."
            />
          </div>
          <div className="card-body ">
            <p className="p1">
              {" "}
              The SR Haven <br /> Masoori (Uttarakhand)
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div
          className="card bg-transparent "
          style={{ width: "24rem", height: 510 }}
        >
          <div className="card-img">
            <img
              src="assets/images/hotels/dharamshalaimg.jpg"
              className="Manaliimg"
              alt="..."
            />
          </div>
          <div className="card-body ">
            <p className="p1">
              {" "}
              The SR Haven <br /> Dharamshala (HimachalPradesh)
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div
          className="card bg-transparent "
          style={{ width: "24rem", height: 510 }}
        >
          <div className="card-img">
            <img
              src="assets/images/hotels/dhalousi.jpg"
              className="Manaliimg"
              alt="..."
            />
          </div>
          <div className="card-body ">
            <p className="p1">
              {" "}
              The SR Haven <br /> Dhalousie (HimachalPradesh)
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div
          className="card bg-transparent "
          style={{ width: "24rem", height: 510 }}
        >
          <div className="card-img">
            <img
              src="assets/images/hotels/nainital.jpg"
              className="Manaliimg"
              alt="..."
            />
          </div>
          <div className="card-body ">
            <p className="p1">
              {" "}
              The SR Haven <br /> Nainital – Bhimtal- (Uttarakhand)
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div
          className="card bg-transparent "
          style={{ width: "24rem", height: 510 }}
        >
          <div className="card-img">
            <img
              src="assets/images/hotels/darjleeng.jpg"
              className="Manaliimg"
              alt="..."
            />
          </div>
          <div className="card-body ">
            <p className="p1">
              {" "}
              The SR Haven <br /> Darjeeling (West Bengal)
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )

}

export default Home