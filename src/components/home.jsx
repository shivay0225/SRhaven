import Slider from "react-slick"
import MySlider from "./Slider"
const Home = () =>{


    return(

        <>
        
        <div className="container-fluid cn3">
  <div className="container">
   
    <div
      className="row slider1"
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
      {    /* <div className="col">
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
      </div> */}
      
        

    </div>

    <div class="slider">

         <MySlider/>
    </div>
  </div>


    <div className="container-fluid ">
    <div className="row cn4">

      <div className="col offers  text-center">
         <p >Special Offers </p>
         <p class="p2">  Enjoy specially curated offers to enhance your experience at Trident Hotels. </p>
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