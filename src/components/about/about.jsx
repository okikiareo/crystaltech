import { Link } from "react-router-dom";
import { Dots } from "../../assets";
import "./about.css";

const About = () => {
    return (
        <section className="about">
            <div className="about-wrap wrap">
                <div className="about-col1">
                    <h2 className="about-col1-lead">
                        About Us
                    </h2>
                    <p className="about-col1-para">
                        At CrystalTech, We specialize in providing
                        tailored tech solutions that drive progress
                        and enhance digital experiences. From custom
                        web and app development to cutting-edge IT
                        consultancy and expert repairs, we are here to
                        address your unique needs with precision and
                        innovation.
                    </p>
                    <p className="about-col1-para">
                        Beyond services, We are committed to empowering the next generation, support businesses,
                        individuals and students in accessing tech opportunities. Committed to innovation and inclusion,
                        aligning with the UN Sustainable Development Goals (SDGs).
                    </p>
                    <Link className="about-col1-link btn" to="">
                        Learn More
                    </Link>
                </div>
                <div className="about-col2">
                    <img src={Dots} alt="" />
                </div>
            </div>
        </section>
    );
}

export default About;