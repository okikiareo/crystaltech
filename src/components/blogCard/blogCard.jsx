import { Link } from "react-router-dom";
import { Icon } from "../";
import { truncate } from "../../utils";
import "./blogCard.css";

const BlogCard = (props) => {
    const {
        title,
        image,
        createdAt
    } = props;

    return (
        <div className="blog-card">
            <div className="blog-card-case">
                <img className="blog-card-pics" src={image} alt={title} />
            </div>
            <div className="blog-card-info">
                <div className="blog-card-date">
                    {createdAt}
                </div>
                <div className="blog-card-lead">
                    {truncate({
                        value: title,
                        limit: 32
                    })}
                </div>
                <Link className="blog-card-link flex" to="">
                    Read More
                    <Icon link="arrow-next" />
                </Link>
            </div>
        </div>
    );
}

export default BlogCard;