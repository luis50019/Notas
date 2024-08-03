import { createRoot } from "react-dom/client";
import App from "./src/App";
import { Notes } from "./src/context/Notes";
createRoot(document.getElementById('app')).render(
  <Notes>
    <App></App>
  </Notes>
)