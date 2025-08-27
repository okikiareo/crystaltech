import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from "react-router-dom";
import { Home, Blog, About, Products } from "./pages";
import { HomeLayout } from "./containers";
import { useTheme, useStyle, useStore } from "./hooks";
import { homeLoader, blogLoader } from "./logic";
import { useEffect } from "react";

const ref = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<HomeLayout />}>
            <Route index element={<Home />} loader={homeLoader} />
            <Route path="blog" element={<Blog />} loader={blogLoader} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
        </Route>
    )
);

const App = () => {
    const { state } = useStore();
    useTheme(); /* */
    useStyle({ /* */
        name: "color-scheme",
        value: state.mode
    }); 
    useEffect(() => {
        const org = {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "CrystalTech",
            "url": "https://aicrystaltech.com/",
            "logo": "https://aicrystaltech.com/images/logo.png",
            "sameAs": [
                "https://x.com/", 
                "https://www.linkedin.com/"
            ]
        };
        const website = {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "CrystalTech",
            "url": "https://aicrystaltech.com/",
            "potentialAction": {
                "@type": "SearchAction",
                "target": "https://aicrystaltech.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
            }
        };
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.text = JSON.stringify([org, website]);
        document.head.appendChild(script);
        return () => {
            document.head.removeChild(script);
        };
    }, []);
    return (
        <RouterProvider router={ref} />
    );
}

export default App;