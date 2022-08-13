import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import Register from "./components/Register"
import Home from "./components/Home"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="register" element={<Register />} />
        <Route index element={<Home />} />
      </Route>
    </Routes>
    <Routes>
      <Route path="/reg" element={<Register />} />
    </Routes>
  </BrowserRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
