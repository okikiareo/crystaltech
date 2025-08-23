import { Link } from "react-router-dom";
import "./about.css";

const About = () => {
    return (
        <section className="about">
            <div className="about-wrap wrap">
                <div className="about-col1">
                    <h2 className="about-col1-lead">
                        About Us
                    </h2>
                    <Link className="about-col1-link btn" to="/about">
                        Learn More
                    </Link>
                </div>
                <div className="about-col2">
                    <div className="about-col2-item">
                        <img className="about-col2-img" src="/images/about-1.jpg" alt="" />
                    </div>
                    <div className="about-col2-item">
                        <img className="about-col2-img" src="/images/about-2.jpg" alt="" />
                    </div>
                    <div className="about-col2-item">
                        <img className="about-col2-img" src="/images/about-3.jpg" alt="" />
                    </div>
                    <div className="about-col2-item">
                        <img className="about-col2-img" src="/images/about-4.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;