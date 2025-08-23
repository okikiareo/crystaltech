import { Link } from "react-router-dom";
import { HeroLabel } from "..";
import "./hero.css";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-wrap wrap">
                <div className="hero-view">
                    <div className="hero-view-blob flex">
                        <div className="hero-view-haze"></div>
                        <img className="hero-view-item"
                            src="/images/peep.png"
                            alt="peep"
                        />
                    </div>
                    <HeroLabel
                        text="Smart Solution"
                        icon={null}
                        name="hero-view-tag1"
                    />
                    <HeroLabel
                        text="Smart Solution"
                        icon={null}
                        name="hero-view-tag2"
                    />
                </div>
                <div className="hero-info">
                    <h1 className="hero-info-lead">
                        INNOVATIVE <br /> TECH SOLUTIONS FOR A <br /> SMARTER FUTURE.
                    </h1>
                    <p className="hero-info-text">
                        Harness the power of Tech to simplify & enhance
                        your experience from dynamic digital solutions
                        to efficient repairs and high-quality gadgets.
                    </p>
                    <Link className="hero-info-link btn" to="/about">
                        Learn More
                    </Link>
                </div>
            </div>
            <div className="hero-tape flex">
                <ul className="hero-tape-col1 flex">
                    <li className="hero-tape-item">
                        <img className="hero-tape-logo" src="/images/sponsor-1.png" alt="" />
                    </li>
                    <li className="hero-tape-item">
                        <img className="hero-tape-logo" src="/images/sponsor-2.png" alt="" />
                    </li>
                    <li className="hero-tape-item">
                        <img className="hero-tape-logo" src="/images/sponsor-3.png" alt="" />
                    </li>
                    {/* <li className="hero-tape-item">
                        <img src="/images/sponsor-4.png" alt="" />
                    </li> */}
                    <li className="hero-tape-item">
                        <img className="hero-tape-logo" src="/images/sponsor-5.png" alt="" />
                    </li>
                </ul>
                <ul className="hero-tape-col2 flex">
                    <li className="hero-tape-item">
                        <img className="hero-tape-logo" src="/images/sponsor-1.png" alt="" />
                    </li>
                    <li className="hero-tape-item">
                        <img className="hero-tape-logo" src="/images/sponsor-2.png" alt="" />
                    </li>
                    <li className="hero-tape-item">
                        <img className="hero-tape-logo" src="/images/sponsor-3.png" alt="" />
                    </li>
                    {/* <li className="hero-tape-item">
                        <img src="/images/sponsor-4.png" alt="" />
                    </li> */}
                    <li className="hero-tape-item">
                        <img className="hero-tape-logo" src="/images/sponsor-5.png" alt="" />
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Hero;