import { createBrowserRouter } from "react-router";
import MainLayout from "../home/MainLayout";
import Home from "../home/Home";
import ProjectDetails from "../sections/ProjectDetails";
import NotFound from "../sections/NotFound";

const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "project/:projectId",
        element: <ProjectDetails />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default route;
