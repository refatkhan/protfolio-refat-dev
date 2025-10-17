import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import route from "./routes/Router";
import { HelmetProvider } from "@dr.pogodin/react-helmet";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={route} />
    </HelmetProvider>
  </StrictMode>
);
