import { Link } from "react-router-dom";
import { Logo } from "../";
import { RiFacebookLine, RiLinkedinLine, RiInstagramLine, RiTwitterXLine } from "react-icons/ri";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-wrap wrap">
                <div className="footer-col1">
                    <div className="footer-info">
                        <Logo name="footer-info-logo" />
                        <p className="footer-info-desc">
                            At Crystal Tech, we harness technology
                            to make life simpler and smarter. From
                            personalized solutions to trusted products,
                            we help you stay ahead with seamless
                            support and quality service.
                        </p>
                    </div>
                    <div className="footer-list">
                        <div className="footer-item">
                            <h3 className="footer-item-lead">
                                Explore
                            </h3>
                            <Link className="footer-item-link" to="">
                                About
                            </Link>
                            <Link className="footer-item-link" to="">
                                Blog
                            </Link>
                            <Link className="footer-item-link" to="">
                                Partners
                            </Link>
                            <Link className="footer-item-link" to="">
                                Contact
                            </Link>
                        </div>
                        <div className="footer-item">
                            <h3 className="footer-item-lead">
                                Socials
                            </h3>
                            <Link className="footer-item-link" to="">
                                Facebook
                            </Link>
                            <Link className="footer-item-link" to="">
                                LinkedIn
                            </Link>
                            <Link className="footer-item-link" to="">
                                Instagram
                            </Link>
                            <Link className="footer-item-link" to="">
                                Twitter (X)
                            </Link>
                        </div>
                        <div className="footer-item">
                            <h3 className="footer-item-lead">
                                Contact
                            </h3>
                            <Link className="footer-item-link" to="">
                                aicrystaltech@gmail.com
                            </Link>
                            <Link className="footer-item-link" to="">
                                +234 814 499 1849
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="footer-col2">
                    <div className="footer-copy">
                        &copy; 2025 CrystalTech All Rights Reserved
                    </div>
                    <div className="footer-hubs flex">
                        <Link className="footer-hubs-link flex" to="">
                            <RiInstagramLine />
                        </Link>
                        <Link className="footer-hubs-link flex" to="">
                            <RiFacebookLine />
                        </Link>
                        <Link className="footer-hubs-link flex" to="">
                            <RiLinkedinLine />
                        </Link>
                        <Link className="footer-hubs-link flex" to="">
                            <RiTwitterXLine />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;