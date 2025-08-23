import { Link, NavLink, useLoaderData, useSearchParams } from "react-router-dom";
import "./blog.css";
import { formatDate } from "../../utils/functions";
import { RiCalendarLine, RiArrowRightLine } from "react-icons/ri";

const Card = (props) => {
    const blog = props;
    return (
        <div className="Blog-card">
            <div className="Blog-card-rack">
                <img
                    className="Blog-card-snap"
                    src={blog.images[0]}
                    alt=""
                />
            </div>
            <div className="Blog-card-info">
                <div className="Blog-card-line flex">
                    <div className="Blog-card-type">
                        Type
                    </div>
                    <div className="Blog-card-date">
                        <RiCalendarLine />
                        {formatDate(blog.createdAt)}
                    </div>
                </div>
                <h3 className="Blog-card-lead">
                    {blog.title}
                </h3>
                <p className="Blog-card-text">
                    {blog.description}
                </p>
                <Link 
                    className="Blog-card-link flex" 
                    to={`/${blog.id}`}
                >
                    Read More
                    <RiArrowRightLine />
                </Link>
            </div>
        </div>
    );
}

const Blog = () => {
    const [searchParam, setSearchParam] = useSearchParams();
    const { posts } = useLoaderData();
    
    const filterParam = searchParam.get("type");
    const sortedPosts = filterParam ? 
    posts.filter(post => post.type === filterParam) : 
    posts;

    return (
        <main className="Blog">
            <section className="Blog-row1">
                <div className="Blog-row1-wrap wrap">
                    <h1 className="Blog-row1-lead">
                        Our Blog
                        <img
                            className="Blog-row1-rays"
                            src="/icons/rays.svg"
                            alt=""
                        />
                    </h1>
                    <p className="Blog-row1-para">
                        Stay ahead with expert insights, tech tips, and the latest trends. Explore 	&ldquo;Your Laptop Health Guide&rdquo; and more - because knowledge powers technology!
                    </p>
                </div>
            </section>
            <section className="Blog-row2">
                <nav className="Blog-menu-wrap wrap">
                    <NavLink></NavLink>
                </nav>
                <div className="Blog-row2-wrap wrap">
                    {sortedPosts.map(blog => (
                       <Card key={blog.id} {...blog} />
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Blog;