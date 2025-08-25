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
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint laborum nostrum provident accusantium? Soluta quaerat consectetur earum perspiciatis atque dolorem reprehenderit doloribus similique consequuntur ex esse natus, iusto aspernatur maiores quisquam odit adipisci debitis sint omnis quas animi, voluptate saepe.
                    </p>
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