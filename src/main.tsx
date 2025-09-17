import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// Trigger server restart

createRoot(document.getElementById("root")!).render(<App />);
