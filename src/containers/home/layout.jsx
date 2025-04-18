import { Outlet } from "react-router-dom";
import { Header, Footer } from "../../components";

const HomeLayout = () => {
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