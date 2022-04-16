import React from "react";
import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/location.png";

function Contact () {
  return (
    <div className="contact">
        {/* <div className="contact-bg"></div> */}
        <div className="contact-wrapper">
            <div className="cwrapper-left">
                <h1 className="contact-title">Let's Connect</h1>
                <div className="contact-info">
                    <div className="contact-item">
                        <img src={Phone} alt="" className="contact-icon"/>512.123.4567</div>
                    <div className="contact-item">
                        <img src={Email} alt="" className="contact-icon"/>letsgrow@flowerpower.com</div>
                    <div className="contact-item">
                        <img src={Address} alt="" className="contact-icon"/>1234 South Congress, Austin, Texas 78704</div>
                    </div>
                </div>
                
            <div className="cwrapper-right">
                <p className="contact-description">
                Our work doesn’t end here on the web. We are here to help you with any and all of your plant care questions.
                Feel free to reach out to here at Flower Power, here’s how to get in touch.
                </p>
            <form className="contact-form">
                <input type="text" placeholder="Name" name="user_name"/>
                <input type="text" placeholder="Subject" name="user_subject"/>
                <input type="text" placeholder="Email" name="user_email"/>
                <textarea rows="5" placeholder="Message" name="message" />
                <button className="submit-btn" type="submit">Submit</button>
            </form>
            </div>
        </div>
    </div>
);
}

export default Contact