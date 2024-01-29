import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from 'react-countup'
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth hero-container flexCenter">
        {/* Left Side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <h1>
              Discover <br />
              Most Suitable <br />
              Property
            </h1>
          </div>
          <div className=" flexColStart hero-des">
            <span className="secondaryText">Find a Variety of Properties that suit you very easily</span>
            <span className="secondaryText">Forget all difficulties in finding a residence for you</span>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={0} end={20} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Projects</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp  end={50} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Customers</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp  end={5} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Patents</span>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="/src/assets/hero-image.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
