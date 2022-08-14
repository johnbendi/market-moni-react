// import logo from "./logo.svg"
import { Card, CardHeader } from "reactstrap"
// import { MdAppRegistration, MdLogin } from "react-icons/md"
import { Outlet, Link, Navigate } from "react-router-dom"

import "./App.css"

function App() {
  return (
    <Card className="m-2">
      <CardHeader>
        <Link to="/register">Market Mon</Link>
      </CardHeader>
      <Outlet />
    </Card>
  )
}

export default App
