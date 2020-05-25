import React, { Fragment } from 'react';


export default function Home() {
  return(
    <Fragment>
      <div className="kyuni-cover">
        <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top" id="navbar">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src="/logo.jpeg" alt="Kyuni-studio-logo" title="kyunistudio" className="img-fluid img-thumbnail rounded" id="logo" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon">
                <i className="fas fa-bars"></i>
              </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#kyuni-home">Home <span className="sr-only">(current)</span></a>
                  <div className="nav-hover-border"></div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#kyuni-about">About</a>
                  <div className="nav-hover-border"></div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#kyuni-work">Work</a>
                  <div className="nav-hover-border"></div>
                </li>
                {/*<li className="nav-item">
                  <a className="nav-link" href="#">Services</a>
                  <div className="nav-hover-border"></div>
                </li>*/}
                <li className="nav-item">
                  <button type="button" className="btn btn-lg btn-border-radius" data-toggle="modal" data-target="#exampleModalCenter">
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/*Landing section*/}
        <div id="kyuni-home">
          <div id="kyuni-banner" className="container">
            <div className="intro-text">
              <div id="round-circle">
                <h1 id="text">The Voice Magnet.</h1>
              </div>
              <div id="arrow-down">
                  <i className="fas fa-arrow-down"></i>
              </div>
            </div>
            <div className="banner-img"></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
