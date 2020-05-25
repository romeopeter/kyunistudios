import React, { Fragment } from 'react';


export default function About() {
  return(
    <Fragment>
      {/* About section */}

      <section className="kyuni-about" id="kyuni-about">
        <div className="cover-viewport">
          <div className="about-section">
            <div className="contact">
              <h2>ABOUT US</h2>
              <button type="button" className="btn btn-lg btn-border-radius" data-toggle="modal" data-target="#exampleModalCenter">
                Contact
              </button>
            </div>
            <div className="about-us">

                <div id="about-text-col">
                  <h3>About Us</h3>
                </div>

                <div className="welcome-col">
                  <span>WELCOME.</span>
                  <p>Welcome to KyuniStudios, at KyuniStudios our sole goal is to
                  bring you and your message to into the minds of your consumner and clientele.
                  Why!? Because there is no us without you.</p>
                </div>

                <div className="project-col">
                  <span>PROJECT.</span>
                  <p>At KyuniStudios we project your dreams and bring them to life through
                  thoroughbred scripting and unparrelled voicing.
                  We are passionate in bringing your dreams as light to others, making
                  your business our passion and goal ours to see and be part of.</p>
                </div>

                <div className="educate-col">
                  <span>EDUCATE YOU.</span>
                  <p>We make promotions interesting and exciting, plus we educate in the most
                  plausible way, our products can boost your business thoughts through advertising.</p>
                  <p>Marketing your products with our voice on this platform will take you from
                  where you are right now to where you would like to be.</p>
                </div>

                <div className="your-voice-col">
                  <span>WE ARE YOUR VOICE.</span>
                  <p>KyuniStudios is not only a voice-over media marketing
                  organization. We are your voice.</p>
                </div>

                <div className="kyuni-col">
                  <span>Come Let Us Kyuni!</span>
                </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
