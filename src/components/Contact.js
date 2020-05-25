import React from 'react';


export default function Contact() {
  return(
    /* Contact modal */
    <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">Contact US</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form action="">

              <div className="form-row mb-4">
                <div className="col">
                  <input type="text" className="form-control" id="contact-name" name="contact-name" placeholder="Your name" />
                </div>
                <div className="col">
                  <input type="email" className="form-control" id="contact-email" name="contact-message" placeholder="example@host.com" />
                </div>
              </div>

              <div className="form-group mb-4">
                <label htmlFor="contact-company">Optional</label>
                <input type="text" className="form-control" id="contact-company" name="contact-company" placeholder="Company name" />
              </div>

              <div className="form-group mb-4">
                <textarea className="form-control" id="contact-message" name="contact-message" placeholder="Message"></textarea>
              </div>

              <div className="form-group">
                <button className="btn btn-md btn-block btn-border-radius" id="send-btn">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
