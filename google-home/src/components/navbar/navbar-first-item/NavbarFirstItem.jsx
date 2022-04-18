import "./styles.css";


/* way 1: direct way */
export const NavbarFirstItem = () => {
  return (
    <ul className="nav-bar-first-item">
      <a className="navbar-child-item" href="#">
        <li>About</li>
      </a>
      <a className="navbar-child-item" href="#">
        <li>Store</li>
      </a>
    </ul>
  );
};
