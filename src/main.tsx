import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/root";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReloadPrompt from "./ReloadPrompt";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register(
    import.meta.env.MODE === "production"
      ? "/service-worker.js"
      : "/dev-sw.js?dev-sw"
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App />
        <ReloadPrompt />
      </>
    ),
  },
  {
    path: "/test",
    element: (
      <div
        style={{
          textAlign: "center",
          color: "green",
          fontSize: "4rem",
        }}
      >
        TEST
      </div>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
