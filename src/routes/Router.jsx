import { createBrowserRouter } from "react-router";
import Home from "../home/Home";
import MainLayout from "../home/MainLayout";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";

const route = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "about",
                element: <About />,
            },
            {
                path: "projects",
                element: <Projects />,
            },
            {
                path: "skills",
                element: <Skills />
            }
        ],
    },
]);

export default route;
