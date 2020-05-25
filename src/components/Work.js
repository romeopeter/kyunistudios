import React, { Fragment } from 'react';


export default function Work() {

  const seekTracker = {
    trackerLeft: {
      float: 'left',
      position: 'relative',
      left: '15px'
    },
    trackerRight: {
      float: 'right',
      position: 'relative',
      right: '20px'
    }
  }

  return(
    <Fragment>

      {/* Work */}
      <section className="kyuni-work" id="kyuni-work">
        <div className="work-intro">
          <h3>Listen to our recent voice-overs samples:</h3>
          <span>Over 150+ voice-overs delivered to clients</span>
        </div>

        <div className="work">

          <div className="audio-player audio-player-col-1">
            <h3 id="player-voiceover-name">
              <label htmlFor="player">Becky's Design</label>
            </h3>

            <div className="audio-controls" id="player-container">
              <audio id="player">
                <source src="lift-bells.wav" type="audio/mp3" />
              </audio>
            </div>

            <div className="player-control scrubber">
              <div id="play-btn"></div>
              <div className="seek">
                <div id="seek-obj-container">
                  <progress id="seek-obj" value="0" max="1"></progress>
                </div>
                <small style={ seekTracker.trackerLeft } id="start-time">00:00</small>
                <small style={ seekTracker.trackerRight } id="end-time">00:00</small>
              </div>
            </div>
          </div>

          <div className="audio-player audio-player-col-2">
            <h3 id="player-voiceover-name">
              <label htmlFor="player">Becky's Design</label>
            </h3>

            <div className="audio-controls" id="player-container">
              <audio id="player">
                <source src="lift-bells.wav" type="audio/mp3" />
              </audio>
            </div>

            <div className="player-control scrubber">
              <div id="play-btn"></div>
              <div className="seek">
                <div id="seek-obj-container">
                  <progress id="seek-obj" value="0" max="1"></progress>
                </div>
                <small style={ seekTracker.trackerLeft } id="start-time">00:00</small>
                <small style={ seekTracker.trackerRight } id="end-time">00:00</small>
              </div>
            </div>
          </div>

          <div className="audio-player audio-player-col-3">
            <h3 id="player-voiceover-name">
              <label htmlFor="player">Becky's Design</label>
            </h3>

            <div className="audio-controls" id="player-container">
              <audio id="player">
                <source src="lift-bells.wav" type="audio/mp3" />
              </audio>
            </div>

            <div className="player-control scrubber">
              <div id="play-btn"></div>
              <div className="seek">
                <div id="seek-obj-container">
                  <progress id="seek-obj" value="0" max="1"></progress>
                </div>
                <small style={ seekTracker.trackerLeft } id="start-time">00:00</small>
                <small style={ seekTracker.trackerRight } id="end-time">00:00</small>
              </div>
            </div>
          </div>

          <div className="audio-player audio-player-col-4">
            <h3 id="player-voiceover-name">
              <label htmlFor="player">Becky's Design</label>
            </h3>

            <div className="audio-controls" id="player-container">
              <audio id="player">
                <source src="lift-bells.wav" type="audio/mp3" />
              </audio>
            </div>

            <div className="player-control scrubber">
              <div id="play-btn"></div>
              <div className="seek">
                <div id="seek-obj-container">
                  <progress id="seek-obj" value="0" max="1"></progress>
                </div>
                <small style={ seekTracker.trackerLeft } id="start-time">00:00</small>
                <small style={ seekTracker.trackerRight } id="end-time">00:00</small>
              </div>
            </div>
          </div>

          <div className="audio-player audio-player-col-5">
            <h3 id="player-voiceover-name">
              <label htmlFor="player">Becky's Design</label>
            </h3>

            <div className="audio-controls" id="player-container">
              <audio id="player">
                <source src="lift-bells.wav" type="audio/mp3" />
              </audio>
            </div>

            <div className="player-control scrubber">
              <div id="play-btn"></div>
              <div className="seek">
                <div id="seek-obj-container">
                  <progress id="seek-obj" value="0" max="1"></progress>
                </div>
                <small style={ seekTracker.trackerLeft } id="start-time">00:00</small>
                <small style={ seekTracker.trackerRight } id="end-time">00:00</small>
              </div>
            </div>
          </div>
        </div>

        {/*Trigger button*/}
        <div id="contact">
          <button type="button" className="btn btn-lg btn-border-radius" data-toggle="modal" data-target="#exampleModalCenter">
            Contact
          </button>
        </div>
      </section>
    </Fragment>
  );
}
