
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MySlider = () => {
    var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 4,
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
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
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
      <div>
        <img src="/images/hotels/Manali.jpg" className="img-fluid"/>
      </div>
      
      <div>
        <img src="/images/hotels/img1.jpg" className="img-fluid"/>
      </div>
      
      <div>
        <img src="/images/hotels/img3.jpg" className="img-fluid"/>
      </div>
      
      <div>
        <img src="/images/hotels/Manali.jpg" className="img-fluid"/>
      </div>
      
      <div>
        <img src="/images/hotels/Manali.jpg" className="img-fluid"/>
      </div>
    </Slider>
    </>
  )
    

}
export default MySlider