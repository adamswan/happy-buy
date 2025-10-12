// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/base.css";
import "./styles/border.css";

// 以375px为基准，设置html的font-size
document.documentElement.style.fontSize = (document.documentElement.clientWidth / 375) * 100 + "px";

window.addEventListener("resize", () => {
  document.documentElement.style.fontSize = (document.documentElement.clientWidth / 375) * 100 + "px";
});

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <App />
  // </StrictMode>
);
