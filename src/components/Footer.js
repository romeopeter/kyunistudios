import React from 'react';


export default function Footer() {
  return(
    /* Footer */
    <footer>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-4 copy-right">
            <img src="../components/logo.jpeg" alt="kyuni-studio-logo" title="Kyuni studio" className="rounded float-left" id="logo" />
            {/*<h2>The Voice Magnet.</h2>*/}
          </div>
          <div className="col-sm-12 col-md-8 contact">
            <h1 id="contact-intro-text">GET IN TOUCH WITH US</h1>
            <div className="row">
              <div className="col-sm-12 col-md-4 mb-3" id="mail">
                <p>Mail Us</p>
                <a href="mailto:kyunistudios@gmail.com" className="mb-md-2">kyunistudios@gmail.com</a>
              </div>
              <div className="col-sm-12 col-md-4" id="phone">
                <p>Call Us</p>
                <h6>(+234)707070070</h6>
                <h6>(+234)8776754040</h6>
              </div>
              <div className="col-sm-12 col-md-4 mb-3" id="social-media">
                <p>View Us</p>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-whatsapp"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <p>&copy; 2020. KyuniStudios. All Right Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
