import { Link } from "react-router-dom";
import { Peep } from "../../assets";
import { HeroLabel } from "..";
import "./hero.css";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-wrap wrap">
                <div className="hero-view">
                    <div className="hero-view-blob flex">
                        <div className="hero-view-haze"></div>
                        <img className="hero-view-item" src={Peep} alt="peep" />
                    </div>
                    <HeroLabel
                        text="Smart Solution"
                        icon="flash"
                        name="hero-view-tag1"
                    />
                    <HeroLabel
                        text="Smart Solution"
                        icon="shake"
                        name="hero-view-tag2"
                    />
                </div>
                <div className="hero-info">
                    <h1 className="hero-info-lead">
                        INNOVATIVE <br /> TECH SOLUTIONS FOR A <br /> SMARTER FUTURE.
                    </h1>
                    <p className="hero-info-text">
                        Harness the power of Tech to simplify & enhance
                        your experience—from dynamic digital solutions
                        to efficient repairs and high-quality gadgets.
                    </p>
                    <Link className="hero-info-link btn" to="">
                        Learn More
                    </Link>
                </div>
            </div>
            <div className="hero-tape flex">
                    <ul className="hero-tape-col1 flex">
                        <li className="hero-tape-item">
                            <img src="" alt="" />
                            Image 1
                        </li>
                        <li className="hero-tape-item">
                            <img src="" alt="" />
                            Image 2
                        </li>
                        <li className="hero-tape-item">
                            <img src="" alt="" />
                            Image 3
                        </li>
                        <li className="hero-tape-item">
                            <img src="" alt="" />
                            Image 4
                        </li>
                        <li className="hero-tape-item">
                            <img src="" alt="" />
                            Image 5
                        </li>
                    </ul>
                    <ul className="hero-tape-col2 flex">
                        <li className="hero-tape-item">
                            <img src="" alt="" />
                            Image 1
                        </li>
                        <li className="hero-tape-item">
                            <img src="" alt="" />
                            Image 2
                        </li>
                        <li className="hero-tape-item">
                            <img src="" alt="" />
                            Image 3
                        </li>
                        <li className="hero-tape-item">
                            <img src="" alt="" />
                            Image 4
                        </li>
                        <li className="hero-tape-item">
                            <img src="" alt="" />
                            Image 5
                        </li>
                    </ul>
                </div>
        </section>
    );
}

export default Hero;