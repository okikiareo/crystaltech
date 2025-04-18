import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from "react-router-dom";
import { Home, Blog, About } from "./pages";
import { HomeLayout } from "./containers";
import { useTheme, useStyle, useStore } from "./hooks";
import { homeLoader, blogLoader } from "./logic";

const ref = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<HomeLayout />}>
            <Route index element={<Home />} loader={homeLoader} />
            <Route path="blog" element={<Blog />} loader={blogLoader} />
            <Route path="about" element={<About />} />
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
    return (
        <RouterProvider router={ref} />
    );
}

export default App;