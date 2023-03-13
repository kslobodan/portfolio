import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiSkypeLine } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>k.slobodan@yahoo.com</h5>
            <a href="mailto: slobodan@yahoo.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiSkypeLine className="contact__option-icon" />
            <h4>Skype</h4>
            <h5>bobann985</h5>
            <a
              href="https://join.skype.com/invite/HNwlR2Obg377"
              target="_blank"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Profile</h5>
            <a
              href="https://www.linkedin.com/in/slobodan-komazec/"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS */}
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
