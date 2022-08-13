import { Link, NavLink } from "react-router-dom"
import { CardBody, Nav, NavItem } from "reactstrap"

export default function Home(props) {
  return (
    <CardBody>
      <h1>Welcome to Market Moni</h1>
      <p>Fast Instant Transactions with Zero transaction fees</p>
      <p>Access Loans for Business and Personal use</p>

      <Nav>
        <NavItem>
          <NavLink to="/register" tag={Link}>
            Register
          </NavLink>
        </NavItem>
      </Nav>
    </CardBody>
  )
}
