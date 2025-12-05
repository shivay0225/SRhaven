
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MySlider = () => {

    var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return ( 
    <>
    <Slider {...settings}>
        <div className="col">
        <div
          className="card  bg-transparent "
          style={{ width: "24rem", height: 510}}
        >
          <div className="card-img">
            <img
              src="/images/hotels/Manali.jpg"
              className="Manaliimg"
              alt="..." 
            />
          </div>
          <div className="card-body">
            <p className="p1">
              {" "}
              The SR Haven <br/> Manali (Himacahal Pradesh){""}
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div
          className="card bg-transparent"
          style={{ width: "24rem", height: 510 }}
        >
          <div className="card-img">
            <img
              src="/images/hotels/masouri.jpg"
              className="Manaliimg"
              alt="..."
            />
          </div>
          <div className="card-body">
            <p className="p1">
              {""}
              The SR Haven <br /> Masoori (Uttarakhand)
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div
          className="card bg-transparent"
          style={{ width: "24rem", height: 510}}
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
          className="card bg-transparent"
          style={{ width: "24rem", height: 510 }}
        >
          <div className="card-img">
            <img
              src="/images/hotels/dhalousi.jpg"
              className="Manaliimg"
              alt="..."
            />
          </div>
          <div className="card-body">
            <p className="p1">
              {""}
              The SR Haven <br /> Dhalousie (HimachalPradesh)
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div
          className="card bg-transparent"
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
          <div className="card-body">
            <p className="p1">
              {""}
              The SR Haven <br/> Darjeeling (West Bengal)
            </p>
          </div>
        </div>
      </div>
    </Slider>
    </>
  )
    

}
export default MySlider