import Slider from "react-slick"
import MySlider from "./Slider"
import Secondslider from "./slider2"
import Thirdslider from "./slider3"
const Home = () => {


  return (

    <>

      <div className="container-fluid cn3">
        <div className="container">

          <div
            className="row "
          >
            <div className="lux-heading ourhotels ">
              <div className="mt-5 ">
                <h1 className=" our mb-0"> Our Hotels</h1>
                <span className="lux-line  ">
                  {" "}
                  <img
                    className="hrimg"
                    src="/images/hrline.png"
                    alt=""
                  />
                </span>
              </div>
            </div>
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
            { /* <div className="col">
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
              The SR Haven <br/> Manali (Himacahal Pradesh){" "}
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
              src="/images/hotels/masouri.jpg"
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
              src="/images/hotels/dharamshalaimg.jpg"
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
              src="/images/hotels/dhalousi.jpg"
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
              src="/images/hotels/nainital.jpg"
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
              src="/images/hotels/darjleeng.jpg"
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
      </div> */ }


          </div>

          <div class="slider">

            <MySlider />
          </div>
        </div>


        <div className="container-fluid ">
          <div className="row cn4">

            <div className="col offers  text-center">
              <p >Special Offers </p>
              <p class="p2">  Enjoy specially curated offers to enhance your experience at SR Haven. </p>
              <p>  </p>
              <button className=" btn-explore">
                Explore
              </button>

            </div>


          </div>



        </div>



        <div className="container">

          <div
            className="row slider1"
          >
            <div className="lux-heading  ">
              <div className="mt-5 ">
                <h1 className=" our mb-0"> Dinning </h1>
                <span className="lux-line  ">
                  {" "}
                  <img
                    className="hrimg"
                    src="/images/hrline.png"
                    alt=""
                  />
                </span>
              </div>
            </div>
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
            { /* <div className="col">
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
              The SR Haven <br/> Manali (Himacahal Pradesh){" "}
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
              src="/images/hotels/masouri.jpg"
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
              src="/images/hotels/dharamshalaimg.jpg"
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
              src="/images/hotels/dhalousi.jpg"
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
              src="/images/hotels/nainital.jpg"
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
              src="/images/hotels/darjleeng.jpg"
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
      </div> */ }


          </div>

          <div class="slider">

            <Secondslider />

          </div>
        </div>


        <div className="container-fluid ">
          <div className="row cn5">

            <div className="col offers1  text-center">
              <p >Meeting, Conference & Events </p>
              <p class="p2 col-lg--9"> Your meetings and conferences get a perfect setting at SR Haven with spacious outdoor and indoor settings, state-of-the-art facilities and a team that works with you to make your business sessions convenient and comfortable. </p>
              <p>  </p>
              <button className=" btn-explore1">
                Explore
              </button>

            </div>


          </div>



        </div>

        <div className="container">

          <div
            className="row slider1"
          >
            <div className="lux-heading">
              <div className="mt-5 ">
                <h1 className=" our mb-0"> Weding & Celebrations </h1>
                <span className="lux-line  ">
                  {" "}
                  <img
                    className="hrimg"
                    src="/images/hrline.png"
                    alt=""
                  />
                </span>
              </div>
            </div>
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
            { /* <div className="col">
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
              The SR Haven <br/> Manali (Himacahal Pradesh){" "}
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
              src="/images/hotels/masouri.jpg"
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
              src="/images/hotels/dharamshalaimg.jpg"
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
              src="/images/hotels/dhalousi.jpg"
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
              src="/images/hotels/nainital.jpg"
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
              src="/images/hotels/darjleeng.jpg"
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
      </div> */ }


          </div>

          <div class="slider">

            <Thirdslider />

          </div>
        </div>
             <div className="container-fluid ">
          <div className="row cn6">

            <div className="col offers2  text-center">
              <p >SR Haven Experiences</p>
              <p class="p2 col-lg-9"> Every Trident Hotel has unique experiences for you to explore. From recreational activities, romantic sunset dining set-ups, cultural programmes to our exclusive Trident Kids Club, we ensure you leave us with a feeling of newness in your heart. </p>
              <p>  </p>
              <button className=" btn-explore">
                Explore
              </button>

            </div>


          </div>



        </div>

      </div>








    </>
  )

}

export default Home