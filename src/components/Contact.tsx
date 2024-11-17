import React from "react";

const Contact = () => {
  return (
    <>
      <div className="card-holder-contact">
        {/* Card 1: Contact Information */}
        <div className="card-contact">
          <h3>Contact Information</h3>
          <p>
            <strong>Phone:</strong> <a href="tel:+123456789">+1 (234) 567-89</a>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@dentalclinic.com">info@dentalclinic.com</a>
          </p>
          <p>
            <strong>Hours:</strong> Monday to Friday, 9 AM - 6 PM
          </p>
        </div>

        {/* Card 2: Google Map */}
        <div className="card-contact">
          <h3>Find Us Here</h3>
          {/* Embed Google Maps */}
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
