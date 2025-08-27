
import "./product.css"
import { Link } from "react-router-dom";

const featuredProjects = [
    {
        id: 1,
        title: "Furniture",
        description: "Elegant furniture catalog with 360-degree product views and room visualization tools.",
        image: "/images/project (10).png",
        tag: "Showcase"
    },
    {
        id: 2,
        title: "AI Agent",
        description: "Awareness platform with resources and community support.",
        image: "/images/auto.jpg",
        tag: "n8n"
    },
    {
        id: 3,
        title: "Kitchen Appliances",
        description: "Premium kitchen equipment platform with advanced filtering.",
        image: "/images/project (4).jpg",
        tag: "Store"
    }
];

const Product = () =>{
    return(
        <section className="product" aria-labelledby="featured-products-heading">
            <div className="container">
                <h2 id="featured-products-heading" className="product-title-lg">Featured Projects</h2>

                <div className="products-grid">
                    {featuredProjects.map((project) => (
                        <article key={project.id} className="project-card">
                            <div className="project-media">
                                <img src={project.image} alt={project.title} loading="lazy" />
                                <span className="project-tag">{project.tag}</span>
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.description}</p>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="product-actions">
                    <Link to="/products" className="project-cta">View more</Link>
                </div>
            </div>
        </section>
    )
}

export default Product;