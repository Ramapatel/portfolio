import React from "react";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h1 className="heading">
        <span>contact</span> me
      </h1>

      <div className="row">
        <div className="content">
          <h3 className="title">contact info</h3>

          <div className="info">
            <h3>
              <i className="fas fa-envelope"></i> rama.ap46864@gamil.com
            </h3>
            <h3>
              <i className="fas fa-phone"></i> 9926584801
            </h3>
            <h3>
              <i className="fas fa-map-marker-alt"></i> Chhattisgarh
            </h3>
          </div>
        </div>

        <form action="">
          <input type="text" placeholder="name" className="box" />
          <input type="email" placeholder="email" className="box" />
          <input type="text" placeholder="project" className="box" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="box message"
            placeholder="message"
          ></textarea>
          <button type="submit" className="btn">
            send <i className="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
