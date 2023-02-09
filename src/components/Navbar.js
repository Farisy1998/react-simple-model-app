import { Link } from "react-router-dom";

export default function Navbar() {
    return (
      <div className="navbar navbar-expand navbar-light bg-light">
        <ul className="navbar-nav m-3">
          <li className="nav-item me-3">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/fc">
              First Component
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/sc">
              Second Component
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/tc">
              Third Component
            </Link>
          </li>
        </ul>
      </div>
    );
}
