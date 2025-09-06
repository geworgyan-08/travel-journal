
import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { Router } from "./routes/router";
import { Spin } from "antd";
import { ToastContainer } from "react-toastify";


export default function App() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            background: "linear-gradient(to right, #ff7f50, #ffb347)",
          }}
        >
          <Spin size="large" tip="Loading..." />
        </div>
      }
    >
      <RouterProvider router={Router} />
      <ToastContainer />
    </Suspense>
  );
}
