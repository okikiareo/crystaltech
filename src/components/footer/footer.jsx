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
                            to make work simpler and smarter.
                             delivering personalized solutions, seamless support,
                              and innovative services to keep you ahead.
                        </p>
                    </div>
                    <div className="footer-list">
                        <div className="footer-item">
                            <h3 className="footer-item-lead">
                                Explore
                            </h3>
                            <Link className="footer-item-link" to="">
                                Products
                            </Link>
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
                            <Link className="footer-item-link" to="https://www.facebook.com/share/1FhmVcRiNe/?mibextid=qi2Omg" target="blank">
                                Facebook
                            </Link><Link className="footer-item-link" to="https://wa.me/2348145958678" target="blank">
                                Whatsapp
                            </Link>
                            <Link className="footer-item-link" to="https://www.linkedin.com/company/crystaltech/" target="blank">
                                LinkedIn
                            </Link>
                            <Link className="footer-item-link" to="https://www.instagram.com/crystaltech_ltd?igsh=MTgxZTRmYWoxdDRkaQ==" target="blank">
                                Instagram
                            </Link>
                            <Link className="footer-item-link" to="https://x.com/CrystalTechLtd?t=EB1NvmnXArjRKbzZtvu8yw&s=09" target="blank">
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
                                +234 814 595 8678 
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="footer-col2">
                    <div className="footer-copy">
                        &copy; 2025 CrystalTech All Rights Reserved
                    </div>
                    <div className="footer-hubs flex">
                        <Link className="footer-hubs-link flex" to="https://www.instagram.com/crystaltech_ltd?igsh=MTgxZTRmYWoxdDRkaQ==">
                            <RiInstagramLine />
                        </Link>
                        <Link className="footer-hubs-link flex" to="https://www.facebook.com/share/1FhmVcRiNe/?mibextid=qi2Omg">
                            <RiFacebookLine />
                        </Link>
                        <Link className="footer-hubs-link flex" to="https://www.linkedin.com/company/crystaltech/">
                            <RiLinkedinLine />
                        </Link>
                        <Link className="footer-hubs-link flex" to="https://x.com/CrystalTechLtd?t=EB1NvmnXArjRKbzZtvu8yw&s=09">
                            <RiTwitterXLine />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;