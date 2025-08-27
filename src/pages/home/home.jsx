import { useLoaderData } from "react-router-dom";
import { Hero, About, Services, Blog, Testimonials, Contact, Product } from "../../components";
import { useSEO } from "../../hooks";

const Home = () => {
    const data = useLoaderData();
    useSEO({
        title: "CrystalTech — Build capacity with the power of tech",
        description: "We deliver web/app development, QA & IT consultancy, design services, and AI automation.",
        url: "https://aicrystaltech.com/",
        image: "/images/logo.png",
    });
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