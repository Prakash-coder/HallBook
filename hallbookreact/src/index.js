import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom";
import "./index.css"
import App from "./App"

const final = ReactDOM.createRoot(document.getElementById("root"))
final.render(
<BrowserRouter>
    <App />
</BrowserRouter>
)