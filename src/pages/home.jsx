import Slider from "react-slick"
import MySlider from "../components/Slider"
import Secondslider from "../components/slider2"
import Thirdslider from "../components/slider3"

import Footer from "../components/footer"
import Header from "../components/header"
import MySlider1 from "../components/Slider1"
import MySlider2 from "../components/slider4"
import MySlider3 from "../components/slider5"



const Home = () => {


  return (

     <>
     

     <Header/>
      
      <div className="@container cn3 ">
        <div className="  lg:px-18 px-3">

          <div
            className="row px-1"
          >
            <div className="lux-heading lg:mt-0 mt-36">
              <div className="mt-5 ">
                <h1 className="text-[40px] font-[400]  subpixel-antialiased mb-0"> Our Hotels</h1>
                <span className="lux-line flex lg:justify-center">
                  {" "}
                  <img
                    className="hrimg "
                    src="/images/hrline.png"
                    alt=""
                  />
                </span>
              </div>
            </div>
            <p className="lux-heading2  "> Destinations</p>
           


          </div>

    


          <div class="slider mt-8">

            <MySlider1/>
          </div>

          
        </div>


        <div className="px-3">
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
         <div className="  lg:px-18 px-3">
          <div
            className="row px-1"
          >
            <div className="lux-heading  ">
              <div className="mt-5 ">
                      <h1 className="text-[40px] font-[400]  subpixel-antialiased mb-0">  Dinning </h1>
              
                    <span className="lux-line flex lg:justify-center">
                  {" "}
                  <img
                    className="hrimg "
                    src="/images/hrline.png"
                    alt=""
                  />
                </span>
              </div>
            </div>
            <p className="lux-heading2"> Destinations</p>
            

          </div>

          <div class="slider pt-8 ">

            <MySlider2/>

          </div>
        </div>
</div>

        <div className="px-3">
          <div className="row cn5">

            <div className="col offers1  text-center">
              <p >Meeting, Conference & Events </p>
         
              <p class="p2 lg:px-56 px-1 mt-1"> Your meetings and conferences get a perfect setting at SR Haven with spacious outdoor and indoor settings, state-of-the-art facilities and a team that works with you to make your business sessions convenient and comfortable. </p>
     
              <button className=" btn-explore1">
                Explore
              </button>

            </div>


          </div>



        </div>

        <div className="container">
      <div className="  lg:px-18 px-3">
          <div
            className="row px-1"
          >
            <div className="lux-heading">
              <div className="mt-5 ">
                <p className=" our  mb-0 c"> Weding & Celebrations </p>
              
              
                    <span className="lux-line flex lg:justify-center">
                  {" "}
                  <img
                    className="hrimg "
                    src="/images/hrline.png"
                    alt=""
                  />
                </span>
              </div> 
            </div>
            <p className="lux-heading2"> Destinations</p>

          </div>

          <div class="slider pt-8">

            <MySlider3/>

          </div>
          </div>
        </div>
             <div className="px-3 ">
          <div className="row cn6">

            <div className="col offers2  text-center ">
              <p >SR Haven Experiences</p>
              <p class="p2 lg:px-46 px-2 mt-1"> Every Trident Hotel has unique experiences for you to explore. From recreational activities, romantic sunset dining set-ups, cultural programmes to our exclusive Trident Kids Club, we ensure you leave us with a feeling of newness in your heart. </p>

              <button className=" btn-explore">
                Explore
              </button>

            </div>


          </div>



        </div>
     
      <Footer/>


   </div>

  </>

  
  )

}

export default Home