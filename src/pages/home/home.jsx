import { useLoaderData } from "react-router-dom";
import { Hero, About, Services, Blog, Testimonials, Contact, Product } from "../../components";

const Home = () => {
    const data = useLoaderData();
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Product/>
            <Blog posts={data.posts} />
            <Testimonials testimonials={data.testimonials} />
            <Contact />
        </>
    );
}

export default Home;