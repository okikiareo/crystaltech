import { Link } from "react-router-dom";
import "./contact.css";

const Contact = () => {
    return (
        <section className="contact">
            <div className="contact-wrap wrap flex">
                <div className="">
                    <h2 className="contact-lead">
                        Contact Us
                    </h2>
                    <p className="contact-para">
                        Get in touch today to explore
                        how we can simplify and enhance your
                        tech needs, from development to repairs.
                    </p>
                    <Link 
                        className="contact-link contact-link-email btn" 
                        to="mailto:aicrystaltech@gmail.com"
                    >
                        Send an Email
                    </Link>
                    <Link 
                        className="contact-link contact-link-phone btn" 
                        to="tel:+234814991849"
                    >
                        Prefer to talk?
                    </Link>
                </div>
                <div className="contact-icon">
                    <img src="/images/contact.png" alt="" />
                </div>
            </div>
        </section>
    );
}

export default Contact;