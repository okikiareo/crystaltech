import { Link } from "react-router-dom";
import { Logo as Icon } from "../../assets";

import "./logo.css";
const Logo = (props) => {
    const { name } = props;
    return (
        <Link className={`logo flex${name ? ` ${name}` : ""}`} to="/">
            <img className="logo-icon" src={Icon} alt="logo" />
            Crystal Tech
        </Link>
    );
}

export default Logo;