import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add">Add</Link></li>
        <li><Link to="/filter">Filter</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
