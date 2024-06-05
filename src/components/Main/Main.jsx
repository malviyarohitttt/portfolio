import React from "react";
import "./Main.css";

function Main() {
  return (
    <section className="container-fluid main">
      <div className="container">
        <div className="row">
          <div className="content col-md-6 d-flex flex-column justify-content-center">
            <h5>Hello,It's Me</h5>
            <span className="name">Rohit Malviya</span>
            <p>
              And I'm a <span>Full Stack Developer</span>
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              fugit nobis sequi nesciunt ipsam autem!
            </p>
            <div className="Social-media mt-3">
                <img src="images/linkedin.png" alt="" width={35}/>
                <img src="images/twitter1.png" alt="" width={35}/>
                <img src="images/Whatsapp.png" alt="" width={35}/>
                <img src="images/instagram.png" alt="" width={35}/>
            </div>
          </div>
          <div className="image col-md-6 d-flex justify-content-center">
            <img src="images/file.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
