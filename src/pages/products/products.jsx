

import "./products.css";

const projects = [
    {
        id: 1,
        title: "Real Estate",
        description: "Modern property showcase with virtual tours and interactive floor plans for real estate professionals.",
        image: "/images/project (5).jpg",
        tag: "Showcase",
        link: ""
    },
    {
        id: 2,
        title: "Kitchen Appliances",
        description: "Premium kitchen equipment e-commerce platform with advanced filtering and secure payment processing.",
        image: "/images/project (4).jpg",
        tag: "Store",
        link: "https://frontier-appliances.com/"
    },
    {
        id: 3,
        title: "HIV Initiative",
        description: "Healthcare awareness platform with educational resources and community support features.",
        image: "/images/project (1).png",
        tag: "NGO",
        link: "https://yahd.org/"
    },
    {
        id: 4,
        title: "Sales App",
        description: "Mobile sales management app with lead tracking and performance analytics for teams.",
        image: "/images/app.png",
        tag: "APP",
        link: ""
    },
    {
        id: 5,
        title: "IT Company",
        description: "Corporate IT solutions website showcasing services and client testimonials.",
        image: "/images/project (2).jpg",
        tag: "Sebsite",
        link: "https://sunnybabakorex.com/"
    },
    {
        id: 6,
        title: "Furniture",
        description: "Elegant furniture catalog with 360-degree product views and room visualization tools.",
        image: "/images/project (10).png",
        tag: "Showcase",
        link: ""
    },
     {
        id: 7,
        title: "AI Agent",
        description: "AI-powered assistant with natural language processing and task automation capabilities.",
        image: "/images/auto.jpg",
        tag: "App",
        link: "https://n8n.io/"
    },
    {
        id: 8,
        title: "Business Initiative",
        description: "Business development platform with market analysis tools and growth strategies.",
        image: "/images/project (7).jpg",
        tag: "website",
        link: "http://reebabds.com"
    },
    {
        id: 9,
        title: "Videography",
        description: "Professional video production portfolio with cinematic work and booking management.",
        image: "/images/project (8).jpg",
        tag: "Showcase",
        link: "http://frontier-appliances.com/"
    }
];

const Products = () => {
    return (
        <main className="products-page" aria-labelledby="products-heading">
            <section className="products-hero">
                <div className="container">
                    <h1 id="products-heading">Our Projects</h1>
                    <p className="subtitle">A selection of recent work delivered for clients.</p>
                </div>
            </section>

            <section className="products-grid-section">
                <div className="container">
                    <div className="products-grid">
                        {projects.map((project) => (
                            <article key={project.id} className="project-card">
                                <div className="project-media">
                                    <img src={project.image} alt={project.title} loading="lazy" />
                                    <span className="project-tag">{project.tag}</span>
                                </div>
                                <div className="project-content">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-desc">{project.description}</p>
                                    {project.link ? (
                                        <a
                                            className="project-cta"
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`Open ${project.title} in new tab`}
                                        >
                                            View project
                                        </a>
                                    ) : (
                                        <button className="project-cta" type="button" aria-label={`View ${project.title}`}>
                                            View project
                                        </button>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Products;