import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/root";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { registerSW } from "virtual:pwa-register";

const updateSW = registerSW({
  onNeedRefresh() {
    console.log("onNeedRefresh");
  },
  onOfflineReady() {
    console.log("onOfflineReady");
  },
});

updateSW();

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
    element: <App />,
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
