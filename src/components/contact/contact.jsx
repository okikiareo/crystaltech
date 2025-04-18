import { Link } from "react-router-dom";
import "./contact.css";

const Contact = () => {
    return (
        <section className="contact">
            <div className="contact-wrap wrap">
                <h2 className="contact-lead">
                    Contact Us
                </h2>
                <p className="contact-para">
                    Get in touch today to explore 
                    how we can simplify and enhance your 
                    tech needs, from development to repairs.
                </p>
                <Link className="contact-link contact-link-email btn" to="">
                    Send an Email
                </Link>
                <Link className="contact-link contact-link-phone btn" to="">
                    Prefer to talk?
                </Link>
            </div>
        </section>
    );
}

export default Contact;