import { Link } from "react-router-dom";

import "./logo.css";
const Logo = (props) => {
    const { name } = props;
    return (
        <Link className={`logo flex${name ? ` ${name}` : ""}`} to="/">
            <img className="logo-icon" src="/images/logo.png" alt="logo" />
            CrystalTech
        </Link>
    );
}     

export default Logo;