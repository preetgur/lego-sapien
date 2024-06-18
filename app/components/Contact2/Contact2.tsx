"use client";
import React, { TextareaHTMLAttributes } from "react";
// import "isomorphic-fetch";
import Link from "next/link";

class Contact2 extends React.Component {
  state = {
    submitting: false,
    submitted: false,
    buttonState: "",
    formFields: {
      name: "",
      email: "",
      phone: "",
      text: "",
    },
  };

  onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = this.state.formFields;
    fetch("/api/contact", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        this.setState({ submitted: true });
      }
      let formFields = Object.assign({}, this.state.formFields);
      formFields.name = "";
      formFields.email = "";
      formFields.phone = "";
      formFields.text = "";
      this.setState({ formFields });
    });
  };

  nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let formFields = Object.assign({}, this.state.formFields);
    formFields.name = e.target.value;
    this.setState({ formFields });
  };

  emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let formFields = Object.assign({}, this.state.formFields);
    formFields.email = e.target.value;
    this.setState({ formFields });
  };

  phoneChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let formFields = Object.assign({}, this.state.formFields);
    formFields.phone = e.target.value;
    this.setState({ formFields });
  };

  textChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let formFields = Object.assign({}, this.state.formFields);
    formFields.text = e.target.value;
    this.setState({ formFields });
  };

  onHideSuccess = () => {
    this.setState({ submitted: false });
  };

  successMessage = () => {
    if (this.state.submitted) {
      return (
        <div
          className="alert alert-success alert-dismissible fade show"
          style={{ marginTop: "20px", marginBottom: "0" }}
        >
          <strong>Thank you!</strong> Your message is send to the owner.
          <button
            type="button"
            className="btn-close"
            onClick={this.onHideSuccess}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      );
    }
  };

  render() {
    return (
      <section id="contact" className="contact-area ptb-80 bg-f6f6f6">
        <div className="container">
          <div className="section-title">
            <h4>Get in Touch</h4>
            <h2>
              <span className="!font-extralight !text-white">Let&apos;s</span>{" "}
              <span>Contact</span> Us
            </h2>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p> */}
          </div>

          <div className="flex justify-between space-x-10">
            <div className="w-1/2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.1967150300837!2d73.85674371472928!3d18.52043034312216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf311ba7d605%3A0x5a62b4cc2d8e4143!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1641267933138!5m2!1sen!2sin"
                width="100%"
                height="392"
                loading="lazy"
                title="Google Map - Pune, India"
              ></iframe>

              <div className="contact-info">
                <ul>
                  <li>
                    <i className="fa fa-map-marker"></i> Pune, India
                  </li>
                  <li>
                    <i className="fa fa-envelope"></i>
                    <Link href="#">support@legosapien.com</Link>
                  </li>
                  {/* <li>
                    <i className="fa fa-phone"></i>
                    <Link href="#">(+124)412-2445515</Link>
                  </li>
                  <li>
                    <i className="fa fa-fax"></i>
                    <Link href="#">617-241-60055</Link>
                  </li> */}
                </ul>
              </div>
            </div>

            <div className="hidden w-1/2">
              <div className="contact-form">
                <h4>Stay Connected</h4>
                <form id="contactForm" onSubmit={this.onSubmit}>
                  <div className="row">
                    <div className="col-lg-12 col-md-6">
                      <div className="form-group flex flex-col">
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          required={true}
                          data-error="Please enter your name"
                          value={this.state.formFields.name}
                          onChange={this.nameChangeHandler}
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-6">
                      <div className="form-group flex flex-col">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          required={true}
                          data-error="Please enter your email"
                          value={this.state.formFields.email}
                          onChange={this.emailChangeHandler}
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group  flex flex-col">
                        <label htmlFor="number">Phone Number</label>
                        <input
                          type="text"
                          className="form-control"
                          name="number"
                          id="number"
                          required={true}
                          data-error="Please enter your number"
                          value={this.state.formFields.phone}
                          onChange={this.phoneChangeHandler}
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group flex flex-col">
                        <label htmlFor="message">Message</label>
                        <textarea
                          name="message"
                          className="form-control"
                          id="message"
                          cols={30}
                          rows={4}
                          required={true}
                          data-error="Write your message"
                          value={this.state.formFields.text}
                          onChange={this.textChangeHandler}
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <button type="submit" className="btn btn-primary">
                        Send Message
                      </button>
                      {this.successMessage()}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact2;
