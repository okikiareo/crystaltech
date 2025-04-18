import { Icon } from "../";
import "./testimonialsCard.css";

const TestimonialsCard = (props) => {
    const { name, username, image, post } = props;
    return (
        <div className="testimonial-card">
            <Icon link="twitter" name="testimonial-card-logo" />
            <div className="testimonial-card-head">
                <div className="testimonial-card-pics">
                    <img src={image} alt="" />
                </div>
                <div className="testimonial-card-name">
                    {name}
                </div>
                <div className="testimonial-card-uuid">
                    {username}
                </div>
            </div>
            <p className="testimonial-card-body">
                {post}
            </p>
        </div>
    );
}

export default TestimonialsCard;