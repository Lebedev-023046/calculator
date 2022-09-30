import './index.css'

import React from "react";
import reactDom from "react-dom/client";
import { App } from "./src/components/App";


const root = reactDom.createRoot(document.getElementById("root"));

root.render(
  <App/>
);
