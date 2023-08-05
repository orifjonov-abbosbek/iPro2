import React, { useEffect } from "react";
import AOS from "aos";
import card1 from "../../assets/images/card1.png";
import card2 from "../../assets/images/card2.png";
import card3 from "../../assets/images/card3.png";
import "aos/dist/aos.css";

import "./Home.scss";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="hero__wrapper">
            <h1 className="hero__title">Welcome to Our IT Company</h1>
            <p className="hero__description">
              We deliver innovative solutions to shape your digital future.
            </p>
            <button className="hero__cta">Learn More</button>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <h2 className="services__title" data-aos="fade-up">
            Our Services
          </h2>
          <div className="services__grid">
            <div className="card" data-aos="fade-right">
              <div className="content">
                <div className="back">
                  <div className="back-content">
                    <img className="face_img" src={card2} alt="" />
                    <strong>Web Design</strong>
                  </div>
                </div>
                <div className="front">
                  <div className="img">
                    <div className="circle"></div>
                    <div className="circle" id="right"></div>
                    <div className="circle" id="bottom"></div>
                  </div>

                  <div className="front-content">
                    <small className="badge">iPro</small>
                    <div className="description">
                      <div className="title">
                        <p className="title">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Molestiae, culpa ab necessitatibus suscipit
                          reprehenderit veritatis ad fug
                        </p>
                      </div>
                      <p className="card-footer">
                        30 Mins &nbsp; | &nbsp; 1 Serving
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card" data-aos="fade-left">
              <div className="content">
                <div className="back">
                  <div className="back-content">
                    <img className="face_img" src={card1} alt="" />
                    <strong>Programming</strong>
                  </div>
                </div>
                <div className="front">
                  <div className="img">
                    <div className="circle"></div>
                    <div className="circle" id="right"></div>
                    <div className="circle" id="bottom"></div>
                  </div>

                  <div className="front-content">
                    <small className="badge">iPro</small>
                    <div className="description">
                      <div className="title">
                        <p className="title">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Molestiae, culpa ab necessitatibus suscipit
                          reprehenderit veritatis ad fug
                        </p>
                      </div>
                      <p className="card-footer">
                        30 Mins &nbsp; | &nbsp; 1 Serving
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card" data-aos="flip-left">
              <div className="content">
                <div className="back">
                  <div className="back-content">
                    <img className="face_img" src={card3} alt="" />
                    <strong>Moution Graphic</strong>
                  </div>
                </div>
                <div className="front">
                  <div className="img">
                    <div className="circle"></div>
                    <div className="circle" id="right"></div>
                    <div className="circle" id="bottom"></div>
                  </div>

                  <div className="front-content">
                    <small className="badge">iPro</small>
                    <div className="description">
                      <div className="title">
                        <p className="title">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Molestiae, culpa ab necessitatibus suscipit
                          reprehenderit veritatis ad fug
                        </p>
                      </div>
                      <p className="card-footer">
                        30 Mins &nbsp; | &nbsp; 1 Serving
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-us">
        <div className="container">
          <h2 className="about-us__title" data-aos="fade-up">
            About Us
          </h2>
          <div
            className="about-us__content"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <p>
              We are a team of passionate and talented IT professionals
              committed to delivering top-notch solutions to our clients. With
              years of experience, we have successfully served various
              industries and businesses.
            </p>
            <p>
              Our expertise lies in web and mobile development, cloud computing,
              data analytics, and more. We believe in continuous innovation and
              strive to keep up with the latest technologies.
            </p>
            <p>
              Let's embark on a journey together to transform your ideas into
              reality!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
