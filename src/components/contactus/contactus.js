import React, { Component } from "react";
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row-alt section-head">
          <div className="ten columns">
            <p className="lead">
              Feel free to contact me for any work or suggestions below
            </p>
          </div>
        </div>
        <div className="container">
          <form name="contact" method="post" className="contact">
            <input type="hidden" name="form-name" value="contact" />
            <div className="row form-group">
              <div className="col-lg-3 col-md-6 mb-3">
                <input
                  type="text"
                  name="firstName"
                  className=" mr-auto"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="col-lg-3 col-md-6 mb-3">
                <input
                  type="text"
                  name="lastName"
                  className=""
                  placeholder="Last Name"
                  required
                />
              </div>
              <div className="col-lg-3 col-md-6 mb-3">
                <input
                  type="email"
                  name="email"
                  className=""
                  placeholder="Email"
                  required
                />
              </div>
              <div className="col-lg-3 col-md-6 mb-3">
                <input
                  type="text"
                  name="business"
                  className=""
                  placeholder="Business (not required)"
                />
              </div>
            </div>

            <div className="form-group mb-4">
              <textarea
                className=""
                placeholder="Provide me with information regarding your needs."
                name="description"
                id=""
                rows="8"
                required
              />
            </div>
            <div className="row justify-content-center">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
        <div className="row-alt">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <h4>
                <a href="https://www.linkedin.com/in/vincent-coscia-b53b42a8/">
                  Click to contact me via LinkedIn
                </a>
              </h4>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}
