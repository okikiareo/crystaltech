import { RiFacebookLine, RiLinkedinLine, RiInstagramLine, RiTwitterXLine } from "react-icons/ri";
import "./testimonialsCard.css";

const TestimonialsCard = (props) => {
    const { 
        name, 
        username, 
        imageUrl, 
        feedback,
        handle 
    } = props;

    let handleIcon;
    switch (handle) {
        case "Instagram":
            handleIcon = <RiInstagramLine size={24} />
            break;
        case "LinkedIn":
            handleIcon = <RiLinkedinLine size={24} />
            break;
        case "Facebook":
            handleIcon = <RiFacebookLine size={24} />
            break;
        case "X":
            handleIcon = <RiTwitterXLine size={24} />
            break;
        default:
            throw new Error("Handle Error: Use either Instagram, LinkedIn, Facebook or X");
    }
    return (
        <div className="testimonial-card">
            <div className="testimonial-card-logo">
                {handleIcon}
            </div>
            <div className="testimonial-card-head">
                <div className="testimonial-card-face">
                    <img 
                        className="testimonial-card-pics" 
                        src={imageUrl} 
                        alt={name} 
                    />
                </div>
                <div className="testimonial-card-name">
                    {name}
                </div>
                <div className="testimonial-card-uuid">
                    {username}
                </div>
            </div>
            <p className="testimonial-card-body">
                {feedback}
            </p>
        </div>
    );
}

export default TestimonialsCard;