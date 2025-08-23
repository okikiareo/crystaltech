import "./heroLabel.css";

const HeroLabel = (props) => {
    const { text, icon, name } = props;
    return (
        <div className={`hint flex ${name}`}>
            <div className="hint-icon flex">
                {/* Icon goes here */}
            </div>
            <div className="hint-text">
                {text}
            </div>
        </div>
    );
}

export default HeroLabel;