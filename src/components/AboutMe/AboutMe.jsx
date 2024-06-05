import React from "react";
import "./AboutMe.css";

function AboutMe() {
  return (
    <>
      <div className="container-fluid pt-4 about-section" id="aboutMe-Section">
        <div className="container">
          <hr style={{ color: "white" }} />
          <h1 className="text-center heading">About Me</h1>
          <div className="about-content d-flex justify-content-center mt-5">
            <div>
              <p>
                Hey there! I'm{" "}
                <b>
                  <span style={{ color: "#017ffa" }}>Rohit Malviya</span>
                </b>
                , a final-year B.Tech student deeply passionate about Computer
                Science Engineering. Venturing into the realm of web development
                has been an exhilarating ride for me. I take immense pride in
                not just collecting certificates, but in applying my knowledge
                to real-world projects. With each line of code, I'm sculpting my
                path towards innovation and excellence. From mastering languages
                to crafting immersive user experiences, I'm driven by a
                relentless thirst for learning and growth. Join me as I continue
                to push boundaries and redefine the digital landscape, one
                website at a time.
              </p>
            </div>
          </div>
            <h1 className="text-center heading mt-5">Technology & Tools Used</h1>
          <div className="technology-section d-flex justify-content-center mt-5">
            <div className="technology ">
              <div className="row">
                 <div className="image-icons col-md-3"><img src="images/icon-12.png" alt="Png" width={70} /></div>
                 <div className="image-icons col-md-3"><img src="images/icon-1.png" alt="Png" width={70} /></div>
                 <div className="image-icons col-md-3"><img src="images/icon-8.png" alt="Png" width={70} /></div>
                 <div className="image-icons col-md-3"><img src="images/icon-10.png" alt="Png" width={70} /></div>
                 <div className="image-icons col-md-3"><img src="images/icon-11.png" alt="Png" width={70} /></div>
                 <div className="image-icons col-md-3"><img src="images/icon-2.png" alt="Png" width={70} /></div>
                 <div className="image-icons col-md-3"><img src="images/icon-3.png" alt="Png" width={70} /></div>
                 <div className="image-icons col-md-3"><img src="images/icon-4.png" alt="Png" width={70} /></div>
                 <div className="image-icons col-md-3"><img src="images/icon-5.png" alt="Png" width={70} /></div>
                 <div className="image-icons col-md-3"><img src="images/icon-6.png" alt="Png" width={70} /></div>
                 <div className="image-icons col-md-3"><img src="images/icon-7.png" alt="Png" width={70} /></div>
                 <div className="image-icons col-md-3"><img src="images/icon-9.png" alt="Png" width={70} /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
