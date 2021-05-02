import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <nav className="col-md-2 bg-light">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink className="nav-link" to="/dashboard">
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink className="nav-link" to="/contact">
              Add Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
