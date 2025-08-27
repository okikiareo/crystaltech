import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header, Footer } from "../../components";

const HomeLayout = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default HomeLayout;