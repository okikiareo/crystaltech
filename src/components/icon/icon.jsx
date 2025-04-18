import "./icon.css";

const Icon = (props) => {
    const { link, name, attr } = props;
    return (
        <svg {...attr} className={`icon${name ? ` ${name}` : ""}`}>
            <use xlinkHref={`/sprite.svg#${link}`} />
        </svg>
    );
}

export default Icon;