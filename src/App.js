// import logo from "./logo.svg"
import { Card, CardBody, CardHeader, Nav, NavItem, NavLink } from "reactstrap"
import { MdAppRegistration, MdLogin } from "react-icons/md"
import { Outlet, Link, Navigate } from "react-router-dom"

import "./App.css"

function App() {
  return (
    <Card className="m-2">
      <CardHeader>Market Moni</CardHeader>
      <Outlet />
    </Card>
  )
}

export default App
