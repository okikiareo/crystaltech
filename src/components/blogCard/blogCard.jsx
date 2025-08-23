import { Link } from "react-router-dom";
import { RiArrowRightLine } from "react-icons/ri";
import "./blogCard.css";
import { formatDate } from "../../utils/functions";

const BlogCard = (props) => {
    const {
        id,
        title,
        description,
        images,
        createdAt
    } = props;

    return (
        <div className="blog-card">
            <div className="blog-card-case">
                <img 
                    className="blog-card-pics" 
                    src={images[0]} 
                    alt={title} 
                />
            </div>
            <div className="blog-card-info">
                <div className="blog-card-date">
                    {formatDate(createdAt)}
                </div>
                <div className="blog-card-lead">
                    {title}
                </div>
                <div className="blog-card-desc">
                    {description}
                </div>
                <Link className="blog-card-link flex" to={`/blog/${id}`}>
                    Read More
                    <RiArrowRightLine />
                </Link>
            </div>
        </div>
    );
}

export default BlogCard;