import React from "react";

import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";

import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";

import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import About from "../components/About/About";
import ServicesList from "../components/Services/ServicesList";

import featureImg from "../assets/images/feature-img.png";
import videoIcon from "../assets/images/video-icon.png";
import DoctorList from "../components/Doctors/DoctorList";
 

const Home = () => {
  return (
    <>
      {/*=====================================Hero Section========================*/}

      <section className="hero_section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/*===============Hero Content================= */}

            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  We help patients , live a healthy life{" "}
                </h1>

                <p className="text_para">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Minus sunt unde culpa assumenda alias quas, non est cumque qui
                  sit enim quaerat aliquam provident rerum ullam tempora. Quas
                  provident, explicabo voluptate officiis non velit natus, error
                  nostrum est sapiente sint nobis ipsum tempore minima
                  repudiandae suscipit recusandae veritatis aliquam
                  reprehenderit.
                </p>
                <button className="btn">Request an Appointment</button>
              </div>
              {/*===============Hero Counter ===========================*/}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:item-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading font-[700] text-headingColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Years of Experiences </p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading font-[700] text-headingColor">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Devloper</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Patient Satisfaction</p>
                </div>
              </div>
            </div>
            {/*=================hero Content */}

            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroImg01} alt="" />
              </div>
              <div className="mt-[30px]">
                <img src={heroImg02} alt="" className="w-full mb-[30px]" />
                <img src={heroImg03} alt="" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*=====================================Hero Section END ========================*/}

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center ">
              Providing the Best Medicals
            </h2>
            <p className="text_para text-center">
              World class Medicien offer to care for every person on our store{" "}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Doctor
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World class Medicien offer to care for every person on our
                  store{" "}
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mt-auto flex items-center 
            justify-center group hover:bg-primaryColor hover border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5"></BsArrowRight>
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find the Location
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World class Medicien offer to care for every person on our
                  store{" "}
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mt-auto flex items-center 
            justify-center group hover:bg-primaryColor hover border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5"></BsArrowRight>
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Book Appointment
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World class Medicien offer to care for every person on our
                  store{" "}
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mt-auto flex items-center 
            justify-center group hover:bg-primaryColor hover border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5"></BsArrowRight>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />
      {/*===================================== Service Section Start ========================*/}

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Medical services</h2>
            <p className="text_para text-center">
              World Class care for everyone .Our Medicare Website help to find
              the best Service Of mediciens and Doctors Services
            </p>
          </div>
          <ServicesList />
        </div>
      </section>

      {/*===================================== Service Section END ========================*/}

      {/*===================================== Feature Section Start ========================*/}

      <section>
        <div className="container">
          <div className="flex -items-center justify-between flex-col lg:flex-row">
            {/**=====================Fetures Content =============== */}

            <div className="xl:w-[670px]">
              <h2 className="heading">Get a Virtual Treatment anytime </h2>

              <ul className="pl-4">
                <li className="text_para">
                  1.Schedule the Appointment directly.
                </li>
                <li className="text_para">
                  2. Search for any physician here , and contact their office .
                </li>

                <li className="text_para">
                  3.View our Physician who are acceptiing new patients , use the
                  online shceduling tool to select an Appointment .
                </li>
              </ul>

              <Link to="/">
                <button className="btn">Learn More </button>
              </Link>
            </div>
            {/****=================================Featre Image ===============*/}

            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} alt="" className="w-3/4" />
              <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:pb-[26px] rounded-[10px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] text-headingColor ">Tue 27</p>
                    <p className="text-[10px] text-headingColor ">10:00</p>

                  </div>
                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellow rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                    <img src={videoIcon} alt="" className="" />

                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*===================================== Feature Section END ========================*/}



{/*===================================== Doctor Section Start ========================*/}
    <div className="container">
    <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Great Doctors</h2>
            <p className="text_para text-center">
              World Class care for everyone .Our Medicare Website help to find
              the best Service Of mediciens and Doctors Services
            </p>
          </div>
          <DoctorList/>
      
    </div>


{/*===================================== Doctor Section END ========================*/}


    </>
  );
};

export default Home;
