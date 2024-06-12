import React from "react";

import aboutImg from "../../assets/images/about.png";

import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] ls:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          {/**========== About Img================================================================================  */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImg} alt="" />

            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
              <img src={aboutCardImg} alt="" />
            </div>
          </div>

          {/**======================================================== About Content================================================================================  */}

          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">
              Proud to be one of the nation best Services Provider{" "}
            </h2>
            <p className="text_para">
              Dr. Sarah Johnson is a board-certified internal medicine physician
              with over 15 years of experience in the medical field. She
              completed her medical degree at Harvard Medical School, where she
              graduated with honors. Dr. Johnson then went on to complete her
              residency at Massachusetts General Hospital, gaining extensive
              experience in diagnosing and managing a wide variety of complex
              medical conditions. Throughout her career, she has been dedicated
              to providing compassionate and comprehensive care to her patients,
              with a particular focus on preventive medicine and patient
              education.
            </p>
            <p className="text_para mt-[30px]">
              At our state-of-the-art medical clinic, we offer a comprehensive
              range of services to meet the diverse healthcare needs of our
              patients. Our team of experienced healthcare professionals is
              dedicated to providing high-quality, patient-centered care in a
              welcoming and supportive environment.
            </p>
            <Link to='/'><button className="btn">Learn More</button></Link>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
