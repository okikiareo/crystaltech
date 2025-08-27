import { Link } from "react-router-dom";
import { BlogCard } from "../";
import "./blog.css";

const Blog = (props) => {
    const posts = props.posts;
    return (
        <section className="blog">
            <div className="blog-wrap wrap">
                <h2 className="blog-lead">
                    From the Blog
                </h2>
                <p className="blog-para">
                From smart tech tips and buying guides to web development, design trends, 
                and IT strategy, our blog delivers practical insights
                 and inspiration for business owners and curious techies alike
                </p>
                <div className="blog-list">
                    {posts.map(blog => (
                        <BlogCard
                            key={blog.id}
                            {...blog}
                        />
                    ))}
                </div>
                <Link className="blog-link btn" to="/blog">
                    View More
                </Link>
            </div>
        </section>
    );
}

export default Blog;